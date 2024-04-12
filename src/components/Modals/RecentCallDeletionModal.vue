<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import OutlineButton from '@/components/Buttons/OutlineButton.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'

const modalOpen = ref(false)
const recentCallDeleteModalContainer = ref<HTMLElement | null>(null)
const recentCallButtonTrigger = ref<HTMLButtonElement | null>(null)

const setModalOpen = (value: boolean): void => {
  modalOpen.value = value
}

const handleClickOutside = (event: MouseEvent): void => {
  if (
    recentCallDeleteModalContainer.value &&
    recentCallButtonTrigger.value &&
    !recentCallDeleteModalContainer.value.contains(event.target as Node) &&
    event.target !== recentCallButtonTrigger.value
  ) {
    setModalOpen(false)
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
  <div class="">
    <button
      ref="recentCallButtonTrigger"
      type="button"
      class="text-xs font-bold text-red-600"
      @click="modalOpen = !modalOpen"
    >
      <i class="fa-solid fa-trash-can"></i>
      Delete
    </button>

    <div
      ref="recentCallDeleteModalContainer"
      class="fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#000] bg-opacity-50 px-4 py-5 transition-opacity duration-300"
      :class="{
        'block opacity-100': modalOpen,
        'hidden opacity-0 pointer-events-none': !modalOpen
      }"
    >
      <div
        class="w-full max-w-[500px] rounded-md px-8 py-12 text-center bg-light-background dark:bg-dark-background md:px-[60px] md:py-[50px] transition-transform duration-300 transform scale-0 sm:scale-100 space-y-8"
      >
        <h1 class="font-bold text-xl text-light-text dark:text-dark-text">
          <i class="fa-solid fa-contact-book mr-3"></i>
          Delete Recent Calls
        </h1>

        <p class="text-sm text-light-text dark:text-dark-text">
          Are you sure you would like to delete this selected calls?
        </p>

        <div class="flex items-center justify-center space-x-5">
          <OutlineButton type="button" @click="modalOpen = false"> Cancel </OutlineButton>
          <SolidButton type="submit" class="bg-red-600 !border-red-600 hover:!bg-red-600">
            Delete
          </SolidButton>
        </div>
      </div>
    </div>
  </div>
</template>
