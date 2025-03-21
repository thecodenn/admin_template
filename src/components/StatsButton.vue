<template>
  <div class="container row items-center">
    <div class="left">
      <span class="number">34</span>
    </div>
    <div class="right q-ml-sm">
      <div class="top">
        <q-btn icon="arrow_upward" color="lime" rounded size="10px" style="padding: 0 5px">3</q-btn>
      </div>
      <div class="bottom">
        <span class="muted-text">Deals</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}

.left {
  font-size: 3em;
  color: grey;
  font-weight: bold;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom {
  color: #777;
  font-size: 1em;
}
</style>
