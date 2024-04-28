<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const props = defineProps<{ type: 'photo' | 'video' | 'file'; icon?: string; label: string }>()

const emit = defineEmits(['updated-files'])

const fileAcceptMap = {
  photo: 'image/jpeg,image/jpg,image/png,image/gif',
  video: 'video/mp4,video/avi,video/mov',
  file: '.pdf,.doc,.docx,.txt,.zip'
}

const accept = fileAcceptMap[props.type]

const { open, onChange } = useFileDialog({ accept: accept, directory: false })

const handleClick = () => open()

onChange((newFiles) => emit('updated-files', newFiles))
</script>

<template>
  <div>
    <button
      @click="handleClick"
      type="button"
      class="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
    >
      <span v-if="icon" class="mr-3">
        <i :class="icon"></i>
      </span>
      {{ label }}
    </button>
  </div>
</template>
