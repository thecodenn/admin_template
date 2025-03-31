<template>
  <q-toolbar class="row" style="padding: 0">
    <q-toolbar-title class="text-h4 column" style="text-align: center; min-width: 200px">
      New Leads
    </q-toolbar-title>

    <div class="row items-center q-gutter-sm" style="justify-content: end">
      <a href="/" class="dotted-link">
        <span class="larger-number q-mr-sm">7</span>
        <span class="smaller-text">Leads</span>
      </a>

      <q-btn round class="secondary-icon" icon="search" />
      <q-btn round class="secondary-icon" icon="tune" />
      <q-btn round class="secondary-icon" icon="sort" />
      <q-btn round class="secondary-icon">ALL</q-btn>

      <q-btn rounded class="secondary-button">
        <q-icon color="orange" name="local_fire_department" style="padding-right: 0.2em" />
        Hot Client
      </q-btn>
      <q-btn rounded class="secondary-button"> Great Interest </q-btn>
      <q-btn rounded class="secondary-button"> Medium Interest </q-btn>
      <q-btn rounded class="secondary-button"> Low Interest </q-btn>
      <q-btn rounded class="secondary-button"> No Interest </q-btn>
    </div>
  </q-toolbar>
</template>

<style scoped>
.dotted-link {
  display: inline-flex;
  align-items: baseline;
  border-bottom: 1px dotted currentColor;
  text-decoration: none;
  color: grey;
  /* Matches your existing grey theme */
}

.larger-number {
  font-size: 120%;
  /* Slightly larger number */
}

.smaller-text {
  font-size: 90%;
  /* Slightly smaller text */
}

.grey-border {
  border: 1px solid lightgrey;
}
</style>
