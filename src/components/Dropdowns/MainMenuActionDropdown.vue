<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ToolButton from '@/components/Buttons/ToolButton.vue'
// import ToggleModeButton from '@/components/ToggleModeButton.vue'
import DropdownItem from '@/components/DropdownItem.vue'

const dropdownOpen = ref(false)
const mainMenuActionButtonRef = ref<HTMLButtonElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (
    mainMenuActionButtonRef.value &&
    !mainMenuActionButtonRef.value.contains(event.target as Node)
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
      <div ref="mainMenuActionButtonRef">
        <ToolButton border @click="dropdownOpen = !dropdownOpen">
          <i class="fa-solid fa-bars"></i>
        </ToolButton>
      </div>

      <div
        v-show="dropdownOpen"
        class="shadow-1 absolute left-0 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[210px] w-auto rounded-md transition-all"
        :class="{
          'top-10 opacity-100 visible': dropdownOpen,
          '-top-[100%] invisible opacity-0': !dropdownOpen
        }"
      >
        <DropdownItem type="button" icon="fa-solid fa-bookmark" label="Saved Messages" />
        <DropdownItem type="button" icon="fa-solid fa-contact-book" label="Contacts" />
        <DropdownItem type="button" icon="fa-solid fa-gear" label="Settings" />
        <DropdownItem type="button" icon="fa-solid fa-folder" label="Folders" />
        <!-- <ToggleModeButton /> -->
        <DropdownItem type="button" icon="fa-solid fa-bug" label="Report Bug" />
      </div>
    </div>
  </div>
</template>
