<template>
  <div 
    class="dialog"
    v-if="showModal"
    @click="showModal = false"
   >
    <div 
        class="dialog__content"
        @click.stop 
    >
        <slot />
    </div>
  </div>
</template>

<script setup>
 import { ref, watch } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
const showModal = ref(false)
const emit = defineEmits(['update:show'])

watch(
    () => props.show, 
    (value) => showModal.value = value
)
watch(
    () => showModal.value, 
    (value) => emit('update:show', value)
)
</script>