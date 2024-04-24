<script lang="ts" setup>
import ChatSideNav from '@/components/ChatSideNav.vue'
import MainChatWindow from '@/components/MainChatWindow.vue'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'

const store = useAuthStore()

onMounted(() => store.getAuthenticatedUser())
</script>

<template>
  <div
    class="flex items-start justify-between h-screen overflow-hidden bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <ChatSideNav />

    <MainChatWindow />

    <!-- <aside class="min-w-[350px] w-full md:w-3/12 md:block hidden">
      <MessageSearchBox />
    </aside> -->
  </div>
</template>
