<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface TextareaFieldProps {
  id?: string
  name: string
  placeholder?: string
  class?: string
  autofocus?: boolean
  rows?: number
  cols?: number
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  maxLength?: number
  modelValue: string
}

const props = defineProps<TextareaFieldProps>()

const emit = defineEmits(['update:modelValue'])

const textarea = ref<HTMLTextAreaElement | null>(null)

const textareaClasses = ref<string[]>([
  'px-5',
  'py-4',
  'rounded-md',
  'font-medium',
  'border',
  'w-full',
  'text-sm',
  'outline-none',
  'bg-gray-100',
  'border-gray-300',
  'dark:bg-dark-secondary',
  'dark:border-neutral-500',
  'focus:border-light-accent',
  'dark:focus:border-dark-accent',
  'duration-200',
  props.class ?? ''
])

onMounted(() => {
  if (textarea.value && textarea.value.hasAttribute('autofocus')) textarea.value.focus()
})

const handleTextarea = (event: Event) => {
  const target = event.target as HTMLTextAreaElement

  if (target && target.value !== undefined) emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    ref="textarea"
    :id="id"
    :name="name"
    :rows="rows"
    :cols="cols"
    :value="modelValue"
    :readonly="readOnly"
    :disabled="disabled"
    :required="required"
    :maxlength="maxLength"
    :class="textareaClasses"
    :placeholder="placeholder"
    :autofocus="autofocus"
    @input="handleTextarea"
  ></textarea>
</template>
