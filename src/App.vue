<script setup lang="ts"></script>

<template>
  <div
    class="min-h-screen w-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <RouterView />
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
