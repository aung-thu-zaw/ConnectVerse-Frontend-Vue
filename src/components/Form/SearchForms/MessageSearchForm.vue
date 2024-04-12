<script setup lang="ts">
// Your Code
</script>

<template>
  <div class="flex items-center space-x-3">
    <form class="w-full">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="text"
          id="default-search"
          class="block w-full p-3.5 pl-10 text-sm rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 font-medium text-light-text bg-gray-100 border dark:bg-dark-secondary dark:text-gray-100 dark:border-gray-600"
          placeholder="Search ..."
        />
      </div>
    </form>

    <button
      type="button"
      class="min-w-10 min-h-10 rounded-lg text-light-text hover:bg-gray-100 dark:bg-dark-secondary dark:text-gray-100"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>
