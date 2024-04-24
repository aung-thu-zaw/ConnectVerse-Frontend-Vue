<script setup lang="ts">
import InputField from '@/components/Form/Fields/InputField.vue'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import Label from '@/components/Form/Fields/Label.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
// @ts-ignore
import { CirclesToRhombusesSpinner } from 'epic-spinners'

const store = useAuthStore()

const form = reactive({
  username: '',
  display_name: '',
  phone_number: '',
  phone_country_code: '',
  recovery_email: '',
  avatar: ''
})
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
      <form @submit.prevent="store.createProfile(form)" class="space-y-6 w-[400px]">
        <div>
          <Label htmlFor="username" label="Username" required />

          <InputField
            name="username"
            type="text"
            placeholder="Enter Username"
            v-model="form.username"
          />

          <p class="text-xs font-medium text-gray-400 my-3">
            Username should be lowercase and space for using '-' or '_'
          </p>

          <ValidationError :message="store.errors?.username || ''" />
        </div>

        <div>
          <Label htmlFor="display-name" label="Display Name" required />

          <InputField
            name="display-name"
            type="text"
            placeholder="Enter Display Name"
            v-model="form.display_name"
          />

          <ValidationError :message="store.errors?.display_name || ''" />
        </div>

        <div>
          <Label htmlFor="recovery-email" label="Recovery Email ( Optional )" />

          <InputField
            name="recovery-email"
            type="email"
            placeholder="Enter Your Email"
            v-model="form.recovery_email"
          />

          <ValidationError :message="store.errors?.recovery_email || ''" />
        </div>

        <div>
          <SolidButton class="w-full text-center">
            <span v-if="!store.isLoading" class="w-full">
              Submit
              <i class="fa-solid fa-paper-plane ml-3"></i>
            </span>
            <div v-else class="w-full flex items-center justify-center space-x-1.5">
              <span> Submitting </span>
              <circles-to-rhombuses-spinner
                :animation-duration="1200"
                :circles-num="3"
                :circle-size="5"
                color="#ffffff"
              />
            </div>
          </SolidButton>
        </div>
      </form>
    </div>
  </div>
</template>
