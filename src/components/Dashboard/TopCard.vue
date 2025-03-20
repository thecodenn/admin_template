<template>
    <q-card :class="{
        'small-card': size == 'small',
        'large-card': size == 'large',
    }" flat>

        <q-card-section class="card-header q-pa-sm">
            <div class="row justify-between items-center full-width">

                <q-avatar size="56px">
                    <img src="https://softsmart.co.za/02.jpg" alt="Profile Photo" />
                </q-avatar>

                <q-btn round flat bordered icon="north_east" color="grey" class="grey-border"></q-btn>

            </div>
        </q-card-section>

        <q-card-section>

            <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                    Cafe Basilico
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
                $・Italian, Cafe
            </div>
            <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
            </div>
        </q-card-section>

    </q-card>
</template>

<script setup>
import { ref } from "vue";
const stars = ref(3);

defineProps({
    size: String,
})
</script>

<style scoped>
.small-card {
    width: 100%;
    max-width: 20%;
    background-color: #f9f9f9;
    border-radius: 25px;
}

.large-card {
    width: 100%;
    max-width: 30%;
    background-color: #f9f9f9;
    border-radius: 25px;
}

.grey-border {
    border: 1px solid lightgrey;
}
</style>