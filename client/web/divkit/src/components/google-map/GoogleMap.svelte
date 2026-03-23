<script lang="ts">
    import { getContext, onMount, onDestroy } from 'svelte';

    import css from './GoogleMap.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivGoogleMapData, GoogleMapMarker } from '../../types/google-map';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { wrapError } from '../../utils/wrapError';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import Outer from '../utilities/Outer.svelte';
    import { genClassName } from '../../utils/genClassName';
    import { isPositiveNumber } from '../../utils/isPositiveNumber';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivGoogleMapData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    let hasError = false;
    let aspectPaddingBottom = '0';
    let latitude = 0;
    let longitude = 0;
    let zoom = 10;
    let mapType: string = 'normal';
    let allowZoom = true;
    let allowScroll = true;
    let resolvedApiKey: string | undefined = undefined;
    let resolvedMarkers: GoogleMapMarker[] = [];
    let iframeDoc = '';
    let iframeEl: HTMLIFrameElement | undefined;
    let readyFired = false;

    $: jsonLatitude = componentContext.getDerivedFromVars(componentContext.json.latitude);
    $: jsonLongitude = componentContext.getDerivedFromVars(componentContext.json.longitude);
    $: jsonZoom = componentContext.getDerivedFromVars(componentContext.json.zoom);
    $: jsonMapType = componentContext.getDerivedFromVars(componentContext.json.map_type);
    $: jsonAllowZoom = componentContext.getDerivedFromVars(componentContext.json.allow_zoom);
    $: jsonAllowScroll = componentContext.getDerivedFromVars(componentContext.json.allow_scroll);
    $: jsonApiKey = componentContext.getDerivedFromVars(componentContext.json.api_key);
    $: jsonApiKeyWeb = componentContext.getDerivedFromVars(componentContext.json.api_key_web);
    $: jsonMarkers = componentContext.getDerivedFromVars(componentContext.json.markers);
    $: jsonAspect = componentContext.getDerivedFromVars(componentContext.json.aspect);

    $: {
        latitude = typeof $jsonLatitude === 'number' ? $jsonLatitude : 0;
        longitude = typeof $jsonLongitude === 'number' ? $jsonLongitude : 0;
        zoom = typeof $jsonZoom === 'number' ? $jsonZoom : 10;
        mapType = typeof $jsonMapType === 'string' ? $jsonMapType : 'normal';

        const webKey = $jsonApiKeyWeb;
        const baseKey = $jsonApiKey;
        resolvedApiKey = typeof webKey === 'string' ? webKey : (typeof baseKey === 'string' ? baseKey : undefined);

        resolvedMarkers = Array.isArray($jsonMarkers) ? $jsonMarkers : [];

        if (!resolvedApiKey) {
            hasError = true;
            componentContext.logError(wrapError(new Error('Missing "api_key" or "api_key_web" in "google_map"')));
        } else {
            hasError = false;
        }
    }

    $: allowZoom = correctBooleanInt($jsonAllowZoom, allowZoom);
    $: allowScroll = correctBooleanInt($jsonAllowScroll, allowScroll);

    $: {
        const newRatio = $jsonAspect?.ratio;
        if (newRatio && isPositiveNumber(newRatio)) {
            aspectPaddingBottom = (100 / Number(newRatio)).toFixed(2);
        } else {
            aspectPaddingBottom = '0';
        }
    }

    function escapeHtml(str: string): string {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function getMapTypeId(type: string): string {
        switch (type) {
            case 'satellite': return 'satellite';
            case 'terrain': return 'terrain';
            case 'hybrid': return 'hybrid';
            case 'normal':
            default:
                return 'roadmap';
        }
    }

    function buildMarkerJs(markers: GoogleMapMarker[]): string {
        return markers.map((m, i) => {
            const lat = Number(m.latitude) || 0;
            const lng = Number(m.longitude) || 0;
            const title = m.title ? escapeHtml(String(m.title)) : '';
            const color = m.color ? String(m.color) : '';
            const hasActions = m.on_click_actions && m.on_click_actions.length > 0;

            let iconOpt = '';
            if (color) {
                iconOpt = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${escapeHtml(color)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`;
            }

            const clickHandler = hasActions
                ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${i}},'*');});`
                : '';

            return `(function(){var m=new google.maps.Marker({position:{lat:${lat},lng:${lng}},map:map,title:'${title}'${iconOpt}});${clickHandler}})();`;
        }).join('\n');
    }

    $: {
        if (resolvedApiKey) {
            const markersJs = buildMarkerJs(resolvedMarkers);
            const mapTypeId = getMapTypeId(mapType);
            const gestureHandling = allowScroll || allowZoom ? 'auto' : 'none';

            iframeDoc = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${latitude},lng:${longitude}},
zoom:${Math.round(zoom)},
mapTypeId:'${mapTypeId}',
gestureHandling:'${gestureHandling}',
zoomControl:${allowZoom},
scrollwheel:${allowScroll},
draggable:${allowScroll},
fullscreenControl:false,
streetViewControl:false
});
${markersJs}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${escapeHtml(resolvedApiKey)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`;
        } else {
            iframeDoc = '';
        }
    }

    function handleMessage(event: MessageEvent): void {
        if (!iframeEl || event.source !== iframeEl.contentWindow) return;

        const data = event.data;
        if (!data || typeof data !== 'object') return;

        if (data.type === 'map_ready' && !readyFired) {
            readyFired = true;
            componentContext.execAnyActions(componentContext.json.on_ready_actions);
        } else if (data.type === 'map_error') {
            componentContext.execAnyActions(componentContext.json.on_error_actions);
        } else if (data.type === 'marker_click' && typeof data.index === 'number') {
            const marker = resolvedMarkers[data.index];
            if (marker?.on_click_actions) {
                componentContext.execAnyActions(marker.on_click_actions);
            }
        }
    }

    onMount(() => {
        window.addEventListener('message', handleMessage);
    });

    onDestroy(() => {
        window.removeEventListener('message', handleMessage);
    });
</script>

{#if !hasError && iframeDoc}
    <Outer
        cls={genClassName('google-map', css, {})}
        {componentContext}
        {layoutParams}
        heightByAspect={aspectPaddingBottom !== '0'}
    >
        {#if aspectPaddingBottom !== '0'}
            <div class={css['google-map__aspect-wrapper']} style:padding-bottom="{aspectPaddingBottom}%">
                <iframe
                    class={css['google-map__frame']}
                    srcdoc={iframeDoc}
                    title="Google Map"
                    sandbox="allow-scripts allow-same-origin"
                    bind:this={iframeEl}
                ></iframe>
            </div>
        {:else}
            <iframe
                class={css['google-map__frame']}
                srcdoc={iframeDoc}
                title="Google Map"
                sandbox="allow-scripts allow-same-origin"
                bind:this={iframeEl}
            ></iframe>
        {/if}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
