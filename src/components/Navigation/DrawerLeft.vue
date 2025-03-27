<template>
  <q-drawer
    :model-value="drawerOpen"
    side="left"
    :width="78"
    behavior="desktop"
    @update:model-value="$emit('update:drawerOpen', $event)"
  >
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
  { title: 'Home', icon: 'home', link: '/' },
  { title: 'Table', icon: 'school', link: '/table' },
  { title: 'Form', icon: 'code', link: '/form' },
  { title: 'Dashboard', icon: 'chat', link: '/dashboard' },
]
</script>

<style>
.q-drawer {
  position: fixed;
  overflow: hidden;
  overflow-y: auto;
  background-color: #0c0c0c;
}
.q-list {
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  gap: 10px;
}
</style>
