<script setup lang="ts">
defineProps<{ forHtml?: string; label: string; required?: boolean }>()
</script>

<template>
  <label
    :for="forHtml"
    class="text-left block w-full mb-2 text-sm font-semibold text-light-text dark:text-dark-text"
  >
    {{ label }}

    <span v-if="required" class="text-light-accent dark:text-dark-accent">*</span>
  </label>
</template>
