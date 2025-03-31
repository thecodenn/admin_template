<template>
  <q-card flat class="graph-card">
    <img class="card-mask" src="~assets/subtract-card.svg" alt="Fake Mask" />
    <q-btn round outline class="corner-icon" icon="north_east" />
    <div class="row items-center no-wrap" style="padding-bottom: 20px">
      <q-avatar size="50px">
        <img src="https://softsmart.co.za/02.jpg" alt="Profile Photo" />
      </q-avatar>
      <div class="column ellipsis-container">
        <span class="row ellipsis text-h7" style="font-weight: bold">Andrea Thomas</span>
        <span class="row ellipsis text-h7">From your community</span>
      </div>
    </div>

    <q-list class="column">
      <div class="row items-center no-wrap">
        <q-btn round outline color="grey" size="medium" icon="videocam" />
        <div class="column ellipsis-container">
          <span class="row ellipsis text-h5">Daily Standup</span>
          <span class="text-grey row no-wrap items-center">
            <q-icon left name="schedule" />
            Today at 08:15
          </span>
        </div>
      </div>
      <div class="row items-center q-gutter-sm">
        <q-select
          v-model="selectedOption"
          rounded
          dense
          standout
          :options="dropdownOptions"
          options-cover
          options-selected-class="dropdown-selected"
          dropdown-icon="keyboard_arrow_down"
        >
          <template v-slot:selected>
            <span class="selected-option">
              {{ selectedOption }}
            </span>
          </template>
          <template v-slot:prepend>
            <q-avatar size="30px" style="left: -6px">
              <img src="https://softsmart.co.za/02.jpg" alt="Profile Photo" /></q-avatar
            ><q-space
          /></template>
        </q-select>
        <q-btn round color="white" text-color="black" icon="mail_outline" />
        <q-btn round color="white" text-color="black" icon="call" />
      </div>
    </q-list>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const dropdownOptions = ref(['Call Scheduled', 'Cancelled', 'Not Attending'])
const selectedOption = ref('Call Scheduled')
</script>

<style scoped>
.graph-card {
  position: relative;
  max-width: 340px;
  border-radius: 16px;
  background-color: #2e2e2e;
  padding: 16px;
}

.graph-card.highlight {
  background-color: #a7e65d;
}

.graph-card.highlight .text-h5,
.graph-card.highlight .text-h7,
.graph-card.highlight .text-body1,
.graph-card.highlight .text-grey,
.graph-card.highlight .selected-option {
  color: black !important;
}

.graph-card.highlight .q-select {
  background-color: rgba(94, 145, 34, 0.5);
  border-radius: 50px;
}

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
  gap: 40px;
  padding: 0;
  margin-top: 5px;
}

.ellipsis-container {
  display: flex;
  flex-direction: column;
  max-width: 220px;
  padding: 0px 15px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}
</style>
