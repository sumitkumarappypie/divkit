<script lang="ts">
    import { getContext, onDestroy } from 'svelte';

    import css from './Counter.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivCounterData } from '../../types/counter';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { ACTION_CTX, type ActionCtxValue } from '../../context/action';
    import { genClassName } from '../../utils/genClassName';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { correctNumber } from '../../utils/correctNumber';
    import { createVariable } from '../../expressions/variable';
    import { clamp } from '../../utils/clamp';
    import { pxToEm } from '../../utils/pxToEm';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivCounterData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const actionCtx = getContext<ActionCtxValue>(ACTION_CTX);

    let hasError = false;
    let isEnabled = true;
    let buttonColor = '#4CAF50';
    let buttonSize = 20;
    let iconColor = '#ffffff';
    let disabledButtonColor = '#cccccc';
    let textColor = '#1B2630';
    let fontSize = 16;
    let fontWeight = 700;
    let valueWidth = 20;
    let backgroundColor = '#F5F5F5';
    let borderColor = '#E0E0E0';
    let borderWidth = 1;
    let cornerRadius = 999;
    let padding = 4;
    let minValue = 0;
    let maxValue = 99;
    let step = 1;

    const FONT_WEIGHT_MAP: Record<string, number> = {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
    };

    $: origJson = componentContext.origJson;

    function rebind(): void {
        isEnabled = true;
        buttonColor = '#4CAF50';
        buttonSize = 20;
        iconColor = '#ffffff';
        disabledButtonColor = '#cccccc';
        textColor = '#1B2630';
        fontSize = 16;
        fontWeight = 700;
        valueWidth = 20;
        backgroundColor = '#F5F5F5';
        borderColor = '#E0E0E0';
        borderWidth = 1;
        cornerRadius = 999;
        padding = 4;
        minValue = 0;
        maxValue = 99;
        step = 1;
    }

    $: if (origJson) {
        rebind();
    }

    $: variable = componentContext.json.counter_value_variable;

    $: valueVariable = variable
        && (componentContext.getVariable(variable, 'integer')
            || rootCtx.awaitGlobalVariable(variable, 'integer', 0))
        || createVariable('temp', 'integer', 0);

    $: jsonIsEnabled = componentContext.getDerivedFromVars(componentContext.json.is_enabled);
    $: jsonButtonColor = componentContext.getDerivedFromVars(componentContext.json.button_color);
    $: jsonButtonSize = componentContext.getDerivedFromVars(componentContext.json.button_size);
    $: jsonIconColor = componentContext.getDerivedFromVars(componentContext.json.icon_color);
    $: jsonDisabledButtonColor = componentContext.getDerivedFromVars(componentContext.json.disabled_button_color);
    $: jsonTextColor = componentContext.getDerivedFromVars(componentContext.json.text_color);
    $: jsonFontSize = componentContext.getDerivedFromVars(componentContext.json.font_size);
    $: jsonFontWeight = componentContext.getDerivedFromVars(componentContext.json.font_weight);
    $: jsonValueWidth = componentContext.getDerivedFromVars(componentContext.json.value_width);
    $: jsonBackgroundColor = componentContext.getDerivedFromVars(componentContext.json.background_color);
    $: jsonBorderColor = componentContext.getDerivedFromVars(componentContext.json.border_color);
    $: jsonBorderWidth = componentContext.getDerivedFromVars(componentContext.json.border_width);
    $: jsonCornerRadius = componentContext.getDerivedFromVars(componentContext.json.corner_radius);
    $: jsonPadding = componentContext.getDerivedFromVars(componentContext.json.padding);
    $: jsonMinValue = componentContext.getDerivedFromVars(componentContext.json.min_value);
    $: jsonMaxValue = componentContext.getDerivedFromVars(componentContext.json.max_value);
    $: jsonStep = componentContext.getDerivedFromVars(componentContext.json.step);

    $: {
        isEnabled = correctBooleanInt($jsonIsEnabled, isEnabled);
    }

    $: {
        buttonColor = correctColor($jsonButtonColor, 1, buttonColor);
    }

    $: {
        buttonSize = correctNumber($jsonButtonSize, buttonSize);
    }

    $: {
        iconColor = correctColor($jsonIconColor, 1, iconColor);
    }

    $: {
        disabledButtonColor = correctColor($jsonDisabledButtonColor, 1, disabledButtonColor);
    }

    $: {
        textColor = correctColor($jsonTextColor, 1, textColor);
    }

    $: {
        fontSize = correctNumber($jsonFontSize, fontSize);
    }

    $: {
        const val = $jsonFontWeight;
        if (typeof val === 'string') {
            if (val in FONT_WEIGHT_MAP) {
                fontWeight = FONT_WEIGHT_MAP[val];
            } else {
                const num = parseInt(val, 10);
                if (!Number.isNaN(num) && num > 0) {
                    fontWeight = num;
                }
            }
        } else if (typeof val === 'number' && val > 0) {
            fontWeight = val;
        }
    }

    $: {
        valueWidth = correctNumber($jsonValueWidth, valueWidth);
    }

    $: {
        backgroundColor = correctColor($jsonBackgroundColor, 1, backgroundColor);
    }

    $: {
        borderColor = correctColor($jsonBorderColor, 1, borderColor);
    }

    $: {
        borderWidth = correctNumber($jsonBorderWidth, borderWidth);
    }

    $: {
        cornerRadius = correctNumber($jsonCornerRadius, cornerRadius);
    }

    $: {
        padding = correctNumber($jsonPadding, padding);
    }

    $: {
        minValue = correctNumber($jsonMinValue, minValue);
        maxValue = correctNumber($jsonMaxValue, maxValue);
    }

    $: {
        const val = correctNumber($jsonStep, step);
        if (val > 0) {
            step = val;
        }
    }

    $: value = clamp($valueVariable || 0, minValue, maxValue);

    $: {
        let newHasError = false;

        if (!variable) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "counter_value_variable" in "counter"')));
        } else if (actionCtx.hasAction()) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Cannot show "counter" inside component with an action')));
        }

        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    function increment(): void {
        if (!isEnabled) return;
        const newValue = Math.min(value + step, maxValue);
        if (newValue !== value) {
            valueVariable.setValue(newValue);
            if (componentContext.json.on_increment_actions) {
                componentContext.execAnyActions(componentContext.json.on_increment_actions);
            }
            if (componentContext.json.on_value_change_actions) {
                componentContext.execAnyActions(componentContext.json.on_value_change_actions);
            }
        }
    }

    function decrement(): void {
        if (!isEnabled) return;
        const newValue = Math.max(value - step, minValue);
        if (newValue !== value) {
            valueVariable.setValue(newValue);
            if (componentContext.json.on_decrement_actions) {
                componentContext.execAnyActions(componentContext.json.on_decrement_actions);
            }
            if (componentContext.json.on_value_change_actions) {
                componentContext.execAnyActions(componentContext.json.on_value_change_actions);
            }
        }
    }

    $: mods = {
        disabled: !isEnabled
    };

    $: stl = {
        '--divkit-counter-bg': backgroundColor,
        '--divkit-counter-border-color': borderColor,
        '--divkit-counter-border-width': pxToEm(borderWidth),
        '--divkit-counter-radius': pxToEm(cornerRadius),
        '--divkit-counter-padding': pxToEm(padding),
        '--divkit-counter-icon-color': iconColor
    };

    let prevId: string | undefined;

    $: if (componentContext.json) {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }

        if (componentContext.id && !componentContext.fakeElement) {
            prevId = componentContext.id;
            rootCtx.registerFocusable(prevId, {
                focus() {
                    // No single input to focus
                }
            });
        }
    }

    onDestroy(() => {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }
    });
</script>

{#if !hasError}
    <Outer
        cls={genClassName('counter', css, mods)}
        style={stl}
        customDescription={true}
        customActions="counter"
        {componentContext}
        {layoutParams}
    >
        <div class={css.counter__container}>
            <button
                class={css.counter__button}
                style:background={value <= minValue ? disabledButtonColor : buttonColor}
                style:width={pxToEm(buttonSize)}
                style:height={pxToEm(buttonSize)}
                disabled={!isEnabled || value <= minValue}
                on:click={decrement}
                aria-label="Decrease value"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line
                        x1="6" y1="12" x2="18" y2="12"
                        stroke={iconColor}
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>

            <div
                class={css.counter__value}
                style:width={pxToEm(valueWidth)}
                style:color={textColor}
                style:font-size={pxToEm(fontSize)}
                style:font-weight={fontWeight}
            >
                {value}
            </div>

            <button
                class={css.counter__button}
                style:background={value >= maxValue ? disabledButtonColor : buttonColor}
                style:width={pxToEm(buttonSize)}
                style:height={pxToEm(buttonSize)}
                disabled={!isEnabled || value >= maxValue}
                on:click={increment}
                aria-label="Increase value"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line
                        x1="12" y1="6" x2="12" y2="18"
                        stroke={iconColor}
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />
                    <line
                        x1="6" y1="12" x2="18" y2="12"
                        stroke={iconColor}
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
        </div>
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
