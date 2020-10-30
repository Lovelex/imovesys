<template>
  <div>
    <v-form >
      <span class="text-h5 font-weight-bold grey--text text--darken-2"
        >Novo modelo de contrato</span
      >
      <v-row >
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="midia.nome"
            label="Título deste modelo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="midia.nome"
            label="Categoria de contratos"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <quill />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quill: quillEditor,
  },
  data: () => ({
    midia: {
      nome: "",
    },
  }),
};
</script>

<style>
</style>