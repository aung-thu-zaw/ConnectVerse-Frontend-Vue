<script setup lang="ts">
import MessageActionDropdown from '@/components/Dropdowns/MessageActionDropdown.vue'
import ReactionEmojiDropdown from '@/components/Dropdowns/ReactionEmojiDropdown.vue'
</script>

<template>
  <div class="w-full flex items-center justify-start">
    <div class="flex items-start gap-2.5">
      <img
        class="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
        alt="Jese image"
      />
      <div
        class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-light-background rounded-e-xl rounded-es-xl dark:bg-dark-background"
      >
        <div class="flex items-center justify-between space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-light-text dark:text-dark-text">
            Bonnie Green
          </span>
          <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
            <i class="fa-solid fa-clock mr-1"></i>
            11:46
          </span>
        </div>

        <p class="text-sm font-normal py-2.5 text-light-text dark:text-dark-text">
          That's awesome. I think our users will really appreciate the improvements.
        </p>

        <div class="group relative my-2.5">
          <div
            class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
          >
            <button
              data-tooltip-target="download-image"
              class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
            >
              <svg
                class="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
            </button>
            <div
              id="download-image"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Download image
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/01/65/91/25/360_F_165912559_vQvvkpvUVltIvrVs8eJjZnEw0AT6iJzU.jpg"
            class="rounded-lg"
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1">
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
            >
              <span>👍</span>
              <span class="font-semibold text-light-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😂</span>
              <span class="font-semibold text-light-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😎</span>
              <span class="font-semibold text-light-text dark:text-dark-text"> 2 </span>
            </button>
          </div>

          <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
            Send
            <i class="fa-solid fa-eye ml-2"></i>
          </div>
        </div>
      </div>

      <div class="space-y-3 mt-5">
        <div>
          <MessageActionDropdown position="left" />
        </div>

        <div class="ml-1">
          <ReactionEmojiDropdown position="left" />
        </div>
      </div>
    </div>
  </div>
</template>
