<script setup lang="ts">
import MessageSearchForm from '@/components/Form/SearchForms/MessageSearchForm.vue'
import MessageSearchResultList from '@/components/MessageSearchResultList.vue'

// Your Code
</script>

<template>
  <div class="p-3 h-full border-l border-light-secondary dark:border-dark-secondary">
    <MessageSearchForm />

    <div class="py-5">
      <p class="text-xs font-semibold text-light-text dark:text-dark-text text-right mb-5">
        ( 20 ) Results Found
      </p>
      <div>
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
        <MessageSearchResultList />
      </div>

      <!-- <p class="text-center font-bold text-sm mt-10">
        <i class="fa-solid fa-message mr-2"></i>
        Search For Messages
      </p> -->

      <!-- <p class="text-center font-bold text-sm">
        <i class="fa-solid fa-cancel mr-2"></i>
        No Messages Found!
      </p> -->
    </div>
  </div>
</template>
