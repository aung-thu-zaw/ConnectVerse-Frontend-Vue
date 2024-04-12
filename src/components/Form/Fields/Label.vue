<script setup lang="ts">
defineProps<{ forHtml?: string; label: string }>()
</script>

<template>
  <label
    :for="forHtml"
    class="text-left block w-full mb-2 text-sm font-semibold text-light-text dark:text-dark-text"
  >
    {{ label }}
  </label>
</template>
