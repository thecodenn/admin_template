<template>
    <div class="row justify-between items-center full-width q-pl-md">

        <TopCard v-for="i in counter" :key="i" :size="size" />
    </div>
</template>

<script setup>
import TopCard from "components/Dashboard//TopCard.vue";
import { ref, onMounted } from "vue";

let props = defineProps({
    size: String,
})

const counter = ref(4);

onMounted(() => {
    if (props.size == "large") {
        counter.value = 3;
    }
})

</script>