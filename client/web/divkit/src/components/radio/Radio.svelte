<script lang="ts">
    import { getContext, onDestroy } from 'svelte';

    import css from './Radio.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivRadioData } from '../../types/radio';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { ACTION_CTX, type ActionCtxValue } from '../../context/action';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { createVariable } from '../../expressions/variable';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { composeAccessibilityDescription } from '../../utils/composeAccessibilityDescription';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivRadioData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const actionCtx = getContext<ActionCtxValue>(ACTION_CTX);

    let prevId: string | undefined;
    let container: HTMLElement;
    let hasError = false;
    let description = '';
    let isEnabled = true;
    let selectedColor = '#129386';
    let orientation: 'vertical' | 'horizontal' = 'vertical';
    let itemSpacing = 8;

    $: origJson = componentContext.origJson;

    function rebind(): void {
        isEnabled = true;
        selectedColor = '#129386';
        orientation = 'vertical';
        itemSpacing = 8;
    }

    $: if (origJson) {
        rebind();
    }

    $: variable = componentContext.json.value_variable;
    $: items = componentContext.json.options;
    $: filteredItems = Array.isArray(items) && items.filter(it => typeof it.value === 'string') || [];

    $: valueVariable = variable && (componentContext.getVariable(variable, 'string') || rootCtx.awaitGlobalVariable(variable, 'string', '')) || createVariable('temp', 'string', '');

    $: jsonAccessibility = componentContext.getDerivedFromVars(componentContext.json.accessibility);
    $: jsonIsEnabled = componentContext.getDerivedFromVars(componentContext.json.is_enabled);
    $: jsonSelectedColor = componentContext.getDerivedFromVars(componentContext.json.selected_color);
    $: jsonOrientation = componentContext.getDerivedFromVars(componentContext.json.orientation);
    $: jsonItemSpacing = componentContext.getDerivedFromVars(componentContext.json.item_spacing);

    $: if (!(Array.isArray(filteredItems) && filteredItems.length)) {
        componentContext.logError(wrapError(new Error('Empty "options" in "radio"')));
    }

    $: {
        let newHasError = false;

        if (!variable) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "value_variable" in "radio"')));
        } else if (actionCtx.hasAction() || $jsonAccessibility?.mode === 'exclude') {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')));
        }

        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    $: {
        isEnabled = correctBooleanInt($jsonIsEnabled, isEnabled);
    }

    $: {
        selectedColor = correctColor($jsonSelectedColor, 1, selectedColor);
    }

    $: {
        orientation = ($jsonOrientation === 'horizontal' || $jsonOrientation === 'vertical') ? $jsonOrientation : orientation;
    }

    $: {
        itemSpacing = (typeof $jsonItemSpacing === 'number' && $jsonItemSpacing >= 0) ? $jsonItemSpacing : itemSpacing;
    }

    $: if ($jsonAccessibility?.description) {
        description = composeAccessibilityDescription($jsonAccessibility);
    } else {
        componentContext.logError(wrapError(new Error('Missing accessibility "description" for radio'), {
            level: 'warn'
        }));
    }

    // Generate a unique name for the radio group
    $: groupName = componentContext.id || `radio_${Math.random().toString(36).slice(2)}`;

    $: mods = {
        disabled: !isEnabled
    };
    $: groupMods = {
        [orientation]: true
    };
    $: stl = {
        '--divkit-radio-selected-color': selectedColor
    };
    $: groupStl = `gap: ${pxToEm(itemSpacing)}`;

    function onChange(optionValue: string): void {
        valueVariable.setValue(optionValue);
    }

    $: if (container && componentContext.json) {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }

        if (componentContext.id && !componentContext.fakeElement) {
            prevId = componentContext.id;
            rootCtx.registerFocusable(prevId, {
                focus() {
                    if (container) {
                        const firstInput = container.querySelector('input');
                        if (firstInput) {
                            firstInput.focus();
                        }
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
        cls={genClassName('radio', css, mods)}
        style={stl}
        customDescription={true}
        customActions={'radio'}
        hasInnerFocusable={true}
        {componentContext}
        {layoutParams}
    >
        <div
            bind:this={container}
            class={genClassName('radio__group', css, groupMods)}
            style={groupStl}
            role="radiogroup"
            aria-label={description}
        >
            {#each filteredItems as item}
                <label class={css.radio__item}>
                    <div class={genClassName('radio__circle', css, { selected: $valueVariable === item.value })}>
                        <div class={css.radio__dot}></div>
                    </div>
                    {#if item.text}
                        <span class={css.radio__label}>{item.text}</span>
                    {:else}
                        <span class={css.radio__label}>{item.value}</span>
                    {/if}
                    <input
                        type="radio"
                        class={css.radio__input}
                        name={groupName}
                        value={item.value}
                        checked={$valueVariable === item.value}
                        disabled={!isEnabled}
                        on:change={() => onChange(item.value)}
                        on:focus={focusHandler}
                        on:blur={blurHandler}
                    >
                </label>
            {/each}
        </div>
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
