<script setup lang="ts">
import CountBadge from '@/components/Badges/CountBadge.vue'
import Avatar from '@/components/Avatar.vue'
import avatar from '@/assets/images/default-avatar.png'
import type { ChatList, Conversation } from '@/types/chat'

const props = defineProps<{ chatList: ChatList }>()

const conversation = props.chatList.chat as Conversation
</script>

<template>
  <div class="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary">
    <div class="flex items-center space-x-3">
      <div>
        <Avatar :src="conversation.receiver?.avatar ?? avatar" />
      </div>

      <div class="flex flex-col items-start w-full">
        <div class="flex items-center justify-between w-full text-light-text dark:text-dark-text">
          <h3 class="text-sm font-bold mb-1">{{ conversation.receiver?.display_name }}</h3>
          <div class="text-[0.65rem] space-x-2">
            <span class="font-medium">{{ conversation.last_active_at }}</span>
            <span class="text-light-accent dark:text-dark-accent">
              <i v-if="conversation.both_read_last_message" class="fa-solid fa-check-double"></i>
              <i v-else class="fa-solid fa-check"></i>
            </span>
          </div>
        </div>

        <div class="text-xs font-medium flex items-center justify-between space-x-3 w-full">
          <div
            v-if="conversation.last_sent_message"
            class="w-full flex items-center space-x-1 text-gray-500 dark:text-gray-300 !line-clamp-1"
          >
            <span class="text-light-text dark:text-dark-text">
              {{ conversation.last_sent_message?.sender }}
            </span>
            <span class="text-xs">:</span>
            <span>
              {{ conversation.last_sent_message?.message }}
            </span>
          </div>

          <div v-if="conversation.total_unread_message_count">
            <CountBadge :count="conversation.total_unread_message_count" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
