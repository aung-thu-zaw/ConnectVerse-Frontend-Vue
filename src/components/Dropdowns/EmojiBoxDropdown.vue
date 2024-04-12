<script setup lang="ts">
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import { onMounted, onUnmounted, ref } from 'vue'

const dropdownOpen = ref(false)
const emojiButtonRef = ref<HTMLButtonElement | null>(null)
const theme = ref<any>(localStorage.getItem('color-theme') || 'dark')

const handleClickOutside = (event: MouseEvent) => {
  if (emojiButtonRef.value && !emojiButtonRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="w-auto">
    <div class="relative">
      <div ref="emojiButtonRef">
        <button
          type="button"
          @click="dropdownOpen = !dropdownOpen"
          class="min-w-10 min-h-10 rounded-full hover:text-light-accent dark:hover:text-dark-accent hover:bg-gray-100 dark:hover:bg-dark-background"
          :class="{
            'text-light-accent dark:text-dark-accent bg-gray-100 dark:bg-dark-background':
              dropdownOpen,
            'text-gray-600 dark:text-gray-400': !dropdownOpen
          }"
        >
          <i class="fa-solid fa-smile"></i>
        </button>
      </div>

      <div
        class="absolute -top-[338px] -left-5 transition-all"
        :class="{
          ' opacity-100 visible': dropdownOpen,
          'invisible opacity-0': !dropdownOpen
        }"
      >
        <EmojiPicker
          :native="true"
          :static-texts="{ placeholder: 'Search emoji' }"
          :theme="theme"
        />
      </div>
    </div>
  </div>
</template>
