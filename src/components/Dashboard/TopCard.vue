<template>
  <q-card flat class="top-card">
    <img class="card-mask" src="~assets/subtract-card.svg" alt="Fake Mask" />
    <q-btn round outline class="corner-icon" icon="north_east" />
    <q-avatar size="50px" style="border-radius: 50px">
      <img src="https://softsmart.co.za/02.jpg" alt="Profile Photo" />
    </q-avatar>
    <q-list class="column">
      <span class="text-h6">Italian Cafe'</span>
      <span style="flex-shrink: 1; white-space: normal; display: block; width: 100%">
        Small plates, salads & sandwiches in an intimate setting.</span
      >
      <div class="row no-wrap items-center">
        <span class="text-grey row no-wrap items-center">
          <q-icon left name="place" />
          250 ft
        </span>
        <span class="text-grey">・Italy Str</span>
      </div>
      <div class="row items-center">
        <q-rating v-model="stars" :max="5" size="32px" color="light-green" />
        <q-space />
        <q-btn rounded class="primary-button" style="padding: 0px 10px">order</q-btn>
      </div>
    </q-list>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
const stars = ref(3)
</script>

<style scoped>
.top-card {
  position: relative;
  width: 280px;
  max-width: 100%;
  border-radius: 16px;
  background-color: #1a1a1a;
  padding: 16px;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.85); */
}

/* .top-card::before {
  content: '';
  position: absolute;
  top: -5px;
  right: -5px;
  width: 50px;
  height: 50px;
  background-color: #0c0c0c;
  border-radius: 0px 0px 0px 26px;
} */

.card-mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
  border-radius: 0px !important;
}

.corner-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  &:hover {
    color: #b9ff66;
  }
}

.q-list {
  gap: 15px;
  padding: 0;
  margin-top: 5px;
}
</style>
