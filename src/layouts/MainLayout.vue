<template>
  <q-layout view="hHh lpR lff">
    <DrawerLeft v-model:drawerOpen="leftDrawerOpen" />
    <MainHeader
      @toggleLeftDrawer="toggleLeftDrawer"
      @toggleRightDrawer="toggleRightDrawer"
      :drawerOpen="leftDrawerOpen"
    />
    <DrawerRight v-model:drawerOpen="rightDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import MainHeader from 'src/components/Navigation/MainHeader.vue'
import DrawerLeft from 'components/Navigation/DrawerLeft.vue'
import DrawerRight from 'components/Navigation/DrawerRight.vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
