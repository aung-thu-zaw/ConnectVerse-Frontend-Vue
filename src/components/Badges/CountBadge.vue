<script lang="ts" setup>
defineProps<{ count: number }>()
</script>

<template>
  <div
    class="text-white rounded-full min-w-5 min-h-5 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent"
  >
    {{ count }}
  </div>
</template>
