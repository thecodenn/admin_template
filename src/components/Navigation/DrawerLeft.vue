<template>
  <q-drawer
    :model-value="drawerOpen"
    side="left"
    overlay
    bordered
    @update:model-value="$emit('update:drawerOpen', $event)"
  >
    <div class="drawer-header">
      <q-item-label header>Essential Links</q-item-label>
      <q-btn
        flat
        dense
        round
        icon="chevron_left"
        aria-label="Collapse"
        @click="$emit('update:drawerOpen', false)"
      />
    </div>

    <q-list>
      <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'

defineProps({
  drawerOpen: Boolean,
})

defineEmits(['update:drawerOpen'])

const linksList = [
  { title: 'Home', caption: 'whatever.dev', icon: 'home', link: '/' },
  { title: 'Table', caption: 'quasar.dev', icon: 'school', link: '/table' },
  { title: 'Form', caption: 'github.com/quasarframework', icon: 'code', link: '/form' },
  { title: 'Dashboard', caption: 'chat.quasar.dev', icon: 'chat', link: '/dashboard' },
]
</script>

<style scoped>
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
