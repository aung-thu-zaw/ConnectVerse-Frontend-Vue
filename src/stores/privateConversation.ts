import type {
  MessageForm,
  PrivateConversationMessage,
  PrivateConversationMessageError
} from '@/types/chat'
import type { Axios } from 'axios'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const usePrivateConversationStore = defineStore('private-conversation', () => {
  const messages = ref<PrivateConversationMessage[] | null>(null)
  const errors = ref<PrivateConversationMessageError | null>(null)
  const isLoading = ref<boolean>(false)
  const axios = inject('$axios') as Axios

  const sendMessage = async (form: MessageForm): Promise<void> => {
    isLoading.value = true

    let formShape

    if (form.message_type === 'media') {
      formShape = {
        receiver_id: form.receiver_id,
        content: form.content,
        message_type: form.message_type,
        media: {
          media_type: form.media?.media_type,
          media_file: form.media?.media_file,
          caption: form.media?.caption
        }
      }
    } else if (form.message_type === 'text') {
      formShape = {
        receiver_id: form.receiver_id,
        content: form.content,
        message_type: form.message_type
      }
    }

    try {
      const response = await axios.post('/user/private-conversation/messages/send', formShape)

      if (!response) throw new Error('Response Not Found!')

      console.log(response)

      //   messages.value?.unshift(response.data.data)
    } catch (error: any) {
      errors.value = error.response?.data?.errors
    } finally {
      isLoading.value = false
    }
  }

  return {
    messages,
    errors,
    isLoading,
    sendMessage
  }
})
