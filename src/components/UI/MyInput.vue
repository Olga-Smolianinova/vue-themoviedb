<template>
    <input
      autoComplete="off"
      :class="className" 
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emitValue"
    />
</template>

<script setup>
  const props = defineProps({
    className: {
      type: String,
      default: 'input'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    modelValue: String,
    modelModifiers: { default: () => ({}) }
  })

  const emit = defineEmits(['update:modelValue']);

  const emitValue = (e) => {
    let value = e.target.value
    emit('update:modelValue', value)
  }
</script>