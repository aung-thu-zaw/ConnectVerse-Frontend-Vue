<script setup lang="ts">
import MessageActionDropdown from '@/components/Dropdowns/MessageActionDropdown.vue'
import ReactionEmojiDropdown from '@/components/Dropdowns/ReactionEmojiDropdown.vue'
</script>

<template>
  <div class="w-full flex items-center justify-end">
    <div class="flex items-start gap-2.5">
      <div class="space-y-3 mt-5">
        <div>
          <MessageActionDropdown position="right" />
        </div>

        <div class="ml-1">
          <ReactionEmojiDropdown position="right" />
        </div>
      </div>

      <div
        class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-light-accent rounded-ee-xl rounded-s-xl dark:bg-dark-accent"
      >
        <div class="flex items-center justify-between space-x-2 rtl:space-x-reverse">
          <span class="text-xs font-normal text-gray-200">
            <i class="fa-solid fa-clock mr-1"></i>
            11:46
          </span>
          <span class="text-sm font-semibold text-white"> Bonnie Green </span>
        </div>
        <p class="text-sm font-normal py-2.5 text-white">
          That's awesome. I think our users will really appreciate the improvements.
        </p>

        <div class="flex items-center justify-between">
          <div class="text-xs text-right font-normal text-gray-200">
            Send
            <i class="fa-solid fa-eye ml-2"></i>
          </div>

          <div class="flex items-center space-x-1">
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>👍</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😂</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😎</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
          </div>
        </div>
      </div>

      <img
        class="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
        alt="Jese image"
      />
    </div>
  </div>
</template>
