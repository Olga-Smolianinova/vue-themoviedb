<template>
    <button type="button">
        <my-spinner v-if="loading" />
        <slot v-else />
    </button>
</template>

<script setup>
    import MySpinner from './MySpinner.vue';

    const props = defineProps({
        loading: {
            type: Boolean,
            default: false
        }
    })
</script>