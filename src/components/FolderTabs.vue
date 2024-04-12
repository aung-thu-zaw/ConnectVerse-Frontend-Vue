<script setup lang="ts">
import CountBadge from '@/components/Badges/CountBadge.vue'
</script>

<template>
  <div class="flex items-center space-x-1 px-3 overflow-x-scroll hide-scrollbar">
    <button
      type="button"
      class="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center border-b-[3px] text-light-text hover:bg-gray-100 border-b-light-accent dark:text-dark-text dark:hover:bg-dark-secondary dark:border-b-dark-accent"
    >
      <span class="block">All</span>
      <CountBadge :count="20" />
    </button>

    <button
      type="button"
      class="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
    >
      <span class="block">English</span>
      <CountBadge :count="4" />
    </button>

    <button
      type="button"
      class="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
    >
      <span class="block">Programming</span>
      <CountBadge :count="2" />
    </button>

    <button
      type="button"
      class="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
    >
      <span class="block">Movie</span>
      <CountBadge :count="0" />
    </button>

    <button
      type="button"
      class="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
    >
      <span class="block">Music</span>
      <CountBadge :count="10" />
    </button>
  </div>
</template>
