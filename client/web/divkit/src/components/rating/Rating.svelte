<script lang="ts">
    import { getContext } from 'svelte';

    import css from './Rating.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivRatingData } from '../../types/rating';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { makeStyle } from '../../utils/makeStyle';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { createVariable } from '../../expressions/variable';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivRatingData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

    let hasError = false;
    let maxRating = 5;
    let step = 1;
    let isInteractive = true;
    let iconSize = 32;
    let iconSpacing = 4;
    let activeColor = '#ffc107';
    let inactiveColor = '#e0e0e0';
    let borderColor = '';
    let disabledColor = '#bdbdbd';

    $: origJson = componentContext.origJson;

    function rebind(): void {
        hasError = false;
        maxRating = 5;
        step = 1;
        isInteractive = true;
        iconSize = 32;
        iconSpacing = 4;
        activeColor = '#ffc107';
        inactiveColor = '#e0e0e0';
        borderColor = '';
        disabledColor = '#bdbdbd';
    }

    $: if (origJson) {
        rebind();
    }

    // Variable binding
    $: variableName = componentContext.json.rating_variable;
    $: ratingVariable = variableName &&
        (componentContext.getVariable(variableName, 'string') ||
         rootCtx.awaitGlobalVariable(variableName, 'string', '0')) ||
        createVariable('temp', 'string', '0');

    // Derived JSON properties
    $: jsonMaxRating = componentContext.getDerivedFromVars(componentContext.json.max_rating);
    $: jsonStep = componentContext.getDerivedFromVars(componentContext.json.step);
    $: jsonIsInteractive = componentContext.getDerivedFromVars(componentContext.json.is_interactive);
    $: jsonIconSize = componentContext.getDerivedFromVars(componentContext.json.icon_size);
    $: jsonIconSpacing = componentContext.getDerivedFromVars(componentContext.json.icon_spacing);
    $: jsonActiveColor = componentContext.getDerivedFromVars(componentContext.json.active_color);
    $: jsonInactiveColor = componentContext.getDerivedFromVars(componentContext.json.inactive_color);
    $: jsonBorderColor = componentContext.getDerivedFromVars(componentContext.json.border_color);
    $: jsonDisabledColor = componentContext.getDerivedFromVars(componentContext.json.disabled_color);
    $: jsonRatingIcon = componentContext.getDerivedFromVars(componentContext.json.rating_icon);

    // Error checking
    $: {
        let newHasError = false;
        if (!variableName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "rating_variable" in "rating"')));
        }
        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    // Computed values using let + $: {} blocks (Radio pattern)
    $: {
        maxRating = Math.max(1, Math.min(20, Number($jsonMaxRating) || 5));
    }

    $: {
        const val = Number($jsonStep);
        step = (val > 0 && val <= 1) ? val : 1;
    }

    $: {
        isInteractive = correctBooleanInt($jsonIsInteractive, isInteractive);
    }

    $: {
        iconSize = (typeof $jsonIconSize === 'number' && $jsonIconSize > 0) ? $jsonIconSize : iconSize;
    }

    $: {
        iconSpacing = (typeof $jsonIconSpacing === 'number' && $jsonIconSpacing >= 0) ? $jsonIconSpacing : iconSpacing;
    }

    $: {
        activeColor = correctColor($jsonActiveColor, 1, activeColor);
    }

    $: {
        inactiveColor = correctColor($jsonInactiveColor, 1, inactiveColor);
    }

    $: {
        borderColor = correctColor($jsonBorderColor, 1, '');
    }

    $: {
        disabledColor = correctColor($jsonDisabledColor, 1, disabledColor);
    }

    // Rating icon
    $: ratingIconUrl = ($jsonRatingIcon && typeof $jsonRatingIcon === 'object' && 'image_url' in $jsonRatingIcon)
        ? ($jsonRatingIcon as { image_url: string }).image_url
        : '';

    // Parse rating from variable
    $: currentRating = parseFloat($ratingVariable as string) || 0;

    // Clamp rating
    $: clampedRating = Math.max(0, Math.min(currentRating, maxRating));

    // Icon array
    $: icons = Array.from({ length: maxRating }, (_, i) => i + 1);

    // Reactive style values
    $: fillColor = isInteractive ? activeColor : disabledColor;

    $: iconWrapperStyle = {
        width: iconSize + 'px',
        height: iconSize + 'px'
    };

    $: containerGap = {
        gap: iconSpacing + 'px'
    };

    $: iconClass = css['rating__icon'] + ' ' +
        (isInteractive ? css['rating__icon_interactive'] : css['rating__icon_disabled']);

    $: strokeColor = borderColor || 'none';
    $: strokeWidth = borderColor ? '0.5' : '0';

    // Fill percentage helper - clampedRating passed explicitly for reactivity
    function getFillPercent(position: number, rating: number): number {
        if (rating >= position) return 100;
        if (rating <= position - 1) return 0;
        return (rating - (position - 1)) * 100;
    }

    // Click handler
    function onIconClick(event: MouseEvent, position: number): void {
        if (!isInteractive) return;

        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const fraction = clickX / rect.width;

        let newRating: number;
        if (step >= 1) {
            // Whole star mode: click anywhere on the star selects it
            newRating = position;
        } else {
            // Fractional mode: snap to step
            const baseRating = position - 1;
            const rawFraction = baseRating + fraction;
            newRating = Math.round(rawFraction / step) * step;
        }

        newRating = Math.max(0, Math.min(newRating, maxRating));

        // Allow deselection by clicking the same value
        if (newRating === clampedRating && step >= 1) {
            newRating = 0;
        }

        ratingVariable.setValue(String(newRating));

        const changeActions = componentContext.json.rating_change_actions;
        if (changeActions && changeActions.length) {
            componentContext.execAnyActions(changeActions);
        }
    }
</script>

{#if !hasError}
    <Outer
        cls={genClassName('rating', css, {})}
        style={containerGap}
        {componentContext}
        {layoutParams}
    >
        {#each icons as position}
            {@const fillPct = getFillPercent(position, clampedRating)}
            <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-tabindex -->
            <div
                class={iconClass}
                style={makeStyle(iconWrapperStyle)}
                on:click={e => onIconClick(e, position)}
                role={isInteractive ? 'button' : 'img'}
                tabindex={isInteractive ? 0 : -1}
                aria-label="Star {position} of {maxRating}"
            >
                {#if ratingIconUrl}
                    <!-- Custom icon: inactive layer -->
                    <div class="{css['rating__icon-layer']} {css['rating__icon-layer_inactive']}">
                        <img
                            src={ratingIconUrl}
                            alt=""
                            width={iconSize}
                            height={iconSize}
                            style="opacity: 0.4"
                        />
                    </div>
                    <!-- Custom icon: active layer -->
                    <div
                        class="{css['rating__icon-layer']} {css['rating__icon-layer_active']}"
                        style="clip-path: inset(0 {100 - fillPct}% 0 0)"
                    >
                        <img
                            src={ratingIconUrl}
                            alt=""
                            width={iconSize}
                            height={iconSize}
                        />
                    </div>
                {:else}
                    <!-- Default star SVG: inactive layer -->
                    <div class="{css['rating__icon-layer']} {css['rating__icon-layer_inactive']}">
                        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                            <path
                                d={STAR_PATH}
                                fill={inactiveColor}
                                stroke={strokeColor}
                                stroke-width={strokeWidth}
                            />
                        </svg>
                    </div>
                    <!-- Default star SVG: active layer -->
                    <div
                        class="{css['rating__icon-layer']} {css['rating__icon-layer_active']}"
                        style="clip-path: inset(0 {100 - fillPct}% 0 0)"
                    >
                        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                            <path
                                d={STAR_PATH}
                                fill={fillColor}
                                stroke={strokeColor}
                                stroke-width={strokeWidth}
                            />
                        </svg>
                    </div>
                {/if}
            </div>
        {/each}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
