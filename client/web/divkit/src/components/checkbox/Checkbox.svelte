<script lang="ts">
    import { getContext, onDestroy } from 'svelte';

    import css from './Checkbox.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivCheckboxData } from '../../types/checkbox';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { ACTION_CTX, type ActionCtxValue } from '../../context/action';
    import { genClassName } from '../../utils/genClassName';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { createVariable } from '../../expressions/variable';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { booleanInt } from '../../utils/booleanInt';
    import { composeAccessibilityDescription } from '../../utils/composeAccessibilityDescription';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivCheckboxData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const actionCtx = getContext<ActionCtxValue>(ACTION_CTX);

    let prevId: string | undefined;
    let input: HTMLInputElement;
    let value = false;
    let hasError = false;
    let description = '';
    let isEnabled = true;
    let onColor = '#129386';
    let offColor = 'rgba(0, 0, 0, .3)';
    let checkMarkColor = '#fff';

    $: origJson = componentContext.origJson;

    function rebind(): void {
        isEnabled = true;
        onColor = '#129386';
        offColor = 'rgba(0, 0, 0, .3)';
        checkMarkColor = '#fff';
    }

    $: if (origJson) {
        rebind();
    }

    $: variable = componentContext.json.is_checked_variable;

    $: valueVariable = variable && (componentContext.getVariable(variable, 'boolean') || rootCtx.awaitGlobalVariable(variable, 'boolean', false)) || createVariable('temp', 'boolean', false);

    $: jsonAccessibility = componentContext.getDerivedFromVars(componentContext.json.accessibility);
    $: jsonIsEnabled = componentContext.getDerivedFromVars(componentContext.json.is_enabled);
    $: jsonOnColor = componentContext.getDerivedFromVars(componentContext.json.on_color);
    $: jsonOffColor = componentContext.getDerivedFromVars(componentContext.json.off_color);
    $: jsonCheckMarkColor = componentContext.getDerivedFromVars(componentContext.json.check_mark_color);

    $: {
        let newHasError = false;

        if (!variable) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "is_checked_variable" in "checkbox"')));
        } else if (actionCtx.hasAction() || $jsonAccessibility?.mode === 'exclude') {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')));
        }

        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    $: if (booleanInt(value) !== booleanInt($valueVariable)) {
        value = booleanInt($valueVariable);
    }

    $: {
        isEnabled = correctBooleanInt($jsonIsEnabled, isEnabled);
    }

    $: {
        onColor = correctColor($jsonOnColor, 1, onColor);
    }

    $: {
        offColor = correctColor($jsonOffColor, 1, offColor);
    }

    $: {
        checkMarkColor = correctColor($jsonCheckMarkColor, 1, checkMarkColor);
    }

    $: if ($jsonAccessibility?.description) {
        description = composeAccessibilityDescription($jsonAccessibility);
    } else {
        componentContext.logError(wrapError(new Error('Missing accessibility "description" for checkbox'), {
            level: 'warn'
        }));
    }

    $: mods = {
        disabled: !isEnabled
    };
    $: stl = {
        '--divkit-checkbox-on-color': onColor,
        '--divkit-checkbox-off-color': offColor,
        '--divkit-checkbox-check-mark-color': checkMarkColor
    };

    function onInput(event: Event): void {
        value = (event.target as HTMLInputElement).checked;
        valueVariable.setValue(value);
    }

    $: if (input && componentContext.json) {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }

        if (componentContext.id && !componentContext.fakeElement) {
            prevId = componentContext.id;
            rootCtx.registerFocusable(prevId, {
                focus() {
                    if (input) {
                        input.focus();
                    }
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
        let:focusHandler
        let:blurHandler
        let:hasCustomFocus
        cls={genClassName('checkbox', css, mods)}
        style={stl}
        customDescription={true}
        customActions={'checkbox'}
        hasInnerFocusable={true}
        {componentContext}
        {layoutParams}
    >
        <div
            class={genClassName('checkbox__box', css, { checked: value })}
        >
            <div class={css.checkbox__checkmark}></div>
        </div>
        <input
            bind:this={input}
            type="checkbox"
            class={genClassName('checkbox__input', css, { 'has-custom-focus': hasCustomFocus })}
            autocomplete="off"
            role="checkbox"
            aria-checked={value}
            aria-label={description}
            disabled={!isEnabled}
            checked={value}
            on:input={onInput}
            on:focus={focusHandler}
            on:blur={blurHandler}
        >
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
