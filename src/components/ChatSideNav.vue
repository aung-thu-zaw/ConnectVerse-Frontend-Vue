<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue'
import { ref } from 'vue'
import ChatAside from '@/components/Asides/ChatAside.vue'
import ContactAside from '@/components/Asides/ContactAside.vue'
import RecentCallAside from '@/components/Asides/RecentCallAside.vue'
import SettingAside from '@/components/Asides/SettingAside.vue'

type Aside = 'chats' | 'contacts' | 'recent-calls' | 'settings'

const activeAside = ref<Aside>('chats')

const handleActiveAside = (aside: string) => (activeAside.value = aside as Aside)
</script>

<template>
  <aside
    class="w-full min-w-[350px] md:w-3/12 h-full border-r border-light-secondary dark:border-dark-secondary"
  >
    <div class="">
      <ChatAside v-if="activeAside === 'chats'" />
      <ContactAside v-else-if="activeAside === 'contacts'" />
      <RecentCallAside v-else-if="activeAside === 'recent-calls'" />
      <SettingAside v-else-if="activeAside === 'settings'" />
    </div>

    <div
      class="flex items-center justify-center space-x-10 border-t border-t-gray-200 dark:border-t-dark-secondary py-3.5 px-5"
    >
      <BottomNavigation @active-aside="handleActiveAside" />
    </div>
  </aside>
</template>
