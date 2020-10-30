<template>
  <div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="midia.titulo" label="Nome"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      midia: 'gerMidias/getMidia'
    })
  }
};
</script>

<style>
</style>