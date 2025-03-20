<template>
  <q-layout view="hHh lpR fFf">




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


    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <!-- Left Section: Title Area -->


          <q-toolbar-title>
            WORKSPACE
          </q-toolbar-title>
          <q-btn rounded color="grey">
            <q-icon left color="white" name="add"
              style="background-color: lightgrey; border-radius: 50%; padding: 0.2em;" />
            New Task
          </q-btn>


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

        </div>
        <q-btn dense flat round icon="account_circle" @click="toggleRightDrawer" />
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

const leftDrawerOpen = ref(false)
const leftDrawerMini = ref(false);

const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerMini.value = !leftDrawerMini.value;
  leftDrawerOpen.value = !leftDrawerOpen.value;
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