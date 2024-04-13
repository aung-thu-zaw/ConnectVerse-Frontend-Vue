<script setup lang="ts">
import { onMounted, ref } from 'vue'

const theme = ref(localStorage.getItem('color-theme') || 'dark')

onMounted(() => {
  const htmlTag = document.documentElement

  htmlTag.classList.add('light')
  if (theme.value === 'dark') {
    htmlTag.classList.add('dark')
  }
})
</script>

<template>
  <div class="">
    <RouterView />
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
