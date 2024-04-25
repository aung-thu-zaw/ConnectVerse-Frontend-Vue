<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import ToolButton from '@/components/Buttons/ToolButton.vue'
import Label from '@/components/Form/Fields/Label.vue'
import InputField from '@/components/Form/Fields/InputField.vue'
import Checkbox from '@/components/Form/Fields/Checkbox.vue'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import OutlineButton from '@/components/Buttons/OutlineButton.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'
import type { CountryCode, Result } from 'maz-ui/components/MazPhoneNumberInput'
import { useContactStore } from '@/stores/contact'
import type { Contact } from '@/types/contact'

type contactModalMode = 'create' | 'edit'

const props = defineProps<{ mode: contactModalMode; contact?: Contact }>()

const modalOpen = ref(false)
const addContactModalContainer = ref<HTMLElement | null>(null)
const addContactButtonTrigger = ref<{ button: HTMLButtonElement } | null>(null)
const results = ref<Result | null>(null)
const createForm = ref<HTMLFormElement | null>(null)
const form = reactive({
  name: '',
  phone_number: '',
  phone_country_code: '',
  private_my_phone: false
})
const store = useContactStore()

const setModalOpen = (value: boolean): void => {
  modalOpen.value = value
}

const cancelModal = (): void => {
  form.name = ''
  form.phone_number = ''
  form.phone_country_code = ''
  form.private_my_phone = false

  if (createForm.value) createForm.value.reset()

  if (store.errors) store.$patch({ errors: null })

  modalOpen.value = false
}

onMounted(() => {
  if (props.mode === 'edit' && props.contact) {
    form.name = props.contact.name || ''
    form.phone_number = props.contact.phone_number
    form.phone_country_code = props.contact.phone_country_code
    form.private_my_phone = props.contact.private_my_phone
  }
})

const handleClickOutside = (event: MouseEvent): void => {
  if (
    addContactModalContainer.value &&
    addContactButtonTrigger.value &&
    addContactButtonTrigger.value.button &&
    !addContactModalContainer.value.contains(event.target as Node) &&
    event.target !== addContactButtonTrigger.value.button
  ) {
    setModalOpen(false)
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch(
  () => results.value,
  (newResult) => {
    if (newResult && newResult.countryCode) {
      form.phone_country_code = newResult.countryCode as CountryCode
    }
  }
)

const handleContact = async () => {
  let response
  if (props.mode === 'create') {
    response = await store.createContact(form)
  } else if (props.mode === 'edit' && props.contact) {
    response = await store.editContact(props.contact.id, form)
  }

  if (response && response.data.status === 'success') {
    cancelModal()
  }
}
</script>

<template>
  <div class="relative">
    <div v-if="mode === 'create'">
      <ToolButton border @click="modalOpen = !modalOpen" ref="addContactButtonTrigger">
        <i class="fa-solid fa-user-plus"></i>
      </ToolButton>
    </div>

    <div v-else-if="mode === 'edit'">
      <button
        ref="addContactButtonTrigger"
        type="button"
        class="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
        @click="modalOpen = !modalOpen"
      >
        <i className="fa-solid fa-edit mr-3"></i>
        Edit
      </button>
    </div>

    <div
      class="fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#000] bg-opacity-50 px-4 py-5 transition-opacity duration-300"
      :class="{
        'block opacity-100': modalOpen,
        'hidden opacity-0 pointer-events-none': !modalOpen
      }"
    >
      <div
        ref="addContactModalContainer"
        class="w-full max-w-[570px] rounded-md px-8 py-12 text-center bg-light-background dark:bg-dark-background md:px-[70px] md:py-[60px] transition-transform duration-300 transform scale-0 sm:scale-100"
      >
        <h1 class="mb-10 font-bold text-xl text-light-text dark:text-dark-text">
          <i class="fa-solid fa-contact-book mr-3"></i>
          {{ mode === 'create' ? 'Add New Contact' : 'Edit Contact' }}
        </h1>

        <form ref="createForm" @submit.prevent="handleContact" class="space-y-6">
          <div>
            <Label htmlFor="display-name" label="Display Name" />

            <InputField
              name="display-name"
              type="text"
              placeholder="Enter Contact Full Name ( optional )"
              v-model="form.name"
            />

            <ValidationError :message="store.errors?.name || ''" />
          </div>

          <div>
            <Label htmlFor="phone" label="Phone Number" required />

            <MazPhoneNumberInput
              v-model="form.phone_number"
              show-code-on-list
              @update="results = $event"
              size="md"
              block
              class="text-sm border rounded-md border-gray-300 dark:border-neutral-500"
              color="primary"
              placeholder="Enter phone number"
              :disabled="mode === 'edit'"
            />

            <ValidationError :message="store.errors?.phone_number || ''" />
          </div>

          <div class="flex items-start">
            <Checkbox v-model:checked="form.private_my_phone" label="Share my phone number" />
          </div>

          <div class="flex items-center justify-end space-x-5">
            <OutlineButton type="button" @click="cancelModal"> Cancel </OutlineButton>

            <SolidButton type="submit"> Save Contact </SolidButton>
          </div>
        </form>
      </div>
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
