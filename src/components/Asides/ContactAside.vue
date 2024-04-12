<script lang="ts" setup>
import ContactListSearchForm from '@/components/Form/SearchForms/ContactListSearchForm.vue'
import ContactList from '@/components/ContactList.vue'
import AddContactModal from '@/components/Modals/AddContactModal.vue'
</script>

<template>
  <div>
    <div class="flex items-center space-x-3.5 p-3">
      <ContactListSearchForm />

      <AddContactModal />
    </div>

    <div class="p-3 h-[690px] overflow-y-scroll hide-scrollbar">
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
      <ContactList />
    </div>
  </div>
</template>
