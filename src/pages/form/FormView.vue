<template>

 <q-page id="clientEditPage" class="q-pt-lg">

  <div class="row q-col-gutter-sm justify-between">
      <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 flex">

        <ClientForm />

      </div>

    </div>

 </q-page>

</template>

<script setup>
import ClientForm from 'components/ClientForm.vue'

</script>

<style lang="scss">
#clientEditPage {
    .form-style {
        margin: 0 auto;
        height: calc(100vh - 180px);
        max-width: 500px;
    }
}
</style>
