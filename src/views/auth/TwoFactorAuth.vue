<script setup lang="ts">
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'
import logo from '@/assets/images/logo-color.png'
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
// @ts-ignore
import { CirclesToRhombusesSpinner } from 'epic-spinners'

const store = useAuthStore()

const form = reactive({
  phone_number: '',
  phone_country_code: '',
  additional_password: ''
})
</script>

<template>
  <div
    class="h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
  >
    <div class="container mx-auto h-full flex flex-col items-center justify-center space-y-10">
      <img :src="logo" alt="Logo" class="h-28" />
      <p class="font-medium text-sm text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
        Your account is protected with an additional password.
      </p>

      <form @submit.prevent="store.loginWithAdditionalPassword(form)">
        <div class="flex items-center justify-center space-x-5">
          <div class="w-[300px]">
            <InputField
              name="additional-password"
              type="password"
              placeholder="Enter Your Password"
              v-model="form.additional_password"
            />

            <ValidationError :message="store.errors?.additional_password || ''" />
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
