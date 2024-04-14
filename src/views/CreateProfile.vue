<script setup lang="ts">
import InputField from '@/components/Form/Fields/InputField.vue'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import Label from '@/components/Form/Fields/Label.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'
import { ref } from 'vue'

const phone = ref('')
</script>

<template>
  <div
    class="h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <div
      class="container mx-auto w-full h-full flex flex-col items-center justify-center space-y-10"
    >
      <div class="relative">
        <div class="size-40 overflow-hidden rounded-full">
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
            alt="Logo"
            class="relative w-full h-full object-cover"
          />
          <!-- <button class="absolute bottom-5 right-0 z-50 bg-black bg-opacity-40">
            <i class="fa-solid fa-camera-rotate"></i>
          </button> -->
        </div>

        <button
          class="absolute bottom-0 right-0 w-6 h-6 text-[10px] rounded-full bg-gray-300 text-light-text dark:text-dark-text dark:bg-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all"
        >
          <i class="fa-solid fa-camera-rotate"></i>
        </button>
      </div>

      <div class="space-y-3">
        <h1 class="font-medium text-xl text-light-text dark:text-dark-text text-center">
          Profile Info
        </h1>
        <p class="font-medium text-sm text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
          Enter your name and add profile photo.
        </p>
      </div>
      <form @submit.prevent="" class="space-y-6 w-[400px]">
        <div>
          <Label htmlFor="username" label="Username" required />

          <InputField name="username" type="text" placeholder="Enter Username" v-model="phone" />

          <p class="text-xs font-medium text-gray-400 my-3">
            Username should be lowercase and space for using '-' or '_'
          </p>

          <ValidationError message="" />
        </div>

        <div>
          <Label htmlFor="display-name" label="Display Name" required />

          <InputField
            name="display-name"
            type="text"
            placeholder="Enter Display Name"
            v-model="phone"
          />

          <ValidationError message="" />
        </div>

        <div>
          <Label htmlFor="recovery-email" label="Recovery Email ( Optional )" />

          <InputField
            name="recovery-email"
            type="email"
            placeholder="Enter Your Email"
            v-model="phone"
          />

          <ValidationError message="" />
        </div>

        <div>
          <SolidButton class="w-full">
            Submit
            <i class="fa-solid fa-paper-plane ml-3"></i>
          </SolidButton>
        </div>
      </form>
    </div>
  </div>
</template>
