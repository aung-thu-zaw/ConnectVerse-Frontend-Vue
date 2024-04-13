<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface InputFieldProps {
  id?: string
  name: string
  type: 'text' | 'password' | 'number' | 'email'
  placeholder?: string
  class?: string
  autofocus?: boolean
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  defaultValue?: string
  modelValue: string
}

const props = defineProps<InputFieldProps>()

const emit = defineEmits(['update:modelValue'])

const input = ref<HTMLInputElement | null>(null)

const inputClasses = ref<string[]>([
  'px-5',
  'py-3.5',
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
  if (input.value && input.value.hasAttribute('autofocus')) input.value.focus()
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target && target.value !== undefined) emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    ref="input"
    :id="id"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :class="inputClasses"
    :value="modelValue"
    :readonly="readOnly"
    :disabled="disabled"
    :required="required"
    :maxlength="maxLength"
    :minlength="minLength"
    :pattern="pattern"
    :defaultValue="defaultValue"
    :autofocus="autofocus"
    @input="handleInput"
  />
</template>
