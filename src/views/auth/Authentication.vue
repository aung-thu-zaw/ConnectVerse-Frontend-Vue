<script setup lang="ts">
import logo from '@/assets/images/logo-color.png'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import Label from '@/components/Form/Fields/Label.vue'
import InputField from '@/components/Form/Fields/InputField.vue'
import { ref } from 'vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'

const phoneNumber = ref()
const results = ref()
</script>

<template>
  <div
    class="h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <div class="container mx-auto h-full flex flex-col items-center justify-center space-y-10">
      <img :src="logo" alt="Logo" class="h-28" />
      <p class="font-medium text-sm text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
        Welcome to Our ConnectVerse Communication Platform! Please enter your phone number below and
        we'll send you a 6-digit confirmation code to verify your account. If you're already
        registered, simply enter your phone number to log in. Let's get started!
      </p>

      <form @submit.prevent="" class="space-y-6">
        <div>
          <Label htmlFor="display-name" label="Display Name" required />

          <InputField
            name="display-name"
            type="text"
            placeholder="Enter Display Name"
            v-model="phoneNumber"
          />

          <ValidationError message="" />
        </div>

        <div>
          <Label htmlFor="phone-number" label="Phone Number" required />

          <MazPhoneNumberInput
            v-model="phoneNumber"
            show-code-on-list
            @update="results = $event"
            size="md"
            block
            class="text-sm border rounded-md border-gray-300 dark:border-neutral-500"
            color="primary"
            placeholder="Enter phone number"
          />

          <ValidationError message="" />
        </div>

        <div class="">
          <SolidButton class="w-full">
            Submit
            <i class="fa-solid fa-paper-plane ml-3"></i>
          </SolidButton>
        </div>

        <ValidationError message="" />
      </form>
    </div>
  </div>
</template>

<style>
:root {
  --maz-border-radius: 0.375rem;

  /** BG LIGHT COLOR **/
  --maz-bg-color-light: #eaeaea;
  --maz-bg-color-light-light: #eaeaea;
  --maz-bg-color-light-lighter: #eaeaea;

  /** BG DARK COLOR **/
  --maz-bg-color-dark: #333333;
  --maz-bg-color-dark-light: #333333;
  --maz-bg-color-dark-lighter: #333333;

  /** TEXT COLOR LIGHT **/
  --maz-color-text-light: #ffffff;

  /** TEXT COLOR DARK **/
  --maz-color-text-dark: #333333;

  --maz-color-primary: #4caf50;

  --maz-color-white: #ffffff;

  --maz-color-black: #333333;

  --maz-border-width: 0.063rem;
}
</style>
