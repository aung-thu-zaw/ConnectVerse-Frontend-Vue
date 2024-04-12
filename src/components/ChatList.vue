<script setup lang="ts">
import CountBadge from '@/components/Badges/CountBadge.vue'
import Avatar from '@/components/Avatar.vue'
</script>

<template>
  <div class="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary">
    <div class="flex items-center space-x-3">
      <Avatar
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      />

      <div class="flex flex-col items-start w-full">
        <div class="flex items-center justify-between w-full text-light-text dark:text-dark-text">
          <h3 class="text-sm font-bold mb-1">Aung Thu Zaw</h3>
          <div class="text-[0.65rem] space-x-2">
            <span class="font-medium">Sun</span>
            <span class="text-light-accent dark:text-dark-accent">
              <i class="fa-solid fa-check-double"></i>
            </span>
          </div>
        </div>

        <div class="text-xs font-medium flex items-center justify-between space-x-3 w-full">
          <p class="text-gray-500 dark:text-gray-400 line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum non accusantium
            repellat sint aperiam illum id nihil possimus autem vel dolor quod aliquam tempore,
            perspiciatis ab ipsam. Eos, accusantium?
          </p>

          <CountBadge :count="18" />
        </div>
      </div>
    </div>
  </div>
</template>
