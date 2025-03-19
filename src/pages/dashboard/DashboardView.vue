<template>

 <q-page id="dashboardPage" class="q-pt-lg">

  <div class="row q-col-gutter-sm justify-between">

    <div class="q-pa-md row items-start q-gutter-md">


        <q-card class="my-card" flat bordered>

          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="teal" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>

          <q-card-section>
            <lume-sparkline-chart
              :data="data"
              :labels="labels"
            />
          </q-card-section>

        </q-card>
      </div>







    </div>

 </q-page>

</template>

<script setup>
import { LumeSparklineChart   } from '@adyen/lume-vue3';
import { ref } from 'vue';
const data = ref([
    {
      label: 'My dataset',
      color: 'skyblue',
      values: [10, 30, 20, 50, 40],
    },
  ]);

  const labels = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May']);
</script>

<style lang="scss" >
@use '@adyen/lume-vue3/scss';

.my-card {
  width: 100%;
  max-width: 250px;
}


</style>
