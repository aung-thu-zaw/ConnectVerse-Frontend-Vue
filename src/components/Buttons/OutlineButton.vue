<script setup lang="ts">
import { defineProps } from 'vue'

interface OutlineButtonProps {
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

defineProps<OutlineButtonProps>()
</script>

<template>
  <button
    :type="type"
    class="px-5 py-3 text-sm font-bold rounded-md hover:bg-gray-200 dark:hover:bg-dark-secondary text-light-text dark:text-dark-text border border-gray-300 dark:border-neutral-500 duration-150"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
