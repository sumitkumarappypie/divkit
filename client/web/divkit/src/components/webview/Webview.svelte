<script lang="ts">
    import { getContext } from 'svelte';

    import css from './Webview.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivWebviewData } from '../../types/webview';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { wrapError } from '../../utils/wrapError';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import Outer from '../utilities/Outer.svelte';
    import { genClassName } from '../../utils/genClassName';
    import { isPositiveNumber } from '../../utils/isPositiveNumber';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivWebviewData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    let hasError = false;
    let url: string | undefined = undefined;
    let html: string | undefined = undefined;
    let javascriptEnabled = false;
    let allowScrolling = true;
    let allowNavigation = false;
    let scaleToFit = false;
    let aspectPaddingBottom = '0';

    $: jsonUrl = componentContext.getDerivedFromVars(componentContext.json.url);
    $: jsonHtml = componentContext.getDerivedFromVars(componentContext.json.html);
    $: jsonJsEnabled = componentContext.getDerivedFromVars(componentContext.json.javascript_enabled);
    $: jsonAllowScrolling = componentContext.getDerivedFromVars(componentContext.json.allow_scrolling);
    $: jsonAllowNavigation = componentContext.getDerivedFromVars(componentContext.json.allow_navigation);
    $: jsonScaleToFit = componentContext.getDerivedFromVars(componentContext.json.scale_to_fit);
    $: jsonAspect = componentContext.getDerivedFromVars(componentContext.json.aspect);

    $: {
        url = typeof $jsonUrl === 'string' ? $jsonUrl : undefined;
        html = typeof $jsonHtml === 'string' ? $jsonHtml : undefined;

        if (!url && !html) {
            hasError = true;
            componentContext.logError(wrapError(new Error('Missing "url" or "html" in "webview"')));
        } else {
            hasError = false;
        }
    }

    $: javascriptEnabled = correctBooleanInt($jsonJsEnabled, javascriptEnabled);
    $: allowScrolling = correctBooleanInt($jsonAllowScrolling, allowScrolling);
    $: allowNavigation = correctBooleanInt($jsonAllowNavigation, allowNavigation);
    $: scaleToFit = correctBooleanInt($jsonScaleToFit, scaleToFit);

    $: {
        const newRatio = $jsonAspect?.ratio;
        if (newRatio && isPositiveNumber(newRatio)) {
            aspectPaddingBottom = (100 / Number(newRatio)).toFixed(2);
        } else {
            aspectPaddingBottom = '0';
        }
    }

    $: sandbox = [
        'allow-same-origin',
        ...(javascriptEnabled ? ['allow-scripts'] : []),
        ...(allowNavigation ? ['allow-popups'] : [])
    ].join(' ');

    function onLoad(): void {
        componentContext.execAnyActions(componentContext.json.on_load_actions);
    }

    function onError(): void {
        componentContext.execAnyActions(componentContext.json.on_error_actions);
    }
</script>

{#if !hasError}
    <Outer
        cls={genClassName('webview', css, {})}
        {componentContext}
        {layoutParams}
        heightByAspect={aspectPaddingBottom !== '0'}
    >
        {#if aspectPaddingBottom !== '0'}
            <div class={css['webview__aspect-wrapper']} style:padding-bottom="{aspectPaddingBottom}%">
                <iframe
                    class={css.webview__frame}
                    src={url || undefined}
                    srcdoc={!url ? html : undefined}
                    {sandbox}
                    scrolling={allowScrolling ? 'auto' : 'no'}
                    title="webview"
                    on:load={onLoad}
                    on:error={onError}
                ></iframe>
            </div>
        {:else}
            <iframe
                class={css.webview__frame}
                src={url || undefined}
                srcdoc={!url ? html : undefined}
                {sandbox}
                scrolling={allowScrolling ? 'auto' : 'no'}
                title="webview"
                on:load={onLoad}
                on:error={onError}
            ></iframe>
        {/if}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
