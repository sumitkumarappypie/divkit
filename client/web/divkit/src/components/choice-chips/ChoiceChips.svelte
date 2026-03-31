<script lang="ts">
    import { getContext } from 'svelte';

    import css from './ChoiceChips.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { ComponentContext } from '../../types/componentContext';
    import type { DivChoiceChipsData, ChoiceChipsItem, ChipStyle } from '../../types/choiceChips';
    import type { EdgeInsets } from '../../types/edgeInserts';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { wrapError } from '../../utils/wrapError';
    import { correctColor } from '../../utils/correctColor';
    import { correctFontWeight } from '../../utils/correctFontWeight';
    import { correctBooleanInt } from '../../utils/correctBooleanInt';
    import { correctEdgeInsertsObject } from '../../utils/correctEdgeInsertsObject';
    import { makeStyle } from '../../utils/makeStyle';
    import { createVariable } from '../../expressions/variable';
    import type { Variable } from '../../expressions/variable';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivChoiceChipsData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    let hasError = false;

    $: origJson = componentContext.origJson;

    function rebind(): void {
        hasError = false;
    }

    $: if (origJson) {
        rebind();
    }

    // Variable bindings
    $: selectedVarName = componentContext.json.selected_value_variable;
    $: itemsVarName = componentContext.json.items_variable;

    // Derived JSON properties
    $: jsonSelectionMode = componentContext.getDerivedFromVars(componentContext.json.selection_mode);
    $: jsonLayoutMode = componentContext.getDerivedFromVars(componentContext.json.layout_mode);
    $: jsonChipStyle = componentContext.getDerivedFromVars(componentContext.json.chip_style);
    $: jsonChipSpacing = componentContext.getDerivedFromVars(componentContext.json.chip_spacing);
    $: jsonRowSpacing = componentContext.getDerivedFromVars(componentContext.json.row_spacing);
    $: jsonCornerRadius = componentContext.getDerivedFromVars(componentContext.json.corner_radius);
    $: jsonFontSize = componentContext.getDerivedFromVars(componentContext.json.font_size);
    $: jsonFontWeight = componentContext.getDerivedFromVars(componentContext.json.font_weight);
    $: jsonFontFamily = componentContext.getDerivedFromVars(componentContext.json.font_family);
    $: jsonChipHeight = componentContext.getDerivedFromVars(componentContext.json.chip_height);
    $: jsonChipPadding = componentContext.getDerivedFromVars(componentContext.json.chip_padding);
    $: jsonIconSize = componentContext.getDerivedFromVars(componentContext.json.icon_size);
    $: jsonShowCheckmark = componentContext.getDerivedFromVars(componentContext.json.show_checkmark);
    $: jsonItems = componentContext.getDerivedFromVars(componentContext.json.items);

    // Color properties
    $: jsonSelectedBgColor = componentContext.getDerivedFromVars(componentContext.json.selected_background_color);
    $: jsonSelectedTextColor = componentContext.getDerivedFromVars(componentContext.json.selected_text_color);
    $: jsonSelectedBorderColor = componentContext.getDerivedFromVars(componentContext.json.selected_border_color);
    $: jsonDefaultBgColor = componentContext.getDerivedFromVars(componentContext.json.default_background_color);
    $: jsonDefaultTextColor = componentContext.getDerivedFromVars(componentContext.json.default_text_color);
    $: jsonDefaultBorderColor = componentContext.getDerivedFromVars(componentContext.json.default_border_color);
    $: jsonDisabledBgColor = componentContext.getDerivedFromVars(componentContext.json.disabled_background_color);
    $: jsonDisabledTextColor = componentContext.getDerivedFromVars(componentContext.json.disabled_text_color);
    $: jsonDisabledBorderColor = componentContext.getDerivedFromVars(componentContext.json.disabled_border_color);

    // Computed values
    $: selectionMode = $jsonSelectionMode === 'multi' ? 'multi' : 'single';
    $: layoutMode = $jsonLayoutMode === 'scroll' ? 'scroll' : 'wrap';
    $: chipStyle = (($jsonChipStyle === 'filled' || $jsonChipStyle === 'elevated') ? $jsonChipStyle : 'outlined') as ChipStyle;
    $: chipSpacing = Math.max(0, Number($jsonChipSpacing) || 8);
    $: rowSpacing = Math.max(0, Number($jsonRowSpacing) || 8);
    $: cornerRadius = Math.max(0, Number($jsonCornerRadius) || 16);
    $: fontSize = Math.max(1, Number($jsonFontSize) || 14);
    $: fontWeight = correctFontWeight($jsonFontWeight, undefined, undefined);
    $: fontFamily = $jsonFontFamily && typeof $jsonFontFamily === 'string'
        ? rootCtx.typefaceProvider($jsonFontFamily, { fontWeight: fontWeight || 400 })
        : '';
    $: chipHeight = Math.max(0, Number($jsonChipHeight) || 36);
    $: chipPadding = correctEdgeInsertsObject($jsonChipPadding || undefined, null) as EdgeInsets | null;
    $: iconSize = Math.max(0, Number($jsonIconSize) || 18);
    $: showCheckmark = correctBooleanInt($jsonShowCheckmark, false);
    $: selectionActions = componentContext.json.selection_actions;

    // Theme defaults based on chip_style
    interface ThemeColors {
        defaultBg: string;
        defaultText: string;
        defaultBorder: string;
        selectedBg: string;
        selectedText: string;
        selectedBorder: string;
        shadow: string;
    }

    function getThemeDefaults(style: ChipStyle): ThemeColors {
        switch (style) {
            case 'filled':
                return {
                    defaultBg: 'rgba(0,0,0,0.12)',
                    defaultText: '#000000',
                    defaultBorder: 'transparent',
                    selectedBg: '#1976d2',
                    selectedText: '#ffffff',
                    selectedBorder: 'transparent',
                    shadow: ''
                };
            case 'elevated':
                return {
                    defaultBg: '#ffffff',
                    defaultText: '#000000',
                    defaultBorder: 'transparent',
                    selectedBg: '#ffffff',
                    selectedText: '#1976d2',
                    selectedBorder: 'transparent',
                    shadow: '0 2px 4px rgba(0,0,0,0.15)'
                };
            case 'outlined':
            default:
                return {
                    defaultBg: 'transparent',
                    defaultText: '#000000',
                    defaultBorder: '#757575',
                    selectedBg: 'rgba(25,118,210,0.12)',
                    selectedText: '#1976d2',
                    selectedBorder: '#1976d2',
                    shadow: ''
                };
        }
    }

    $: theme = getThemeDefaults(chipStyle);

    // Resolve colors with theme fallbacks
    $: defaultBgColor = correctColor($jsonDefaultBgColor, 1, theme.defaultBg);
    $: defaultTextColor = correctColor($jsonDefaultTextColor, 1, theme.defaultText);
    $: defaultBorderColor = correctColor($jsonDefaultBorderColor, 1, theme.defaultBorder);
    $: selectedBgColor = correctColor($jsonSelectedBgColor, 1, theme.selectedBg);
    $: selectedTextColor = correctColor($jsonSelectedTextColor, 1, theme.selectedText);
    $: selectedBorderColor = correctColor($jsonSelectedBorderColor, 1, theme.selectedBorder);
    $: disabledBgColor = correctColor($jsonDisabledBgColor, 1, 'rgba(0,0,0,0.08)');
    $: disabledTextColor = correctColor($jsonDisabledTextColor, 1, 'rgba(0,0,0,0.38)');
    $: disabledBorderColor = correctColor($jsonDisabledBorderColor, 1, 'transparent');

    // Selected value variable binding
    $: selectedVariable = (() => {
        if (!selectedVarName) {
            return createVariable('temp', 'string', '') as Variable;
        }
        if (selectionMode === 'multi') {
            return componentContext.getVariable(selectedVarName, 'array') ||
                rootCtx.awaitGlobalVariable(selectedVarName, 'array', []) ||
                createVariable('temp', 'array', []);
        }
        return componentContext.getVariable(selectedVarName, 'string') ||
            rootCtx.awaitGlobalVariable(selectedVarName, 'string', '') ||
            createVariable('temp', 'string', '');
    })();

    // Items variable binding
    $: itemsVariable = itemsVarName &&
        (componentContext.getVariable(itemsVarName, 'array') ||
         rootCtx.awaitGlobalVariable(itemsVarName, 'array', [])) ||
        null;

    // Resolve items: from variable first, then static
    $: resolvedItems = resolveItems($jsonItems, itemsVariable ? $itemsVariable : null);

    function resolveItems(staticItems: unknown, varItems: unknown): ChoiceChipsItem[] {
        // items_variable takes precedence
        if (varItems && Array.isArray(varItems)) {
            return varItems.filter((item: unknown): item is ChoiceChipsItem =>
                typeof item === 'object' && item !== null && typeof (item as Record<string, unknown>).value === 'string'
            );
        }
        if (staticItems && Array.isArray(staticItems)) {
            return staticItems.filter((item: unknown): item is ChoiceChipsItem =>
                typeof item === 'object' && item !== null && typeof (item as Record<string, unknown>).value === 'string'
            );
        }
        return [];
    }

    // Initialize default selections
    let defaultsApplied = false;
    $: if (resolvedItems.length > 0 && selectedVariable && !defaultsApplied) {
        applyDefaults();
        defaultsApplied = true;
    }

    function applyDefaults(): void {
        const currentVal = selectedVariable.getValue();
        if (selectionMode === 'single') {
            if (!currentVal) {
                const defaultItem = resolvedItems.find(it => correctBooleanInt(it.is_selected_by_default, false));
                if (defaultItem) {
                    selectedVariable.setValue(defaultItem.value);
                }
            }
        } else {
            const arr = Array.isArray(currentVal) ? currentVal : [];
            if (arr.length === 0) {
                const defaults = resolvedItems
                    .filter(it => correctBooleanInt(it.is_selected_by_default, false))
                    .map(it => it.value);
                if (defaults.length > 0) {
                    selectedVariable.setValue(defaults);
                }
            }
        }
    }

    // Error checking
    $: {
        let newHasError = false;
        if (!selectedVarName) {
            newHasError = true;
            componentContext.logError(wrapError(new Error('Missing "selected_value_variable" in "choice_chips"')));
        }
        if (hasError !== newHasError) {
            hasError = newHasError;
        }
    }

    // Check if a chip is selected
    function isChipSelected(value: string): boolean {
        if (selectionMode === 'single') {
            return $selectedVariable === value;
        }
        const arr = $selectedVariable;
        return Array.isArray(arr) && arr.includes(value);
    }

    // Handle chip click
    function onChipClick(item: ChoiceChipsItem): void {
        const isEnabled = correctBooleanInt(item.is_enabled, true);
        if (!isEnabled) return;

        if (selectionMode === 'single') {
            const current = selectedVariable.getValue();
            if (current === item.value) {
                selectedVariable.setValue('');
            } else {
                selectedVariable.setValue(item.value);
            }
        } else {
            const current = selectedVariable.getValue();
            const arr = Array.isArray(current) ? [...current] : [];
            const idx = arr.indexOf(item.value);
            if (idx >= 0) {
                arr.splice(idx, 1);
            } else {
                arr.push(item.value);
            }
            selectedVariable.setValue(arr);
        }

        if (selectionActions && selectionActions.length) {
            componentContext.execAnyActions(selectionActions);
        }
    }

    // Compute chip padding CSS
    $: chipPaddingCss = chipPadding
        ? `${chipPadding.top || 0}px ${chipPadding.right || 0}px ${chipPadding.bottom || 0}px ${chipPadding.left || 0}px`
        : `0 ${12}px`;

    // Build chip style
    function getChipStyle(item: ChoiceChipsItem, selected: boolean): Record<string, string | number | undefined> {
        const isEnabled = correctBooleanInt(item.is_enabled, true);

        let bgColor: string;
        let txtColor: string;
        let brdColor: string;
        let shadow: string | undefined;

        if (!isEnabled) {
            bgColor = disabledBgColor;
            txtColor = disabledTextColor;
            brdColor = disabledBorderColor;
        } else if (selected) {
            bgColor = selectedBgColor;
            txtColor = selectedTextColor;
            brdColor = selectedBorderColor;
        } else {
            bgColor = defaultBgColor;
            txtColor = defaultTextColor;
            brdColor = defaultBorderColor;
        }

        if (isEnabled && chipStyle === 'elevated') {
            shadow = theme.shadow;
        }

        return {
            'background-color': bgColor,
            color: txtColor,
            'border-color': brdColor,
            'border-radius': cornerRadius + 'px',
            'font-size': pxToEm(fontSize),
            'font-weight': fontWeight,
            'font-family': fontFamily || undefined,
            height: chipHeight + 'px',
            padding: chipPaddingCss,
            'box-shadow': shadow,
            gap: showCheckmark || item.icon ? '4px' : undefined
        };
    }

    // Container style
    $: containerStyle = {
        gap: layoutMode === 'wrap'
            ? `${rowSpacing}px ${chipSpacing}px`
            : `${chipSpacing}px`
    };
</script>

{#if !hasError}
    <Outer
        cls={genClassName('choice-chips', css, {
            [layoutMode]: true
        })}
        style={containerStyle}
        {componentContext}
        {layoutParams}
    >
        {#each resolvedItems as item (item.value)}
            {@const selected = isChipSelected(item.value)}
            {@const isEnabled = correctBooleanInt(item.is_enabled, true)}
            <button
                class={genClassName('chip', css, {
                    disabled: !isEnabled
                })}
                style={makeStyle(getChipStyle(item, selected))}
                disabled={!isEnabled}
                type="button"
                aria-pressed={selected}
                on:click={() => onChipClick(item)}
            >
                {#if item.icon && item.icon.image_url}
                    <img
                        class={css['chip__icon']}
                        src={item.icon.image_url}
                        alt=""
                        width={iconSize}
                        height={iconSize}
                    />
                {/if}
                {#if showCheckmark && selected}
                    <svg
                        class={css['chip__checkmark']}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="currentColor"
                        />
                    </svg>
                {/if}
                <span class={css['chip__text']}>
                    {item.text || item.value}
                </span>
            </button>
        {/each}
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder
        {componentContext}
    />
{/if}
