<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import ToolButton from '@/components/Buttons/ToolButton.vue'
import Label from '@/components/Form/Fields/Label.vue'
import InputField from '@/components/Form/Fields/InputField.vue'
import ValidationError from '@/components/Form/Fields/ValidationError.vue'
import OutlineButton from '@/components/Buttons/OutlineButton.vue'
import SolidButton from '@/components/Buttons/SolidButton.vue'

interface Form {
  first_name: string
  last_name: string
  phone: string
}

const modalOpen = ref(false)
const addContactModalContainer = ref<HTMLElement | null>(null)
const addContactButtonTrigger = ref<{ button: HTMLButtonElement } | null>(null)
const form = reactive<Form>({
  first_name: '',
  last_name: '',
  phone: ''
})

const setModalOpen = (value: boolean): void => {
  modalOpen.value = value
}

const cancelModal = (): void => {
  modalOpen.value = false

  form.first_name = ''
  form.last_name = ''
  form.phone = ''
}

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
</script>

<template>
  <div class="relative">
    <ToolButton border @click="modalOpen = !modalOpen" ref="addContactButtonTrigger">
      <i class="fa-solid fa-user-plus"></i>
    </ToolButton>

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
          Add New Contact
        </h1>

        <form class="space-y-6">
          <div>
            <Label htmlFor="first-name" label="First Name" />

            <InputField
              name="first-name"
              type="text"
              placeholder="Enter First Name ( required )"
              v-model="form.first_name"
            />

            <ValidationError message="" />
          </div>

          <div>
            <Label htmlFor="last-name" label="Last Name" />

            <InputField
              name="last-name"
              type="text"
              placeholder="Enter Last Name ( optional )"
              v-model="form.last_name"
            />

            <ValidationError message="" />
          </div>

          <div>
            <Label htmlFor="phone" label="Phone Number" />

            <InputField
              name="phone"
              type="text"
              placeholder="Enter Last Name ( optional )"
              v-model="form.phone"
            />

            <ValidationError message="" />
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
