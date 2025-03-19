<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="account_circle" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      <q-list>
        <q-item-label
          header
        >
          User Profile
        </q-item-label>

        Maybe some user information or extra componenets that allow filtering
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const linksList = [
  {
    title: 'Table',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/table'
  },
  {
    title: 'Form',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/form'
  },
  {
    title: 'Dashboard',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/dashboard'
  }
]


</script>
