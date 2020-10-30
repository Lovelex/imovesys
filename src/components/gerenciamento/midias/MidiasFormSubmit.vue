<template>
  <div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="nome" label="Nome"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>


export default {
  data: () => ({
    midia: {
      nome: ''
    }
  })
};
</script>

<style>
</style>