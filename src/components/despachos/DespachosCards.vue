<template>
  <div class="my-1 mt-4 mb-8">
    <v-card
      @click.self="openDespachosUpdateDialog"
      class="elevation-2 pa-4 rounded"
    >
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="removeDispatch" depressed small fab absolute right top>
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Excluir</span>
      </v-tooltip>
      <DespachosUpdateDialog :user="user" :dialog="dialog" />
      <div @click="openDespachosUpdateDialog" class="d-flex text-caption">
        <v-row>
          <v-col cols="12" sm="6">
            <span>{{ user.cliente && user.cliente.nome_completo }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span>{{
              user.cliente && user.cliente.created_at | dayMonthYearNumbers
            }}</span>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import DespachosUpdateDialog from "./DespachosUpdateDialog";
import dialog from "@/mixins/dialog";
import moment from "moment";
import { mapActions } from "vuex";

moment.locale("pt-br");

export default {
  components: { DespachosUpdateDialog },
  props: ["user", "i"],
  mixins: [dialog],
  filters: {
    dayMonthYearNumbers(v) {
      return moment(v).format("L");
    },
  },
  methods: {
    ...mapActions({
      setUsers: "tables/setUsers",
      setTableUsers: "tables/setTableUsers",
    }),
    removeDispatch() {
      if (
        confirm(
          `Deseja realmente remover o despacho do usuário "${this.user.cliente.nome_completo}"`
        )
      ) {
        console.log(`${this.user.cliente.id}`);
        this.$http
          .delete(`/despachante-processos/${this.user.despacho.id}`)
          .then(() => {
            this.setUsers().then(() => {
              this.setTableUsers();
            });
            console.log("Deletado");
          })
          .catch((e) => console.log(e.response));
      }
    },
    openDespachosUpdateDialog() {
      console.log("Dialog", this.user, this.i);
      this.toggleDialog();
    },
  },
};
</script>

<style>
</style>