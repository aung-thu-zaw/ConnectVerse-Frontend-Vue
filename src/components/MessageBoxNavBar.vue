<script setup lang="ts">
import ChatMenuDropdown from '@/components/Dropdowns/ChatMenuDropdown.vue'
</script>

<template>
  <div
    class="relative border-b border-light-secondary dark:border-dark-secondary p-3 px-8 flex items-center justify-between"
  >
    <!-- For User Chat -->
    <div class="flex items-center space-x-3">
      <img
        class="inline-block size-[46px] rounded-full"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div class="flex flex-col items-start">
        <h3 class="text-md font-bold text-light-text dark:text-dark-text mb-1">Aung Thu Zaw</h3>
        <div
          class="text-xs font-medium flex items-center space-x-3 text-gray-600 dark:text-gray-400"
        >
          <p>
            <i class="fa-solid fa-clock mr-1.5"></i>
            Last sense recently
          </p>
          <p>
            <i class="fa-solid fa-circle-check mr-1.5"></i>
            Online
          </p>
          <p>
            <i class="fa-solid fa-times-circle mr-1.5"></i>
            Offline
          </p>
        </div>
      </div>
    </div>

    <!-- For Chat Group -->
    <!-- <div class="flex items-center space-x-3">
      <img
        class="inline-block size-[46px] rounded-full"
        src="https://futureofmarketing.tintup.com/wp-content/uploads/2022/03/Avatars_Meta_TINT_Future-of-Marketing-1-e1646964841404.jpg"
        alt="Image Description"
      />
      <div class="flex flex-col items-start">
        <h3 class="text-md font-bold text-light-text dark:text-dark-text mb-1">
          Conversation Group Chat
        </h3>
        <div
          class="text-xs font-medium flex items-center space-x-3 text-gray-600 dark:text-gray-400"
        >
          <p>
            <i class="fa-solid fa-users mr-1.5"></i>
            122 Members
          </p>
          <p>
            <i class="fa-solid fa-user-circle mr-1.5"></i>
            122 Online
          </p>
        </div>
      </div>
    </div> -->

    <!-- For Channel -->
    <!-- <div class="flex items-center space-x-3">
      <img
        class="inline-block size-[46px] rounded-full"
        src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Marvel_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1694102537"
        alt="Image Description"
      />
      <div class="flex flex-col items-start">
        <h3 class="text-md font-bold text-light-text dark:text-dark-text mb-1">
          Awesome Movie Channel
        </h3>
        <div
          class="text-xs font-medium flex items-center space-x-3 text-gray-600 dark:text-gray-400"
        >
          <p>
            <i class="fa-solid fa-users mr-1.5"></i>
            490 Subscribers
          </p>
        </div>
      </div>
    </div> -->

    <div class="flex items-center space-x-3 text-light-text dark:text-dark-text">
      <button
        type="button"
        class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-secondary"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>

      <button
        type="button"
        class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-secondary"
      >
        <i class="fa-solid fa-video"></i>
      </button>

      <!-- <VideoChatPanel /> -->

      <button
        type="button"
        class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-secondary"
      >
        <i class="fa-solid fa-phone"></i>
      </button>

      <ChatMenuDropdown />
    </div>
  </div>
</template>
