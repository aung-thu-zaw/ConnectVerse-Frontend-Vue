<script lang="ts" setup>
import ChatListSearchForm from '@/components/Form/SearchForms/ChatListSearchForm.vue'
import FolderTabs from '@/components/FolderTabs.vue'
import ChatList from '@/components/ChatList.vue'
import MainMenuActionDropdown from '@/components/Dropdowns/MainMenuActionDropdown.vue'
import { inject, onMounted } from 'vue'
import type { Axios } from 'axios'

const axios = inject('$axios') as Axios

const getChatLists = async () => {
  try {
    const response = await axios.get('/user/chat-lists')

    console.log(response)
  } catch (error: any) {
    console.error(error)
  }
}

onMounted(() => getChatLists())
</script>

<template>
  <div>
    <div class="flex items-center space-x-3.5 p-3">
      <MainMenuActionDropdown />

      <ChatListSearchForm />
    </div>

    <div class="border-b border-b-gray-200 dark:border-b-dark-secondary">
      <FolderTabs />
    </div>

    <div class="p-3 h-[610px] overflow-y-scroll hide-scrollbar">
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </div>
  </div>
</template>
