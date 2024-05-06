<script lang="ts" setup>
import ChatListSearchForm from '@/components/Form/SearchForms/ChatListSearchForm.vue'
import FolderTabs from '@/components/FolderTabs.vue'
import ConversationCard from '@/components/Cards/ChatLists/ConversationCard.vue'
import GroupChatCard from '@/components/Cards/ChatLists/GroupChatCard.vue'
import ChannelCard from '@/components/Cards/ChatLists/ChannelCard.vue'
import MainMenuActionDropdown from '@/components/Dropdowns/MainMenuActionDropdown.vue'
import { inject, onMounted, ref } from 'vue'
import type { Axios } from 'axios'
import type { ChatList } from '@/types/chat'

const chatLists = ref<ChatList[] | null>(null)

const axios = inject('$axios') as Axios

const getChatLists = async () => {
  try {
    const response = await axios.get('/user/chat-lists')

    if (!response) throw new Error('Response Not Found!')

    chatLists.value = response.data.data
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
      <template v-for="chatList in chatLists" :key="chatList.id">
        <ConversationCard
          v-if="chatList.chat_type === 'App\\Models\\Conversation'"
          :chat-list="chatList"
        />
        <GroupChatCard
          v-else-if="chatList.chat_type === 'App\\Models\\GroupChat'"
          :chat-list="chatList"
        />
        <ChannelCard
          v-else-if="chatList.chat_type === 'App\\Models\\Channel'"
          :chat-list="chatList"
        />
      </template>
    </div>
  </div>
</template>
