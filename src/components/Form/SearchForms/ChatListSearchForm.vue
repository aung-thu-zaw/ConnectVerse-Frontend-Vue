<script setup lang="ts">
// Your Code
</script>

<template>
  <form class="w-full">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <input
        type="text"
        id="default-search"
        class="block p-3 pl-10 transition-all focus:outline-none ring-0 text-light-text dark:text-gray-100 rounded-md font-medium border w-full text-sm outline-none bg-gray-100 border-gray-300 dark:bg-dark-secondary dark:border-neutral-500 focus:border-light-accent dark:focus:border-dark-accent duration-200"
        placeholder="Search Chats ..."
      />
    </div>
  </form>
</template>
