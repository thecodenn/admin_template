<template>
  <q-table
    title="Treats"
    :rows="rows"
    :columns="columns"
    row-key="name"
    :visible-columns="visibleColumns"
    class="sticky-header-column"
    :rows-per-page-options="[10, 20, 30, 40]"
  >
    <template v-slot:top>
      <img
        alt="Fake logo"
        src="~assets/fake_logo.svg"
        style="width: 40px; height: 40px; margin-right: 5px"
      />
      <q-space />

      <q-btn round class="secondary-icon" icon="sort" />
      <q-btn round class="secondary-icon" icon="calendar_today" />
      <q-btn round class="secondary-icon" icon="send" />

      <q-select
        v-model="visibleColumns"
        rounded
        standout
        multiple
        dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        :options="columns"
        option-value="name"
        options-cover
        options-selected-class="dropdown-selected"
        class="dropdown"
        dropdown-icon="keyboard_arrow_down"
      >
        <template v-slot:prepend> <q-icon name="filter_list" /> </template
      ></q-select>
    </template>
  </q-table>
</template>

<script setup>
import { ref } from 'vue'

const visibleColumns = ref([
  'calories',
  'desc',
  'fat',
  'carbs',
  'protein',
  'sodium',
  'calcium',
  'iron',
])

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  {
    name: 'calcium',
    label: 'Calcium (%)',
    field: 'calcium',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: 'Iron (%)',
    field: 'iron',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
]
</script>

<style>
.q-table__bottom {
  background-color: #1a1a1a;
  position: sticky;
  bottom: 0;
  z-index: 5;
}

.sticky-header-column {
  max-height: 500px;
  width: 90%;
}

.sticky-header-column td:first-child {
  background-color: #1a1a1a;
}

.sticky-header-column tr th {
  position: sticky;
  z-index: 2;
  background: #1a1a1a;
  font-weight: 500;
}
.sticky-header-column thead tr:last-child th {
  top: 48px;
  z-index: 3;
}

.sticky-header-column thead tr:first-child th {
  top: 0;
  z-index: 1;
}

.sticky-header-column tr:first-child th:first-child {
  z-index: 3;
}

.sticky-header-column td:first-child {
  z-index: 1;
}

.sticky-header-column td:first-child,
.sticky-header-column th:first-child {
  position: sticky;
  left: 0;
}

.sticky-header-column tbody {
  scroll-margin-top: 48px;
}
</style>
