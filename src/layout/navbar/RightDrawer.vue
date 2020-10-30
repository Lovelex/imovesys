<template>
  <v-navigation-drawer right dark :color="color" v-model="rightDrawer.isActive" app>
    <div class="white--text px-3">
      <div class="d-flex justify-center">
        <h3 class="text-h5 mt-4 font-weight-bold">Perfil</h3>
      </div>
      <v-divider class="my-4" />
      <RightProfileForm />
      <v-btn @click="logout" color="red" tile block class="mt-16">Sair</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';
import RightProfileForm from './RightProfileForm'

export default {
  props: ["rightDrawer", "color"],
  components: {RightProfileForm},
  methods: {
    ...mapActions({
      removeUser: 'user/removeUser'
    }),
    logout() {
      this.$cookie.delete('token')
      this.removeUser()
      this.$router.push({ name: 'Login' })
    }
  }
};
</script>

<style>
</style>