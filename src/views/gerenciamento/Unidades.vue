<template>
  <div>
    <v-container fluid>
      <DialogContainer :dialog="dialog">
        <UnidadesTabs :tab="tab" :mode="mode" :usuario="usuario" />
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
        <!-- <v-btn
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
        </v-btn> -->
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
                <v-icon  color="error" @click="removeDispatch(item)"
                  >mdi-delete</v-icon
                >
              </template>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import DialogContainer from "@/layout/dialog/DialogContainer";
import UnidadesTabs from "@/components/gerenciamento/unidades/UnidadesTabs";
import dialog from "@/mixins/dialog";

import axios from "../../plugins/axios";

import { mapGetters, mapActions } from "vuex";

export default {
  components: { DialogContainer, UnidadesTabs },
  mixins: [dialog],
  data: () => ({
    mode: "submit",
    tab: {
      number: 0,
    },
    headers: [
      {
        text: "Obra",
        value: "",
      },
      {
        text: "Empreendimento",
        value: "",
      },
      {
        text: "Previsão de término",
        value: "",
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
      usuarios: "configUsuarios/getUsuarios",
      usuario: "configUsuarios/getUsuario",
    }),
  },
  methods: {
    ...mapActions({
      setUsuarios: "configUsuarios/setUsuarios",
      setUsuario: "configUsuarios/setUsuario",
    }),
    changeToSubmitMode() {
      this.mode = "submit";
    },
    changeToEditMode() {
      this.mode = "update";
    },
    openInSubmitMode(usuario) {
      this.toggleDialog();
      this.changeToSubmitMode();
    },
    openInEditMode(usuario) {
      this.toggleDialog();
      this.changeToEditMode();
      this.setUsuario(usuario);
    },
  },
  created() {
    this.setUsuarios();
  },
};
</script>

<style>
</style>