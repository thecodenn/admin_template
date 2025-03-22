<template>
  <q-header>
    <q-toolbar class="glossy q-pa-lg">
      <q-btn round icon="menu" aria-label="Menu" @click="$emit('toggleLeftDrawer')" />

      <q-toolbar-title class="title">COMPANY NAME</q-toolbar-title>

      <q-btn round icon="person" @click="$emit('toggleRightDrawer')" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
//
</script>
