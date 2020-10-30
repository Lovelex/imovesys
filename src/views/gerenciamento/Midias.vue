<template>
  <div>
    <v-container fluid>
      <DialogContainer :dialog="dialog">
        <ClientesTabs :tab="tab" :mode="mode" :usuario="usuario" />
        <div class="d-flex justify-end">
          <v-btn v-if="mode === 'submit'" color="primary">Adicionar</v-btn>
          <v-btn v-if="mode === 'update' && tab.number !== 1" color="warning"
            >Editar</v-btn
          >
          <v-btn @click="toggleDialog" color="secondary" class="ml-2"
            >Fechar</v-btn
          >
        </div>
      </DialogContainer>
      <v-card class="mt-8 pa-2">
        <v-btn
          @click="openInSubmitMode"
          :fixed="$vuetify.breakpoint.xs ? true : false"
          :absolute="$vuetify.breakpoint.xs ? false : true"
          :bottom="$vuetify.breakpoint.xs ? true : false"
          :top="$vuetify.breakpoint.xs ? false : true"
          right
          fab
          color="primary"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-data-table :items="usuarios.data" :headers="headers">
          <template v-slot:item.actions="{ item, index }">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon
                  v-on="on"
                  color="warning"
                  @click="openInEditMode(item)"
                  class="mr-2"
                  >mdi-pencil</v-icon
                >
              </template>
              <span> Editar </span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" color="error" @click="removeDispatch(item)"
                  >mdi-delete</v-icon
                >
              </template>
              <span>Excluir</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import DialogContainer from "@/layout/dialog/DialogContainer";
import ClientesTabs from "@/components/gerenciamento/midias/MidiasTabs";
import dialog from "@/mixins/dialog";

import axios from "../../plugins/axios";

import { mapGetters, mapActions } from "vuex";

export default {
  components: { DialogContainer, ClientesTabs },
  mixins: [dialog],
  data: () => ({
    mode: "submit",
    tab: {
      number: 0,
    },
    headers: [
    
      {
        text: "ID",
        value: "id",
      },
      {
        text: "Título",
        value: "titulo",
      },
      {
        text: "Criado em",
        value: "created_at",
      },
      {
        text: "Atualizado em",
        value: "updated_at",
      },
      {
        text: "Ações",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters({
      usuarios: "gerMidias/getMidias",
      usuario: "gerMidias/getMidia",
    }),
  },
  methods: {
    ...mapActions({
      setMidias: "gerMidias/setMidias",
      setMidia: "gerMidias/setMidia",
    }),
    changeToSubmitMode() {
      this.mode = "submit";
    },
    changeToEditMode() {
      this.mode = "update";
    },
    openInSubmitMode(midia) {
      this.toggleDialog();
      this.changeToSubmitMode();
    },
    openInEditMode(midia) {
      this.toggleDialog();
      this.changeToEditMode();
      this.setMidia(midia);
    },
  },
  created() {
    this.setMidias();
  },
};
</script>

<style>
</style>