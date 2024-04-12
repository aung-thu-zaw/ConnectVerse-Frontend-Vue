<script setup lang="ts">
import ToolButton from '@/components/Buttons/ToolButton.vue'
import TooltipItem from '@/components/TooltipItem.vue'
import { ref } from 'vue'

const emit = defineEmits(['activeAside'])

const currentAside = ref('chats')

const handleNavigation = (aside: string) => {
  emit('activeAside', aside)
  currentAside.value = aside
}
</script>

<template>
  <nav class="sticky bottom-0 flex items-center justify-center space-x-10">
    <TooltipItem position="top" tooltipText="Chats">
      <ToolButton rounded :active="currentAside === 'chats'" @click="handleNavigation('chats')">
        <i class="fa-solid fa-message"></i>
      </ToolButton>
    </TooltipItem>

    <TooltipItem position="top" tooltipText="Contacts">
      <ToolButton
        rounded
        :active="currentAside === 'contacts'"
        @click="handleNavigation('contacts')"
      >
        <i class="fa-solid fa-contact-book"></i>
      </ToolButton>
    </TooltipItem>

    <TooltipItem position="top" tooltipText="Recent Calls">
      <ToolButton
        rounded
        :active="currentAside === 'recent-calls'"
        @click="handleNavigation('recent-calls')"
      >
        <i class="fa-solid fa-phone"></i>
      </ToolButton>
    </TooltipItem>

    <TooltipItem position="top" tooltipText="Settings">
      <ToolButton
        rounded
        :active="currentAside === 'settings'"
        @click="handleNavigation('settings')"
      >
        <i class="fa-solid fa-gear"></i>
      </ToolButton>
    </TooltipItem>
  </nav>
</template>
