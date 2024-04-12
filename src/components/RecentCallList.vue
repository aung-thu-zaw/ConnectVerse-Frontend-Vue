<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import Radio from '@/components/Form/Fields/Radio.vue'
import { ref } from 'vue'

defineProps<{ editMode: boolean; index: number }>()

const radioValue = ref('')
</script>

<template>
  <div class="flex items-center w-full space-x-3">
    <div
      v-if="editMode"
      class="text-sm text-red-600 transform transition-transform duration-300"
      :class="[editMode ? 'translate-x-2' : 'translate-x-0']"
    >
      <Radio :name="'selection-' + index" value="1" v-model="radioValue" />
    </div>

    <div
      class="w-full p-3 rounded-md cursor-pointer transform transition-transform duration-300 hover:bg-gray-100 dark:hover:bg-dark-secondary"
      :class="{ 'translate-x-1': editMode, 'translate-x-0': !editMode }"
    >
      <div class="flex items-center space-x-3">
        <Avatar
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        />
        <div class="flex flex-col items-start w-full">
          <div class="flex items-center justify-between w-full text-light-text dark:text-dark-text">
            <h3 class="text-sm font-bold mb-1">Aung Thu Zaw</h3>
            <div class="text-[0.65rem] space-x-2">
              <span class="font-medium">12-Sep-2024</span>
            </div>
          </div>
          <div class="text-xs font-medium flex items-center justify-between space-x-3 w-full">
            <p class="text-gray-500 dark:text-gray-400 line-clamp-1">
              <span class="text-gray-500 dark:text-neutral-600 mr-2">
                <!-- <i class="fa-solid fa-phone-volume"></i> -->
                <i class="fa-solid fa-video"></i>
              </span>
              Incoming Call (6 min)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
