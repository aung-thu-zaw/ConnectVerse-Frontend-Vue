<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import type { Contact } from '@/types/contact'

defineProps<{ contact: Contact }>()
</script>

<template>
  <div class="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary">
    <div class="flex items-center space-x-3">
      <Avatar :src="contact.associated_user.avatar" />

      <div class="flex flex-col items-start w-full">
        <div class="flex items-center justify-between w-full text-light-text dark:text-dark-text">
          <h3 class="text-sm font-bold mb-1">
            {{ contact.name ?? contact.associated_user.display_name }}
          </h3>
        </div>
        <div class="text-xs font-medium flex items-center justify-between space-x-3 w-full">
          <p class="text-gray-500 dark:text-gray-400 line-clamp-1">Last sense a long time ago</p>
        </div>
      </div>
    </div>
  </div>
</template>
