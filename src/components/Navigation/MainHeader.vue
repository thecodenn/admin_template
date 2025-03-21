<template>
  <q-header>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggleLeftDrawer')" />

      <q-toolbar-title>WORKSPACE</q-toolbar-title>

      <q-btn rounded color="grey">
        <q-icon
          left
          color="white"
          name="add"
          style="background-color: lightgrey; border-radius: 50%; padding: 0.2em"
        />
        New Task
      </q-btn>

      <div class="row items-center q-gutter-lg" style="flex: 1; justify-content: space-evenly">
        <StatsButton />
        <StatsButton />
        <StatsButton />
      </div>

      <q-btn dense flat round icon="account_circle" @click="$emit('toggleRightDrawer')" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import StatsButton from 'src/components/StatsButton.vue'
</script>
