<script setup lang="ts">
type ItemType = 'button' | 'link'

defineProps<{ type: ItemType; icon?: string; label: string; href?: string }>()
</script>

<template>
  <div>
    <button
      v-if="type === 'button'"
      type="button"
      class="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
    >
      <span v-if="icon" class="mr-3">
        <i :class="icon"></i>
      </span>
      {{ label }}
    </button>

    <a
      :href="href"
      v-else-if="type === 'link' && href"
      class="block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
    >
      <span v-if="icon" class="mr-3">
        <i :class="{ icon }"></i>
      </span>
      {{ label }}
    </a>
  </div>
</template>
