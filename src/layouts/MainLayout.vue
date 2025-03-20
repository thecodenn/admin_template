<template>
  <q-layout view="lHh LpR fFf">


    <q-drawer v-model="leftDrawerOpen" side="left" bordered :mini="leftDrawerMini" mini-width="60">
      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" @toggled="toggleLeftDrawer" />
      </q-list>
    </q-drawer>


    <q-header class="bg-white">
      <q-toolbar class="row items-center">
        <!-- Left Section: Title Area -->
        <div class="row items-center q-gutter-md">

          <q-toolbar-title style="flex: 0 0 auto; color: grey; font-size: 2em;">
            WORKSPACE
          </q-toolbar-title>
          <q-btn rounded color="grey">
            <q-icon left color="white" name="add"
              style="background-color: lightgrey; border-radius: 50%; padding: 0.2em;" />
            New Task
          </q-btn>
        </div>

        <!-- Right Section: Deals Containers -->
        <div class="row items-center q-gutter-lg" style="flex: 1; justify-content: space-evenly;">
          <div class="container row items-center">
            <div class="left">
              <span class="number">34</span>
            </div>
            <div class="right q-ml-sm">
              <div class="top">
                <q-btn icon="arrow_upward" color="lime" rounded size="10px" style="padding: 0 5px;">3</q-btn>
              </div>
              <div class="bottom">
                <span class="muted-text">Deals</span>
              </div>
            </div>
          </div>
          <div class="container row items-center">
            <div class="left">
              <span class="number">34</span>
            </div>
            <div class="right q-ml-sm">
              <div class="top">
                <q-btn icon="arrow_upward" color="lime" rounded size="10px" style="padding: 0 5px;">3</q-btn>
              </div>
              <div class="bottom">
                <span class="muted-text">Deals</span>
              </div>
            </div>
          </div>
          <div class="container row items-center">
            <div class="left">
              <span class="number">34</span>
            </div>
            <div class="right q-ml-sm">
              <div class="top">
                <q-btn icon="arrow_upward" color="lime" rounded size="10px" style="padding: 0 5px;">3</q-btn>
              </div>
              <div class="bottom">
                <span class="muted-text">Deals</span>
              </div>
            </div>
          </div>
          <q-btn dense flat round icon="account_circle" @click="toggleRightDrawer" />
        </div>
      </q-toolbar>
    </q-header>


    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      <q-list>
        <q-item-label header>
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

const leftDrawerOpen = ref(true)
const leftDrawerMini = ref(true);

const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerMini.value = !leftDrawerMini.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const linksList = [

  {
    title: '',
    caption: '',
    icon: 'arrow_back',
    link: '',
    openClose: true,
  },
  {
    title: 'Table',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/table',
    openClose: false,
  },
  {
    title: 'Form',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/form',
    openClose: false,
  },
  {
    title: 'Dashboard',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/dashboard',
    openClose: false,
  },
]


</script>

<style lang="scss" scoped>
.full-height-drawer {
  height: 100%;
  /* Ensures drawer spans full height */
}

.main-content {
  transition: margin-left 0.3s, width 0.3s;
  /* Smooth transition for mini/full toggle */
}

.container {
  display: flex;
  align-items: center;
  border: 0px solid grey;
}

.left {
  flex: 0 0 auto;
  font-size: 3em;
  color: grey;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.top {
  display: flex;
  justify-content: flex-end;
}

.bottom {
  text-align: center;
  color: #777;
  font-size: 1em;
}
</style>