<template>
  <q-btn class="button">
    <!-- Left side showing the value -->
    <div class="left">
      <span class="number">{{ value }}</span>
    </div>

    <!-- Right side showing the difference and name -->
    <div class="q-ml-sm">
      <div class="row bool items-center" :class="{ up: up, down: !up }">
        <span style="margin-right: 2px">{{ diff }}</span>
        <q-icon :name="up ? 'arrow_upward' : 'arrow_downward'"></q-icon>
      </div>
      <div class="bottom">
        <span>{{ name }}</span>
      </div>
    </div>
  </q-btn>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    up: {
      type: Boolean,
      required: true,
    },
    diff: {
      type: [Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  //display: flex;
  padding: 10px;
  box-shadow: none;
  flex-wrap: nowrap;
}

.q-icon {
  font-size: medium;
}

.button:hover,
.button:focus {
  border-radius: 30px !important;
}

.left {
  font-size: 4em;
  font-weight: lighter;
  padding-left: 15px;
  padding-right: 5px;
}

.bool {
  border-radius: 50px;
  padding: 0px 5px;
  margin-bottom: 3px;
  color: #000000;
}

.bool.up {
  background-color: $positive;
}

.bool.down {
  background-color: $negative;
}

.bottom {
  font-size: 1em;
  font-weight: lighter;
  text-transform: none;
}
</style>
