<script lang="ts">
    import { getContext, onDestroy, tick } from 'svelte';

    import css from './Autocomplete.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { ComponentContext } from '../../types/componentContext';
    import type { DivAutocompleteData, AutocompleteSuggestion } from '../../types/autocomplete';
    import type { EdgeInsets } from '../../types/edgeInserts';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { correctPositiveNumber } from '../../utils/correctPositiveNumber';
    import { correctFontWeight } from '../../utils/correctFontWeight';
    import { isPositiveNumber } from '../../utils/isPositiveNumber';
    import { isNumber } from '../../utils/isNumber';
    import { correctEdgeInsertsObject } from '../../utils/correctEdgeInsertsObject';
    import { edgeInsertsToCss } from '../../utils/edgeInsertsToCss';
    import { makeStyle } from '../../utils/makeStyle';
    import { composeAccessibilityDescription } from '../../utils/composeAccessibilityDescription';
    import { variationSettingsToString } from '../../utils/variationSettings';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { createVariable } from '../../expressions/variable';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivAutocompleteData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);
    const direction = rootCtx.direction;

    let prevId: string | undefined;
    let inputEl: HTMLInputElement;
    let dropdownEl: HTMLDivElement;
    let hasError = false;
    let showDropdown = false;
    let highlightedIndex = -1;
    let dropdownPosition: 'below' | 'above' = 'below';
    let selfPadding: EdgeInsets | null = null;
    let padding = '';
    let hintColor = 'rgba(0,0,0,.45)';
    let fontSize = 12;
    let fontWeight: number | undefined = undefined;
    let fontFamily = '';
    let fontVariationSettings = '';
    let lineHeight: number | undefined = undefined;
    let letterSpacing = '';
    let textColor = '#000';
    let suggestionColor = '#000';
    let description = '';

    $: origJson = componentContext.origJson;

    function rebind(): void {
        selfPadding = null;
        hintColor = 'rgba(0,0,0,.45)';
        fontSize = 12;
        fontWeight = undefined;
        fontFamily = '';
        fontVariationSettings = '';
        lineHeight = undefined;
        letterSpacing = '';
        textColor = '#000';
        suggestionColor = '#000';
        description = '';
        showDropdown = false;
        highlightedIndex = -1;
    }

    $: if (origJson) {
        rebind();
    }

    // Variable bindings
    $: textVarName = componentContext.json.text_variable;
    $: suggestionsVarName = componentContext.json.suggestions_variable;
    $: valueVarName = componentContext.json.value_variable;

    $: textVariable = textVarName &&
        (componentContext.getVariable(textVarName, 'string') ||
         rootCtx.awaitGlobalVariable(textVarName, 'string', '')) ||
        createVariable('temp', 'string', '');

    $: suggestionsVariable = suggestionsVarName &&
        (componentContext.getVariable(suggestionsVarName, 'array') ||
         rootCtx.awaitGlobalVariable(suggestionsVarName, 'array', [])) ||
        createVariable('temp', 'array', []);

    // Derived properties
    $: jsonPaddings = componentContext.getDerivedFromVars(componentContext.json.paddings);
    $: jsonHintText = componentContext.getDerivedFromVars(componentContext.json.hint_text);
    $: jsonHintColor = componentContext.getDerivedFromVars(componentContext.json.hint_color);
    $: jsonFontSize = componentContext.getDerivedFromVars(componentContext.json.font_size);
    $: jsonFontWeight = componentContext.getDerivedFromVars(componentContext.json.font_weight);
    $: jsonFontWeightValue = componentContext.getDerivedFromVars(componentContext.json.font_weight_value);
    $: jsonFontFamily = componentContext.getDerivedFromVars(componentContext.json.font_family);
    $: jsonFontVariationSettings = componentContext.getDerivedFromVars(
        componentContext.json.font_variation_settings,
        undefined,
        true,
        0
    );
    $: jsonLineHeight = componentContext.getDerivedFromVars(componentContext.json.line_height);
    $: jsonLetterSpacing = componentContext.getDerivedFromVars(componentContext.json.letter_spacing);
    $: jsonTextColor = componentContext.getDerivedFromVars(componentContext.json.text_color);
    $: jsonSuggestionTextColor = componentContext.getDerivedFromVars(componentContext.json.suggestion_text_color);
    $: jsonAccessibility = componentContext.getDerivedFromVars(componentContext.json.accessibility);
    $: jsonIsEnabled = componentContext.getDerivedFromVars(componentContext.json.is_enabled);
    $: jsonMinQueryLength = componentContext.getDerivedFromVars(componentContext.json.min_query_length);
    $: jsonMaxVisibleSuggestions = componentContext.getDerivedFromVars(componentContext.json.max_visible_suggestions);
    $: jsonDismissOnSelection = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_selection);
    $: jsonDismissOnBlur = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_blur);
    $: jsonDismissOnEmpty = componentContext.getDerivedFromVars(componentContext.json.dismiss_on_empty);
    $: jsonKeyboardType = componentContext.getDerivedFromVars(componentContext.json.keyboard_type);
    $: jsonHighlightColor = componentContext.getDerivedFromVars(componentContext.json.highlight_color);

    // Computed values
    $: minQueryLength = Math.max(1, Number($jsonMinQueryLength) || 1);
    $: maxVisibleSuggestions = Math.max(1, Number($jsonMaxVisibleSuggestions) || 5);
    $: dismissOnSelection = correctBooleanInt($jsonDismissOnSelection, true);
    $: dismissOnBlur = correctBooleanInt($jsonDismissOnBlur, true);
    $: dismissOnEmpty = correctBooleanInt($jsonDismissOnEmpty, true);
    $: isEnabled = correctBooleanInt($jsonIsEnabled, true);
    $: inputType = ($jsonKeyboardType === 'password') ? 'password' :
                   ($jsonKeyboardType === 'email') ? 'email' :
                   ($jsonKeyboardType === 'uri') ? 'url' :
                   ($jsonKeyboardType === 'phone') ? 'tel' :
                   ($jsonKeyboardType === 'number') ? 'number' : 'text';

    // Parse suggestions from variable
    $: suggestions = parseSuggestions($suggestionsVariable);

    function parseSuggestions(raw: unknown): AutocompleteSuggestion[] {
        if (!Array.isArray(raw)) return [];
        return raw.filter((item: unknown): item is AutocompleteSuggestion =>
            typeof item === 'object' && item !== null && typeof (item as Record<string, unknown>).value === 'string'
        );
    }

    // Show/hide dropdown based on state
    $: {
        const text = $textVariable || '';
        if (text.length < minQueryLength) {
            showDropdown = false;
        } else if (dismissOnEmpty && suggestions.length === 0) {
            showDropdown = false;
        } else if (suggestions.length > 0 && text.length >= minQueryLength) {
            showDropdown = true;
        }
    }

    // Error checking
    $: {
        let newHasError = false;
        if (!textVarName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "text_variable" in "autocomplete"')));
        }
        if (!suggestionsVarName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "suggestions_variable" in "autocomplete"')));
        }
        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    // Style computations (same pattern as Select.svelte)
    $: {
        selfPadding = correctEdgeInsertsObject(($jsonPaddings) ? $jsonPaddings : undefined, selfPadding);
        padding = selfPadding ? edgeInsertsToCss({
            top: (Number(selfPadding.top) || 0) / fontSize * 10,
            right: (Number($direction === 'ltr' ? selfPadding.end : selfPadding.start) || Number(selfPadding.right) || 0) / fontSize * 10,
            bottom: (Number(selfPadding.bottom) || 0) / fontSize * 10,
            left: (Number($direction === 'ltr' ? selfPadding.start : selfPadding.end) || Number(selfPadding.left) || 0) / fontSize * 10
        }, $direction) : '';
    }

    $: { hintColor = correctColor($jsonHintColor, 1, hintColor); }
    $: { fontSize = correctPositiveNumber($jsonFontSize, fontSize); }
    $: {
        fontWeight = correctFontWeight($jsonFontWeight, $jsonFontWeightValue, fontWeight);
        if ($jsonFontFamily && typeof $jsonFontFamily === 'string') {
            fontFamily = rootCtx.typefaceProvider($jsonFontFamily, { fontWeight: fontWeight || 400 });
        } else {
            fontFamily = '';
        }
    }
    $: {
        const newVal = variationSettingsToString($jsonFontVariationSettings);
        if (newVal !== fontVariationSettings) { fontVariationSettings = newVal; }
    }
    $: {
        const val = $jsonLineHeight;
        if (isPositiveNumber(val)) { lineHeight = val / fontSize; }
    }
    $: {
        if (isNumber($jsonLetterSpacing)) { letterSpacing = pxToEm($jsonLetterSpacing / fontSize * 10); }
    }
    $: { textColor = correctColor($jsonTextColor, 1, textColor); }
    $: { suggestionColor = correctColor($jsonSuggestionTextColor, 1, suggestionColor); }

    $: if ($jsonAccessibility?.description) {
        description = composeAccessibilityDescription($jsonAccessibility);
    } else {
        componentContext.logError(wrapError(new Error('Missing accessibility "description" for autocomplete'), {
            level: 'warn'
        }));
    }

    // Dropdown positioning
    function updateDropdownPosition(): void {
        if (!inputEl) return;
        const rect = inputEl.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        dropdownPosition = spaceBelow >= 200 || spaceBelow >= spaceAbove ? 'below' : 'above';
    }

    // Event handlers
    function onInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const newValue = target.value;
        textVariable.setValue(newValue);
        highlightedIndex = -1;

        if (newValue.length >= minQueryLength) {
            updateDropdownPosition();
            const actions = componentContext.json.text_change_actions;
            if (actions && actions.length) {
                componentContext.execAnyActions(actions);
            }
        }
    }

    function onFocusInput(): void {
        const text = $textVariable || '';
        if (text.length >= minQueryLength && suggestions.length > 0) {
            updateDropdownPosition();
            showDropdown = true;
        }
    }

    function onBlurInput(): void {
        if (dismissOnBlur) {
            setTimeout(() => {
                showDropdown = false;
                highlightedIndex = -1;
            }, 200);
        }
    }

    function selectSuggestion(suggestion: AutocompleteSuggestion): void {
        const displayText = suggestion.text || suggestion.value;
        textVariable.setValue(displayText);

        if (valueVarName) {
            const valueVar = componentContext.getVariable(valueVarName, 'string') ||
                rootCtx.awaitGlobalVariable(valueVarName, 'string', '');
            if (valueVar) {
                valueVar.setValue(suggestion.value);
            }
        }

        if (dismissOnSelection) {
            showDropdown = false;
        }
        highlightedIndex = -1;

        const actions = componentContext.json.selection_actions;
        if (actions && actions.length) {
            componentContext.execAnyActions(actions);
        }
    }

    function onKeyDown(e: KeyboardEvent): void {
        if (!showDropdown || suggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlightedIndex = (highlightedIndex + 1) % suggestions.length;
            scrollToHighlighted();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlightedIndex = highlightedIndex <= 0 ? suggestions.length - 1 : highlightedIndex - 1;
            scrollToHighlighted();
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            e.preventDefault();
            selectSuggestion(suggestions[highlightedIndex]);
        } else if (e.key === 'Escape') {
            showDropdown = false;
            highlightedIndex = -1;
        }
    }

    function scrollToHighlighted(): void {
        tick().then(() => {
            if (dropdownEl && highlightedIndex >= 0) {
                const items = dropdownEl.children;
                if (items[highlightedIndex]) {
                    (items[highlightedIndex] as HTMLElement).scrollIntoView({ block: 'nearest' });
                }
            }
        });
    }

    // Styles
    $: stl = {
        '--divkit-input-hint-color': hintColor,
        '--divkit-input-highlight-color': $jsonHighlightColor || undefined,
        'font-weight': fontWeight,
        'font-family': fontFamily,
        'font-variation-settings': fontVariationSettings,
        color: textColor
    };
    $: inputStl = {
        padding,
        'font-size': pxToEm(fontSize),
        'line-height': lineHeight,
        'letter-spacing': letterSpacing
    };
    $: dropdownStl = {
        'max-height': maxVisibleSuggestions * 44 + 'px',
        color: suggestionColor
    };

    // Focusable registration
    $: if (componentContext.json && inputEl) {
        if (prevId) {
            rootCtx.unregisterFocusable(prevId);
            prevId = undefined;
        }
        if (componentContext.id && !componentContext.fakeElement) {
            prevId = componentContext.id;
            rootCtx.registerFocusable(prevId, {
                focus() {
                    if (inputEl) { inputEl.focus(); }
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
        let:hasCustomFocus
        let:focusHandler
        let:blurHandler
        cls={genClassName('autocomplete', css, {})}
        style={stl}
        customDescription={true}
        customActions={'autocomplete'}
        customPaddings={true}
        hasInnerFocusable={true}
        {componentContext}
        {layoutParams}
    >
        <input
            class={genClassName('autocomplete__input', css, { 'has-custom-focus': hasCustomFocus })}
            style={makeStyle(inputStl)}
            type={inputType}
            placeholder={$jsonHintText || ''}
            aria-label={description}
            aria-autocomplete="list"
            aria-expanded={showDropdown}
            autocomplete="off"
            disabled={!isEnabled}
            bind:this={inputEl}
            value={$textVariable}
            on:input={onInput}
            on:focus={(e) => { focusHandler(e); onFocusInput(); }}
            on:blur={(e) => { blurHandler(e); onBlurInput(); }}
            on:keydown={onKeyDown}
        />

        {#if showDropdown && suggestions.length > 0}
            <div
                class={genClassName('autocomplete__dropdown', css, { [dropdownPosition]: true })}
                style={makeStyle(dropdownStl)}
                role="listbox"
                bind:this={dropdownEl}
            >
                {#each suggestions as suggestion, index}
                    <div
                        class={genClassName('autocomplete__suggestion', css, { highlighted: index === highlightedIndex })}
                        role="option"
                        aria-selected={index === highlightedIndex}
                        on:mousedown|preventDefault={() => selectSuggestion(suggestion)}
                        on:mouseenter={() => { highlightedIndex = index; }}
                    >
                        <div class={css['autocomplete__suggestion-text']}>
                            {suggestion.text || suggestion.value}
                        </div>
                        {#if suggestion.secondary_text}
                            <div class={css['autocomplete__suggestion-secondary']}>
                                {suggestion.secondary_text}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
