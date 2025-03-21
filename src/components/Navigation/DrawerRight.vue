<template>
  <q-drawer
    :model-value="drawerOpen"
    side="right"
    overlay
    bordered
    @update:model-value="$emit('update:drawerOpen', $event)"
  >
    <div class="drawer-header">
      <q-item-label header>User Profile</q-item-label>
      <q-btn
        flat
        dense
        round
        icon="chevron_right"
        aria-label="Collapse"
        @click="$emit('update:drawerOpen', false)"
      />
    </div>

    <q-list>
      <q-item>Maybe some user information or filters here</q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
defineProps({
  drawerOpen: Boolean,
})

defineEmits(['update:drawerOpen'])
</script>

<style scoped>
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
