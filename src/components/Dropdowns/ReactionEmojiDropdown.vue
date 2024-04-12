<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DropdownItem from '@/components/DropdownItem.vue'

type Position = 'left' | 'right'

defineProps<{ position: Position }>()

const dropdownOpen = ref(false)
const reactionEmojiButtonRef = ref<HTMLButtonElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (
    reactionEmojiButtonRef.value &&
    !reactionEmojiButtonRef.value.contains(event.target as Node)
  ) {
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
      <div ref="reactionEmojiButtonRef">
        <button
          type="button"
          @click="dropdownOpen = !dropdownOpen"
          class="text-xs font-normal w-6 h-6 flex items-center justify-center rounded-full hover:text-green-500 bg-light-background dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-secondary"
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
        class="absolute z-30 -top-3 min-w-[200px] w-auto rounded-md transition-all"
        :class="{
          'left-8': position === 'left',
          'right-8': position === 'right',
          'opacity-100 visible': dropdownOpen,
          'opacity-0 invisible': !dropdownOpen
        }"
      >
        <div
          class="flex items-center justify-center rounded-full px-5 py-2 space-x-5 bg-light-background dark:bg-dark-background bg-opacity-50 dark:bg-opacity-80 border border-gray-200 dark:border-dark-secondary text-lg"
        >
          <button type="button" class="hover:scale-150 transition-all">👍</button>
          <button type="button" class="hover:scale-150 transition-all">❤️</button>
          <button type="button" class="hover:scale-150 transition-all">😂</button>
          <button type="button" class="hover:scale-150 transition-all">😎</button>
          <button type="button" class="hover:scale-150 transition-all">😭</button>
          <button type="button" class="hover:scale-150 transition-all">😡</button>
          <button type="button" class="hover:scale-150 transition-all">🚀</button>
        </div>
      </div>
    </div>
  </div>
</template>
