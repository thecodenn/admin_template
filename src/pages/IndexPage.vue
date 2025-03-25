<template>
  <q-page class="flex column q-pa-lg">
    <div class="header row items-center">
      <div class="col flex items-center">
        <span><h2 class="title">WORKSPACE</h2></span>
        <div class="row justify-center" style="flex-grow: 1">
          <q-btn-group rounded style="flex-wrap: no-wrap">
            <StatsButton :value="34" :up="true" :diff="3" name="Deals" />
            <StatsButton :value="20" :up="false" :diff="3" name="Won" />
            <StatsButton :value="14" :up="true" :diff="2" name="Lost" />
          </q-btn-group>
        </div>
      </div>
      <div class="col-auto">
        <q-btn class="primary-button" rounded>
          Add Task
          <q-icon right name="add" />
        </q-btn>
      </div>
    </div>

    <span><h3 class="title">MORE STUFF COMES HERE</h3></span>

    <div class="flex flex-center">
      <img
        alt="Fake logo"
        src="~assets/fake_logo.svg"
        style="width: 200px; height: 200px; margin-top: 50px"
      />
    </div>
  </q-page>
</template>

<script setup>
import StatsButton from 'src/components/StatsButton.vue'
</script>

<style lang="scss" scoped>
.q-btn-group .q-btn {
  border-radius: 30px !important;
}
.header {
  border-bottom: 2px solid rgba(204, 204, 204, 0.3);
  padding-bottom: 10px;
}
</style>
