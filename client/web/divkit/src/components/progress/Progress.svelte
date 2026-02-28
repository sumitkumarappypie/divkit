<script lang="ts">
    import { getContext } from 'svelte';

    import css from './Progress.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivProgressData } from '../../types/progress';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { correctColor } from '../../utils/correctColor';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { booleanInt } from '../../utils/booleanInt';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivProgressData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    let progressValue = 0;
    let progressStyle: 'linear' | 'circular' = 'linear';
    let isIndeterminate = false;
    let activeColor = '#129386';
    let inactiveColor = 'rgba(0, 0, 0, .1)';
    let trackThickness = 4;

    $: origJson = componentContext.origJson;

    function rebind(): void {
        progressValue = 0;
        progressStyle = 'linear';
        isIndeterminate = false;
        activeColor = '#129386';
        inactiveColor = 'rgba(0, 0, 0, .1)';
        trackThickness = 4;
    }

    $: if (origJson) {
        rebind();
    }

    $: jsonValue = componentContext.getDerivedFromVars(componentContext.json.value);
    $: jsonStyle = componentContext.getDerivedFromVars(componentContext.json.style);
    $: jsonIsIndeterminate = componentContext.getDerivedFromVars(componentContext.json.is_indeterminate);
    $: jsonActiveColor = componentContext.getDerivedFromVars(componentContext.json.active_color);
    $: jsonInactiveColor = componentContext.getDerivedFromVars(componentContext.json.inactive_color);
    $: jsonTrackThickness = componentContext.getDerivedFromVars(componentContext.json.track_thickness);

    $: {
        if (typeof $jsonValue === 'number') {
            progressValue = Math.max(0, Math.min(1, $jsonValue));
        }
    }

    $: {
        if ($jsonStyle === 'linear' || $jsonStyle === 'circular') {
            progressStyle = $jsonStyle;
        }
    }

    $: {
        isIndeterminate = correctBooleanInt($jsonIsIndeterminate, isIndeterminate);
    }

    $: {
        activeColor = correctColor($jsonActiveColor, 1, activeColor);
    }

    $: {
        inactiveColor = correctColor($jsonInactiveColor, 1, inactiveColor);
    }

    $: {
        if (typeof $jsonTrackThickness === 'number' && $jsonTrackThickness >= 0) {
            trackThickness = $jsonTrackThickness;
        }
    }

    // SVG circular progress calculations
    const circularSize = 48;
    const circularRadius = 20;
    const circularCircumference = 2 * Math.PI * circularRadius;

    $: circularOffset = circularCircumference * (1 - progressValue);

    $: stl = {
        '--divkit-progress-active-color': activeColor,
        '--divkit-progress-inactive-color': inactiveColor
    };

    $: ariaValue = isIndeterminate ? undefined : Math.round(progressValue * 100);
</script>

{#if true}
    <Outer
        cls={genClassName('progress', css, {})}
        style={stl}
        {componentContext}
        {layoutParams}
    >
        {#if progressStyle === 'linear'}
            <div
                class={css.progress__linear}
                style="height: {pxToEm(trackThickness)}"
                role="progressbar"
                aria-valuenow={ariaValue}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class={genClassName('progress__linear-fill', css, { indeterminate: isIndeterminate })}
                    style="width: {isIndeterminate ? '30%' : (progressValue * 100) + '%'}"
                ></div>
            </div>
        {:else}
            <svg
                class={css.progress__circular}
                width={circularSize}
                height={circularSize}
                viewBox="0 0 {circularSize} {circularSize}"
                role="progressbar"
                aria-valuenow={ariaValue}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <circle
                    class={css['progress__circular-track']}
                    cx={circularSize / 2}
                    cy={circularSize / 2}
                    r={circularRadius}
                    stroke-width={trackThickness}
                />
                <circle
                    class={genClassName('progress__circular-fill', css, { indeterminate: isIndeterminate })}
                    cx={circularSize / 2}
                    cy={circularSize / 2}
                    r={circularRadius}
                    stroke-width={trackThickness}
                    stroke-dasharray={circularCircumference}
                    stroke-dashoffset={isIndeterminate ? circularCircumference * 0.75 : circularOffset}
                    stroke-linecap="round"
                />
            </svg>
        {/if}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
