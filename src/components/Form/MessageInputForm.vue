<script setup lang="ts">
import AttachmentDropdown from '@/components/Dropdowns/AttachmentDropdown.vue'
import EmojiBoxDropdown from '@/components/Dropdowns/EmojiBoxDropdown.vue'
import { usePrivateConversationStore } from '@/stores/privateConversation'
import { reactive, ref } from 'vue'
import type { Emoji } from 'vue3-emoji-picker'

const props = defineProps<{ receiver_id: number }>()

const store = usePrivateConversationStore()

const messageInput = ref(null)
const form = reactive({
  receiver_id: 2,
  content: '',
  message_type: 'text',
  media: {
    media_type: '',
    media_file: [] as File[],
    caption: ''
  }
})

const handleEmoji = (emoji: Emoji) => {
  const textArea = messageInput.value as HTMLInputElement | null
  if (!textArea) return

  const selectionStart = textArea.selectionStart ?? 0
  const selectionEnd = textArea.selectionEnd ?? 0

  const contentBefore = form.content.slice(0, selectionStart)
  const contentAfter = form.content.slice(selectionEnd)

  form.content = contentBefore + emoji + contentAfter
}

const handleFiles = (value: File | File[]) => {
  if (Array.isArray(value)) {
    form.media.media_file.push(...value)
  } else {
    form.media.media_file.push(value)
  }

  if (Array.isArray(value) && value.length > 0) {
    if (value[0].type.startsWith('image')) {
      form.media.media_type = 'image'
    } else if (value[0].type.startsWith('video')) {
      form.media.media_type = 'video'
    } else if (value[0].type.startsWith('application')) {
      form.media.media_type = 'file'
    }
  } else if (value instanceof File && value.type) {
    if (value.type.startsWith('image')) {
      form.media.media_type = 'image'
    } else if (value.type.startsWith('video')) {
      form.media.media_type = 'video'
    } else if (value.type.startsWith('application')) {
      form.media.media_type = 'file'
    }
  }

  form.message_type = 'media'
}
</script>

<template>
  <form
    @submit.prevent="store.sendMessage(form)"
    class="flex items-center justify-center space-x-3"
  >
    <div
      class="relative min-w-[350px] max-w-[700px] rounded-lg px-5 py-3 flex items-center space-x-1.5 w-full bg-light-background dark:bg-dark-secondary"
    >
      <EmojiBoxDropdown @selected-emoji="handleEmoji" />

      <div class="w-full">
        <input
          ref="messageInput"
          type="text"
          class="border-none outline-none bg-transparent text-sm w-full"
          placeholder="Message ..."
          v-model="form.content"
        />
      </div>

      <AttachmentDropdown @updated-files="handleFiles" />
    </div>

    <button
      type="submit"
      class="min-w-14 min-h-14 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 bg-light-background hover:bg-light-accent dark:bg-dark-secondary hover:dark:bg-dark-accent hover:text-white hover:dark:text-white duration-200"
      :class="{ '!bg-light-accent !dark:bg-dark-accent !text-white': form.content }"
    >
      <span v-if="form.content">
        <i class="fa-solid fa-paper-plane"></i>
      </span>
      <span v-else>
        <i class="fa-solid fa-microphone"></i>
      </span>
    </button>
  </form>
</template>
