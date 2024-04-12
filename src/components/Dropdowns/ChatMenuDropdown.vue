<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DropdownItem from '@/components/DropdownItem.vue'

const dropdownOpen = ref(false)
const chatMenuButtonRef = ref<HTMLButtonElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (chatMenuButtonRef.value && !chatMenuButtonRef.value.contains(event.target as Node)) {
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
      <div ref="chatMenuButtonRef">
        <button
          type="button"
          @click="dropdownOpen = !dropdownOpen"
          class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-secondary"
        >
          <svg
            class="flex-none size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>
      <div
        class="shadow-1 absolute z-50 right-0 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[210px] w-auto rounded-md transition-all"
        :class="{
          'top-full opacity-100 visible': dropdownOpen,
          'top-[110%] invisible opacity-0': !dropdownOpen
        }"
      >
        <DropdownItem type="button" icon="fa-solid fa-video" label="Video Call" />
        <DropdownItem type="button" icon="fa-solid fa-bell-slash" label="Mute Notification" />
        <DropdownItem type="button" icon="fa-solid fa-circle-check" label="Select Message" />
        <DropdownItem type="button" icon="fa-solid fa-user" label="Report" />
        <DropdownItem type="button" icon="fa-solid fa-flag" label="Report" />
        <DropdownItem type="button" icon="fa-solid fa-ban" label="Block User" />

        <hr className="my-2" />

        <button
          type="button"
          className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md text-red-500 hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
        >
          <i className="fa-solid fa-trash-can mr-3"></i>
          Delete Chat
        </button>
      </div>
    </div>
  </div>
</template>
