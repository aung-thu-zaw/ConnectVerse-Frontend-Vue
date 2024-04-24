<script setup lang="ts">
import { defineProps } from 'vue'

interface SolidButtonProps {
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

defineProps<SolidButtonProps>()
</script>

<template>
  <button
    :type="type"
    class="px-5 py-3 text-sm font-bold rounded-md border border-light-accent dark:border-dark-accent bg-light-accent dark:hover:bg-green-600 hover:bg-green-600 text-white dark:text-white duration-150 disabled:bg-gray-400 disabled:border-gray-400 dark:disabled:bg-neutral-400 dark:disabled:border-neutral-400 disabled:cursor-not-allowed"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
