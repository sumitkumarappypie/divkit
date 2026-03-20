<script lang="ts">
    import { createEventDispatcher, getContext } from 'svelte';
    import { LANGUAGE_CTX, type LanguageContext } from '../../ctx/languageContext';
    import type { ComponentProperty } from '../../data/componentProps';
    import { APP_CTX, type AppContext } from '../../ctx/appContext';
    import MoveList2 from '../controls/MoveList2.svelte';
    import BreadcrumbCrumbsItem from './BreadcrumbCrumbsItem.svelte';
    import AddButton from '../controls/AddButton.svelte';

    export let value: { title: string; action?: { log_id: string; url: string } }[];
    export let item: ComponentProperty;

    const { l10n } = getContext<LanguageContext>(LANGUAGE_CTX);
    const { state } = getContext<AppContext>(APP_CTX);
    const { readOnly } = state;

    const dispatch = createEventDispatcher();

    function onChange(): void {
        if (!$readOnly) {
            dispatch('change', {
                item,
                value
            });
        }
    }

    function onAdd(): void {
        if (!$readOnly) {
            dispatch('change', {
                item,
                value: [...(value || []), { title: '' }]
            });
        }
    }
</script>

<svelte:options immutable={true} />

<div class="breadcrumb-crumbs">
    <div class="breadcrumb-crumbs__list">
        <MoveList2
            bind:values={value}
            itemView={BreadcrumbCrumbsItem}
            readOnly={$readOnly}
            on:change={onChange}
            on:reorder={onChange}
        />
    </div>

    <AddButton
        cls="breadcrumb-crumbs__add"
        disabled={$readOnly}
        on:click={onAdd}
    >
        {$l10n('add_breadcrumb_crumb')}
    </AddButton>
</div>

<style>
    .breadcrumb-crumbs__list {
        margin-left: -20px;
    }
</style>
