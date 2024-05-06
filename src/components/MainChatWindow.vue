<script setup lang="ts">
import ReceiverFileAttachmentBubble from '@/components/ChatBubbles/ReceiverFileAttachmentBubble.vue'
import ReceiverImageAttachmentBubble from '@/components/ChatBubbles/ReceiverImageAttachmentBubble.vue'
import ReceiverMessageBubble from '@/components/ChatBubbles/ReceiverMessageBubble.vue'
import SenderFileAttachmentBubble from '@/components/ChatBubbles/SenderFileAttachmentBubble.vue'
import SenderImageAttachmentBubble from '@/components/ChatBubbles/SenderImageAttachmentBubble.vue'
import SenderMessageBubble from '@/components/ChatBubbles/SenderMessageBubble.vue'
import MessageBoxNavBar from '@/components/MessageBoxNavBar.vue'
import MessageInputForm from '@/components/Form/MessageInputForm.vue'

// Your Code
</script>

<template>
  <main
    class="hidden w-full md:block h-full"
    :style="{
      'background-image':
        'url(https://img.freepik.com/premium-vector/chat-time-chalk-drawing-design-doodle-vector-clip-art-set-elements-seamless-pattern-icons-speech-bubble-message-emoji-letter-gadget-white-monochrome-design-isolated-dark-background_153823-116.jpg)',
      'background-position': 'center',
      'background-color': 'rgba(0, 0, 0, 0.8)',
      'background-blend-mode': 'multiply'
    }"
  >
    <div>
      <div class="w-full">
        <MessageBoxNavBar />
      </div>

      <div class="px-10 h-full">
        <div
          class="flex flex-col-reverse py-3 space-y-5 w-full h-[600px] overflow-y-scroll hide-scrollbar"
        >
          <ReceiverMessageBubble />

          <SenderMessageBubble />

          <ReceiverFileAttachmentBubble />

          <p class="text-xs text-center font-bold text-light-text dark:text-dark-text w-full">
            September 22, 2023
          </p>

          <SenderFileAttachmentBubble />

          <ReceiverImageAttachmentBubble />

          <SenderMessageBubble />

          <SenderImageAttachmentBubble />

          <p class="text-xs text-center font-bold text-light-text dark:text-dark-text w-full">
            September 23, 2023
          </p>

          <ReceiverFileAttachmentBubble />

          <ReceiverImageAttachmentBubble />

          <ReceiverMessageBubble />
        </div>

        <div class="py-5">
          <MessageInputForm :receiver_id="1" />
        </div>
      </div>
    </div>
  </main>
</template>
