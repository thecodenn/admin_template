<template>
  <q-header>
    <!-- Top Header Row -->
    <q-toolbar style="padding: 10px 25px">
      <q-toolbar-title class="col-auto" style="display: flex; align-items: center; flex-grow: 1">
        <img
          alt="Fake logo"
          src="~assets/fake_logo.svg"
          style="width: 40px; height: 40px; margin-right: 5px"
        />
      </q-toolbar-title>

      <div class="row white-container">
        <q-btn style="background-color: #121212" round flat icon="calendar_today" />
        <q-btn class="contained-button" flat rounded> Estimates </q-btn>
        <q-btn class="contained-button active" flat rounded> Invoices </q-btn>
        <q-btn class="contained-button" flat rounded> Payments </q-btn>
        <q-btn class="contained-button" flat rounded>
          Recurring Invoices <q-icon right name="keyboard_arrow_down" />
        </q-btn>
        <q-btn class="contained-button" flat rounded> Checkouts </q-btn>
        <q-btn round outlined class="contained-button" icon="north_east" />
      </div>

      <q-btn round outline class="header-icon" icon="groups" />
      <q-btn round outline class="header-icon" icon="bar_chart" />
      <q-btn round outline class="header-icon" icon="savings" />

      <div style="display: flex; justify-content: end; flex-grow: 1">
        <q-btn class="icon-button" round icon="notifications_none" />
        <q-btn class="icon-button" round icon="person" @click="$emit('toggleRightDrawer')" />
      </div>
    </q-toolbar>

    <!-- Main Header Row -->
    <q-toolbar class="flex" style="padding: 20px 15px; flex-wrap: wrap">
      <div class="row items-center" style="">
        <q-btn
          class="icon-button"
          round
          :icon="props.drawerOpen ? 'keyboard_arrow_left' : 'keyboard_arrow_right'"
          aria-label="Menu"
          @click="$emit('toggleLeftDrawer')"
        />
        <span>
          <h2 class="title" style="display: flex; align-items: center; margin: 0px 40px">
            C
            <img
              alt="Fake logo"
              src="~assets/fake_logo.svg"
              style="width: 28px; height: 28px; margin-left: 2px; margin-right: 4px"
            />
            MPANY
          </h2></span
        >
        <q-btn class="primary-button" rounded>
          Add Task
          <q-icon right name="add" />
        </q-btn>
      </div>
      <div class="row flex items-center" style="justify-content: center; flex-grow: 1">
        <q-btn-group rounded style="flex-wrap: nowrap">
          <StatsButton :value="34" :up="true" :diff="3" name="Deals" />
          <StatsButton :value="20" :up="false" :diff="3" name="Won" />
          <StatsButton :value="14" :up="true" :diff="2" name="Lost" />
        </q-btn-group>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import StatsButton from 'src/components/StatsButton.vue'

const props = defineProps({
  drawerOpen: {
    type: Boolean,
    required: true,
  },
})
</script>

<style lang="css" scoped>
.white-container {
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 6px;
}

.header-icon {
  color: #f5f5f5d6;
  margin-left: 8px;
}

.q-btn-group .q-btn {
  border-radius: 30px !important;
}
</style>
