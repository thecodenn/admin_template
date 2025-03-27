<template>
  <router-link :to="props.link" custom>
    <q-btn
      clickable
      tag="a"
      :href="props.link"
      class="icon-button"
      :class="{ active: isActive }"
      round
      :icon="props.icon"
      aria-label="Menu"
    >
      <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
        <span>{{ props.title }}</span>
      </q-tooltip></q-btn
    >
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: '#',
    required: true,
  },

  icon: {
    type: String,
    default: '',
    required: true,
  },
})

const route = useRoute()
const isActive = computed(() => {
  return route.path === props.link
})
</script>

<style></style>
