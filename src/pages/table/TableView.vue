<template>
  <q-page class="q-pa-lg" style="display: flex; justify-content: center; align-items: center">
    <ClientsTable />
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const ClientsTable = defineAsyncComponent(() => import('components/ClientsTable.vue'))
</script>

<style lang="scss" scoped></style>
