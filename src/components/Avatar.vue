<script setup lang="ts">
defineProps<{ size?: string; src: string; alt?: string }>()
</script>

<template>
  <div
    class="inline-block rounded-full overflow-hidden"
    :class="{ [`size-${size}`]: size, 'size-[42px]': !size }"
  >
    <img class="w-full h-full object-cover" :src="src" :alt="alt || 'avatar'" />
  </div>
</template>
