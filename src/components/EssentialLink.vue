<template>
  <q-item v-if="props.openClose" clickable @click="toggleLeftDrawer" class="q-mb-xl">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="leftDrawerIcon" class="q-pa-sm rounded-icon" />
    </q-item-section>
  </q-item>

  <q-item v-else clickable tag="a" :href="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" class="q-pa-sm rounded-icon" />
    </q-item-section>

    <q-item-section v-if="props.title != ''">
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerIcon = ref("arrow_back");

const emits = defineEmits(["toggled"]);

function toggleLeftDrawer() {
  emits("toggled");
  leftDrawerIcon.value = leftDrawerIcon.value == 'arrow_forward' ? "arrow_back" : "arrow_forward";
};

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  },

  openClose: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>
.rounded-icon {
  background-color: #f0f0f0;
  /* Optional: adds a background color */
  border-radius: 50%;
  /* Makes the icon round */
  padding: 8px;
  /* Adds space around the icon */
  width: 32px;
  /* Fixed width for consistency */
  height: 32px;
  /* Fixed height for consistency */
}
</style>