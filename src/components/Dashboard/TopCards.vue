<template>
    <div class="row justify-between items-center full-width q-pl-md">

        <TopCard v-for="i in counter" :key="i" :size="size" />
        <GraphCard />
    </div>
</template>

<script setup>
import TopCard from "components/Dashboard/TopCard.vue";
import GraphCard from "components/Dashboard/GraphCard.vue";
import { ref, onMounted } from "vue";

let props = defineProps({
    size: String,
})

const counter = ref(4);

onMounted(() => {
    if (props.size == "large") {
        counter.value = 2;
    }
})

</script>