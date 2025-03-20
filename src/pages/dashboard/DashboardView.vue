<template>
  <q-page id="dashboardPage" class="q-pt-lg">

    <DashboardTopBar />

    <div class="row q-col-gutter-sm justify-between">

      <div class="q-pa-md row items-start q-gutter-md">

        <!-- <q-card class="my-card" flat bordered>

          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="teal" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>

          <q-card-section>
            <lume-sparkline-chart :data="data" :labels="labels" />
          </q-card-section>

        </q-card> -->

        <DashboardTopCards size="small" />

        <DashboardTopBar class="q-mt-xl" />

        <DashboardTopCards size="large" />

      </div>

    </div>

  </q-page>
</template>

<script setup>

import DashboardTopBar from "components/Dashboard/TopBar.vue";
import DashboardTopCards from "components/Dashboard/TopCards.vue";

</script>

<style lang="scss" scoped>

</style>
