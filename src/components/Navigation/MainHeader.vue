<template>
  <q-header>
    <q-toolbar class="q-pa-lg">
      <q-btn
        class="icon-button"
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
      />

      <q-toolbar-title class="col-auto" style="display: flex; align-items: center; flex-grow: 1">
        <img
          alt="Fake logo"
          src="~assets/fake_logo.svg"
          style="width: 34px; height: 34px; margin-right: 10px"
        />
        Company
      </q-toolbar-title>

      <div class="row white-container">
        <q-btn style="background-color: #121212" round flat icon="calendar_today" />
        <q-btn class="contained-button" flat rounded> Estimates </q-btn>
        <q-btn class="contained-button active" flat rounded> Invoices </q-btn>
        <q-btn class="contained-button" flat rounded> Payments </q-btn>
        <q-btn class="contained-button" flat rounded>
          Recurring Invoices <q-icon right name="keyboard_arrow_down"
        /></q-btn>
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
  </q-header>
</template>

<script setup>
//
</script>

<style lang="css" scoped>
.white-container {
  background-color: #e7f5d5;
  border-radius: 50px;
  padding: 6px;
}
.header-icon {
  color: #bcc2b4;
  margin: 8px;
}
</style>
