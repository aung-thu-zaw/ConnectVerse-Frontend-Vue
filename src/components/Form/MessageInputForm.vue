<script setup lang="ts">
import AttachmentDropdown from '@/components/Dropdowns/AttachmentDropdown.vue'
import EmojiBoxDropdown from '@/components/Dropdowns/EmojiBoxDropdown.vue'
</script>

<template>
  <form class="flex items-center justify-center space-x-3">
    <div
      class="relative min-w-[350px] max-w-[700px] rounded-lg px-5 py-3 flex items-center space-x-1.5 w-full bg-light-background dark:bg-dark-secondary"
    >
      <EmojiBoxDropdown />

      <div class="w-full">
        <input
          type="text"
          class="border-none outline-none bg-transparent text-sm w-full"
          placeholder="Message ..."
        />
      </div>

      <AttachmentDropdown />
    </div>

    <button
      type="button"
      class="min-w-14 min-h-14 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 bg-light-background hover:bg-light-accent dark:bg-dark-secondary hover:dark:bg-dark-accent hover:text-white hover:dark:text-white duration-200"
    >
      <i class="fa-solid fa-microphone"></i>
    </button>
  </form>
</template>
