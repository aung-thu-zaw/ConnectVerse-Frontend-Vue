<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DropdownItem from '@/components/DropdownItem.vue'

const dropdownOpen = ref(false)
const attachmentButtonRef = ref<HTMLButtonElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (attachmentButtonRef.value && !attachmentButtonRef.value.contains(event.target as Node)) {
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
      <div ref="attachmentButtonRef">
        <button
          type="button"
          @click="dropdownOpen = !dropdownOpen"
          class="min-w-10 min-h-10 rounded-full hover:text-light-accent dark:hover:text-dark-accent hover:bg-gray-100 dark:hover:bg-dark-background outline-none"
          :class="{
            'text-light-accent dark:text-dark-accent bg-gray-100 dark:bg-dark-background':
              dropdownOpen,
            'text-gray-600 dark:text-gray-400': !dropdownOpen
          }"
        >
          <i class="fa-solid fa-paperclip"></i>
        </button>
      </div>

      <div
        class="shadow-1 absolute -right-4 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[180px] w-auto rounded-md transition-all"
        :class="{
          '-top-[163px] opacity-100 visible': dropdownOpen,
          '-top-[110%] invisible opacity-0': !dropdownOpen
        }"
      >
        <DropdownItem type="button" icon="fa-solid fa-image" label="Photo" />
        <DropdownItem type="button" icon="fa-solid fa-film" label="Video" />
        <DropdownItem type="button" icon="fa-solid fa-file" label="File" />
      </div>
    </div>
  </div>
</template>
