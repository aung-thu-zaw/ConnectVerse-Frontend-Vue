<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ label?: string }>()

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
    <span
      class="slider mr-4 flex h-[25px] w-[53px] items-center rounded-full bg-[#CCCCCE] dark:bg-dark-background border dark:border-neutral-500 p-1 duration-200"
    >
      <span class="dot h-4 w-4 rounded-full bg-white dark:bg-neutral-300 duration-200"></span>
    </span>
    <span
      v-if="label"
      class="label flex items-center text-sm font-medium text-light-text dark:text-dark-text"
    >
      {{ label }}
    </span>
  </label>
</template>
