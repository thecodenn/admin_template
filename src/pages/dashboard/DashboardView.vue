<template>
  <q-page class="q-pa-xl">
    <div class="row q-col-gutter-lg justify-between">
      <DashboardTopBar />
      <DashboardTopCards type="top" style="margin-bottom: 50px" />
      <DashboardTopBar />
      <DashboardTopCards type="graph" />
    </div>
  </q-page>
</template>

<script setup>
import DashboardTopBar from 'components/Dashboard/TopBar.vue'
import DashboardTopCards from 'components/Dashboard/TopCards.vue'
</script>

<style lang="scss" scoped></style>
