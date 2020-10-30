<template>
  <div>
    <LeftDrawer color="bp" :leftDrawer="leftDrawer"/>
    <v-app-bar dark color="bp" app>
      <v-app-bar-nav-icon @click="toggleLeftDrawer"/>
      <v-spacer />
      <div class="d-flex align-center" style="cursor: pointer" @click="toggleRightDrawer">
        <v-avatar >
          <v-img src="https://via.placeholder.com/64" />
        </v-avatar>
        <h4 class="ml-2">{{ user && user.name }}</h4>
      </div>
    </v-app-bar>
    <rightDrawer color="bp" :rightDrawer="rightDrawer"/>
  </div>
</template>

<script>
import LeftDrawer from '@/layout/navbar/LeftDrawer'
import RightDrawer from '@/layout/navbar/RightDrawer'
import drawer from '@/mixins/drawer.js'
import { mapGetters } from 'vuex'

export default {
  components: { LeftDrawer, RightDrawer },
  mixins: [drawer],
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  }
};
</script>

<style>
</style>