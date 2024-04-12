<script lang="ts" setup>
import RecentCallDeletionModal from '@/components/Modals/RecentCallDeletionModal.vue'
import RecentCallList from '@/components/RecentCallList.vue'
import { ref } from 'vue'

const editMode = ref<boolean>(false)
</script>

<template>
  <div>
    <div
      class="flex items-center justify-start space-x-3.5 px-3 py-5 border-b border-b-gray-200 dark:border-b-dark-secondary"
    >
      <h1 class="w-full font-bold text-left pl-5 text-sm text-light-text dark:text-dark-text">
        <i class="fa-solid fa-file-lines mr-1.5"></i>
        Recent Calls ( 100 )
      </h1>

      <div v-if="editMode" class="min-w-14">
        <RecentCallDeletionModal />
      </div>

      <button
        @click="editMode = !editMode"
        type="button"
        class="text-xs font-bold min-w-14 text-light-text dark:text-dark-text"
      >
        <span v-if="!editMode">
          <i class="fa-solid fa-edit mr-1.5"></i>
          Edit
        </span>
        <span v-else>
          <i class="fa-solid fa-circle-check mr-1.5"></i>
          Done
        </span>
      </button>
    </div>

    <div class="p-3 h-[700px] overflow-y-scroll hide-scrollbar">
      <RecentCallList :edit-mode="editMode" v-for="index in 13" :key="index" :index="index" />
    </div>
  </div>
</template>
