<script setup lang="ts">
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import MazPhoneNumberInput, {
  type CountryCode,
  type Result
} from 'maz-ui/components/MazPhoneNumberInput'
import SolidButton from '@/components/Buttons/SolidButton.vue'
import logo from '@/assets/images/logo-color.png'
import { reactive, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
// @ts-ignore
import { CirclesToRhombusesSpinner } from 'epic-spinners'

const store = useAuthStore()

const results = ref<Result | null>(null)

const form = reactive({
  phone_number: '',
  phone_country_code: ''
})

watch(
  () => results.value,
  (newResult) => {
    if (newResult && newResult.countryCode) {
      form.phone_country_code = newResult.countryCode as CountryCode
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
      <p class="font-medium text-sm text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
        Welcome to Our ConnectVerse Communication Platform! Please enter your phone number below and
        we'll send you a 6-digit confirmation code to verify your account. If you're already
        registered, simply enter your phone number to log in. Let's get started!
      </p>

      <form @submit.prevent="store.requestVerificationCode(form)">
        <div class="flex items-center justify-center space-x-5">
          <div>
            <MazPhoneNumberInput
              v-model="form.phone_number"
              show-code-on-list
              @update="results = $event"
              size="md"
              block
              class="text-sm border rounded-md border-gray-300 dark:border-neutral-500"
              color="primary"
              placeholder="Enter phone number"
            />

            <ValidationError :message="store.errors?.phone_number || ''" />
          </div>

          <div>
            <SolidButton class="w-full py-[13.5px]">
              <span v-if="!store.isLoading">
                Submit
                <i class="fa-solid fa-paper-plane ml-3"></i>
              </span>
              <div v-else class="flex items-center space-x-1.5">
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
        </div>
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
