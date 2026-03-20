<script lang="ts">
    import { getContext } from 'svelte';

    import css from './Breadcrumb.module.css';

    import type { LayoutParams } from '../../types/layoutParams';
    import type { DivBreadcrumbData, BreadcrumbCrumb } from '../../types/breadcrumb';
    import type { ComponentContext } from '../../types/componentContext';
    import { ROOT_CTX, type RootCtxValue } from '../../context/root';
    import { genClassName } from '../../utils/genClassName';
    import { pxToEm } from '../../utils/pxToEm';
    import { correctColor } from '../../utils/correctColor';
    import { correctPositiveNumber } from '../../utils/correctPositiveNumber';
    import Outer from '../utilities/Outer.svelte';
    import DevtoolHolder from '../utilities/DevtoolHolder.svelte';

    export let componentContext: ComponentContext<DivBreadcrumbData>;
    export let layoutParams: LayoutParams | undefined = undefined;

    const rootCtx = getContext<RootCtxValue>(ROOT_CTX);

    let separator = '/';
    let itemTextColor = '#0077CC';
    let activeTextColor = '#111111';
    let itemFontSize = 14;

    $: origJson = componentContext.origJson;

    function rebind(): void {
        separator = '/';
        itemTextColor = '#0077CC';
        activeTextColor = '#111111';
        itemFontSize = 14;
    }

    $: if (origJson) {
        rebind();
    }

    $: jsonSeparator = componentContext.getDerivedFromVars(componentContext.json.separator);
    $: jsonItemTextColor = componentContext.getDerivedFromVars(componentContext.json.item_text_color);
    $: jsonActiveTextColor = componentContext.getDerivedFromVars(componentContext.json.active_text_color);
    $: jsonItemFontSize = componentContext.getDerivedFromVars(componentContext.json.item_font_size);
    $: jsonCrumbs = componentContext.getDerivedFromVars(componentContext.json.crumbs);

    $: {
        separator = (typeof $jsonSeparator === 'string' && $jsonSeparator.length > 0) ? $jsonSeparator : separator;
    }

    $: {
        itemTextColor = correctColor($jsonItemTextColor, 1, itemTextColor);
    }

    $: {
        activeTextColor = correctColor($jsonActiveTextColor, 1, activeTextColor);
    }

    $: {
        itemFontSize = correctPositiveNumber($jsonItemFontSize, itemFontSize);
    }

    $: crumbs = Array.isArray($jsonCrumbs) ? $jsonCrumbs : (componentContext.json.crumbs || []);

    $: stl = {
        '--divkit-breadcrumb-item-color': itemTextColor,
        '--divkit-breadcrumb-active-color': activeTextColor,
        '--divkit-breadcrumb-font-size': pxToEm(itemFontSize)
    };

    function handleCrumbClick(crumb: BreadcrumbCrumb): void {
        if (crumb.action) {
            componentContext.execAnyActions([crumb.action]);
        }
    }

    function handleCrumbKeydown(event: KeyboardEvent, crumb: BreadcrumbCrumb): void {
        if (crumb.action && (event.key === 'Enter' || event.key === ' ')) {
            componentContext.execAnyActions([crumb.action]);
            event.preventDefault();
        }
    }
</script>

{#if true}
    <Outer
        cls={genClassName('breadcrumb', css, {})}
        style={stl}
        {componentContext}
        {layoutParams}
    >
        <nav aria-label="breadcrumb">
            <ol class={css.breadcrumb__list}>
                {#each crumbs as crumb, index}
                    <li class={css.breadcrumb__item}>
                        {#if index === crumbs.length - 1}
                            <span class={css.breadcrumb__label} aria-current="page">{crumb.title}</span>
                        {:else}
                            <span
                                class="{css.breadcrumb__label} {css['breadcrumb__label_link']}"
                                role="link"
                                tabindex="0"
                                on:click={() => handleCrumbClick(crumb)}
                                on:keydown={e => handleCrumbKeydown(e, crumb)}
                            >{crumb.title}</span>
                            <span class={css.breadcrumb__separator} aria-hidden="true">{separator}</span>
                        {/if}
                    </li>
                {/each}
            </ol>
        </nav>
    </Outer>
{:else if process.env.DEVTOOL}
    <DevtoolHolder {componentContext} />
{/if}
