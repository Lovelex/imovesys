<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-select v-model="nome" label="Grau de sigilo" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field v-model="nome" label="Título" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-select v-model="nome" label="Grupo documento" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-select v-model="nome" label="Tipo do documento" />
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="nome" label="Descrição do documento" />
        </v-col>
        <v-col cols="12">
          <v-file-input v-model="nome" label="Selecione o documento" />
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