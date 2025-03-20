<template>
    <q-toolbar class="row items-center">
        <!-- Left Section: Title Area -->
        <div class="row items-center q-gutter-md">
            <q-toolbar-title style="flex: 0 0 auto; color: grey;">
                New Leads
            </q-toolbar-title>
        </div>

        <!-- Right Section: Deals Containers -->
        <div class="row items-center q-gutter-lg" style="flex: 1; justify-content: space-evenly;">

            <a href="/" class="dotted-link">
                <span class="larger-number q-mr-sm">7</span>
                <span class="smaller-text">Leads</span>
            </a>

            <q-btn round flat bordered icon="search" color="grey" class="grey-border"></q-btn>


            <q-btn round flat bordered icon="tune" color="grey" class="grey-border"></q-btn>


            <q-btn round flat bordered color="white" class="grey-border bg-grey">ALL</q-btn>


            <q-btn rounded flat color="grey" class="grey-border">
                <q-icon left color="orange" name="local_fire_department" style="padding: 0.2em;" smaller dense />
                Hot Client
            </q-btn>

            <q-btn rounded flat color="grey" class="grey-border q-py-sm">
                Great Interest
            </q-btn>

            <q-btn rounded flat color="grey" class="grey-border q-py-sm">
                Medium Interest
            </q-btn>

            <q-btn rounded flat color="grey" class="grey-border q-py-sm">
                Low Interest
            </q-btn>

            <q-btn rounded flat color="grey" class="grey-border q-py-sm">
                Non Interest
            </q-btn>


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