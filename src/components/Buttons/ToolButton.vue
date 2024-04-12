<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface ToolButtonProps {
  border?: boolean
  rounded?: boolean
  disabled?: boolean
  active?: boolean
}

defineProps<ToolButtonProps>()

const toolButtonRef = ref<HTMLElement | null>(null)

defineExpose({ button: toolButtonRef })
</script>

<template>
  <button
    ref="toolButtonRef"
    type="button"
    :class="[
      'text-sm min-w-11 min-h-11 flex items-center justify-center bg-gray-100 dark:bg-dark-secondary hover:bg-gray-200 dark:hover:bg-neutral-900 text-light-text dark:text-dark-text duration-200',
      border ? 'border border-gray-300 dark:border-neutral-500' : '',
      rounded ? 'rounded-full' : 'rounded-md',
      active ? 'text-light-accent dark:text-dark-accent' : ''
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
