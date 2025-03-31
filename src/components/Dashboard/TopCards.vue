<template>
  <div class="row items-center justify-center full-width">
    <template v-if="type === 'top'">
      <TopCard v-for="i in counter" :key="i" class="q-mr-lg q-mb-lg" />
    </template>

    <template v-if="type === 'graph'">
      <GraphCard
        v-for="i in counter"
        :key="i"
        :class="{ highlight: i === highlightIndex }"
        class="q-mr-lg q-mb-lg"
      />
    </template>
  </div>
</template>

<script setup>
import TopCard from 'components/Dashboard/TopCard.vue'
import GraphCard from 'components/Dashboard/GraphCard.vue'
import { ref, defineProps } from 'vue'

const counter = ref(6)
const highlightIndex = ref(1)

defineProps({
  type: {
    type: String,
    default: 'top',
  },
})
</script>
