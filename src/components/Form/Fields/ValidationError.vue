<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ message: string }>()
</script>

<template>
  <p v-if="message" class="text-xs font-semibold mt-3 w-full text-left text-red-600">
    {{ message }}
  </p>
</template>
