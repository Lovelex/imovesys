<template>
  <v-navigation-drawer width="270" dark :color="color" v-model="leftDrawer.isActive" app>
    <div class="white--text">
      <div class="d-flex justify-center">
        <h3 class="text-h5 mt-4 font-weight-bold">ImoveSys</h3>
      </div>
      <v-divider class="my-4" />
      <div class="px-4">
        <v-btn
        outlined
        exact
        height="48"
        :to="{name: 'Main'}"
        class="black--text mt-4 mb-2"
        depressed
        tile
        color="white"
        block
      >
        <v-icon left>mdi-view-dashboard</v-icon>
        <span>DASHBOARD</span>
      </v-btn>
      </div>
      <v-subheader>Menu</v-subheader>
      <LeftDrawerLists />
    </div>
  </v-navigation-drawer>
</template>

<script>
import LeftDrawerLists from "./LeftDrawerLists";

export default {
  components: { LeftDrawerLists },
  props: ["leftDrawer", "color"],
};
</script>

<style>
</style>