<template>
  <div>
    <v-form>
      <v-row>
        
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import options from './options'
export default {
  mixins: [options],
  computed: {
    ...mapGetters({
      usuario: 'configUsuarios/getUsuario'
    })
  }
};
</script>

<style>
</style>