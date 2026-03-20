<script lang="ts">
    import { createEventDispatcher, getContext } from 'svelte';
    import { APP_CTX, type AppContext } from '../../ctx/appContext';

    export let value: { title: string; action?: { log_id: string; url: string } };

    const { state } = getContext<AppContext>(APP_CTX);
    const { readOnly } = state;

    const dispatch = createEventDispatcher();

    $: title = value?.title || '';
    $: actionUrl = value?.action?.url || '';

    function onTitleInput(event: Event): void {
        if ($readOnly) return;
        const newTitle = (event.target as HTMLInputElement).value;
        value = { ...value, title: newTitle };
        dispatch('change');
    }

    function onActionUrlInput(event: Event): void {
        if ($readOnly) return;
        const newUrl = (event.target as HTMLInputElement).value;
        if (newUrl) {
            value = {
                ...value,
                action: {
                    log_id: value.action?.log_id || ('breadcrumb_' + (value.title || 'item').toLowerCase().replace(/\s+/g, '_')),
                    url: newUrl
                }
            };
        } else {
            const { action: _removed, ...rest } = value as any;
            value = rest;
        }
        dispatch('change');
    }
</script>

<div class="breadcrumb-crumbs-item" class:breadcrumb-crumbs-item_readonly={$readOnly}>
    <input
        class="breadcrumb-crumbs-item__input"
        type="text"
        placeholder="Title"
        disabled={$readOnly}
        value={title}
        on:input={onTitleInput}
    />
    <input
        class="breadcrumb-crumbs-item__input breadcrumb-crumbs-item__input_url"
        type="text"
        placeholder="Action URL (optional)"
        disabled={$readOnly}
        value={actionUrl}
        on:input={onActionUrlInput}
    />
</div>

<style>
    .breadcrumb-crumbs-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--fill-transparent-3);
        border-radius: 8px;
        background-color: var(--background-primary);
        transition: border-color .15s ease-in-out;
    }

    .breadcrumb-crumbs-item:not(.breadcrumb-crumbs-item_readonly):focus-within {
        border-color: var(--accent-purple);
    }

    .breadcrumb-crumbs-item__input {
        box-sizing: border-box;
        width: 100%;
        padding: 4px 8px;
        font: inherit;
        font-size: 13px;
        line-height: 18px;
        color: inherit;
        border: 1px solid var(--fill-transparent-3);
        border-radius: 6px;
        background: var(--fill-transparent-minus-1);
        appearance: none;
    }

    .breadcrumb-crumbs-item__input:disabled {
        border-color: transparent;
        background: var(--fill-transparent-1);
    }

    .breadcrumb-crumbs-item__input:not(:disabled):hover {
        border-color: var(--fill-transparent-4);
    }

    .breadcrumb-crumbs-item__input:focus-visible {
        outline: none;
        border-color: var(--accent-purple);
    }

    .breadcrumb-crumbs-item__input_url {
        font-size: 12px;
        color: var(--text-secondary);
    }
</style>
