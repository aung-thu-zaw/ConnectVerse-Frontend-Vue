<script lang="ts" setup>
import ContactListSearchForm from '@/components/Form/SearchForms/ContactListSearchForm.vue'
import ContactList from '@/components/ContactList.vue'
import ContactModal from '@/components/Modals/ContactModal.vue'
import { useContactStore } from '@/stores/contact'
import { onMounted } from 'vue'

const store = useContactStore()

onMounted(() => store.getAllContacts())
</script>

<template>
  <div>
    <div class="flex items-center space-x-3.5 p-3">
      <ContactListSearchForm />

      <ContactModal mode="create" />
    </div>

    <div class="p-3 h-[655px] overflow-y-scroll hide-scrollbar">
      <div v-if="store.contacts?.length">
        <template v-for="contact in store.contacts" :key="contact.id">
          <ContactList v-if="contact" :contact="contact" />
        </template>
      </div>
      <div v-else class="h-full grid place-content-center">
        <div class="text-center font-bold text-sm text-light-text dark:text-dark-text space-x-1.5">
          <i class="fa-solid fa-contact-book"></i>
          <span> There are no contacts. </span>
        </div>
      </div>
    </div>
  </div>
</template>
