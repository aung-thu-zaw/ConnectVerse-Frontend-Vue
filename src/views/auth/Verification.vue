<script setup lang="ts">
import logo from '@/assets/images/logo-color.png'
import InputField from '@/components/Form/Fields/InputField.vue'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import { reactive, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
// @ts-ignore
import { HalfCircleSpinner } from 'epic-spinners'

const store = useAuthStore()

const form = reactive({
  verification_code: ''
})

watch(
  () => form.verification_code,
  (newValue) => {
    if (form.verification_code.length === 6) {
      store.verifyVerificationCode(newValue)
    } else if (form.verification_code.length < 6 && store.errors?.verification_code) {
      store.$patch({ errors: null })
    }
  }
)
</script>

<template>
  <div
    class="h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <div class="container mx-auto h-full flex flex-col items-center justify-center space-y-10">
      <img :src="logo" alt="Logo" class="h-28" />

      <div class="flex items-center space-x-3">
        <p
          class="font-semibold text-lg text-light-accent dark:text-dark-accent text-center max-w-[700px]"
        >
          <i class="fa-solid fa-phone mr-3"></i>
          09 2622 55839
        </p>

        <button
          type="button"
          class="w-8 h-8 rounded-full text-xs bg-light-secondary dark:bg-dark-secondary border shadow dark:shadow-gray-500"
        >
          <i class="fa-solid fa-rotate"></i>
        </button>
      </div>

      <p class="font-medium text-sm text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
        We've sent a 6-digit verification code to the phone number you provided for login. Please
        check your messages and enter the code below to proceed. This extra layer of security helps
        keep your account safe.
      </p>

      <div class="flex items-center space-x-3">
        <div class="min-w-[260px]">
          <InputField
            name="verification-code"
            type="number"
            placeholder="Enter 6-Digit Verification Code"
            v-model="form.verification_code"
            maxLength="6"
            autocomplete="off"
          />

          <ValidationError :message="store.errors?.verification_code || ''" />
        </div>
      </div>
      <div v-if="form.verification_code.length === 6 && !store.errors?.verification_code">
        <half-circle-spinner :animation-duration="1000" :size="30" color="#4CAF50" />
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
