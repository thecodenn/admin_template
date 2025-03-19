<template>
  <q-page id="clientsView" class="q-pt-lg">
    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
      <ClientsTable />
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const ClientsTable = defineAsyncComponent(() => import('components/ClientsTable.vue'))
</script>

<style lang="scss" scoped>
#clientsView {
  .form-style {
    margin: 0 auto;
    height: calc(100vh - 180px);
    max-width: 500px;
  }

  .no-account {
    font-size: 17px;
  }
}
</style>
