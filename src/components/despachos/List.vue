<template>
  <div>
    <v-row>
      <v-col cols="12">
        <DespachosUpdateDialog :dialog="dialog" :user="user" />
        <v-text-field
          class="px-4"
          v-model="search"
          append-icon="mdi-magnify"
          label="Procurar"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table
          :search="search"
          :headers="headers"
          :items="users"
          :items-per-page="5"
          class="elevation-1"
        >
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
          <template v-slot:item.despacho.status_id="{ item, index }">
            <span>{{ numberToStatus(item.despacho.status_id) }}</span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DespachosUpdateDialog from "./DespachosUpdateDialog";

export default {
  components: { DespachosUpdateDialog },
  data: () => ({
    dialog: {
      isActive: false,
    },
    search: "",
    user: {},

    headers: [
      {
        text: "Cliente",
        value: "cliente.nome_completo",
      },
      { text: "Etapa", value: "despacho.status_id" },
      { text: "Criado em", value: "cliente.created_at" },
      { text: "Telefone", value: "cliente.telefone_celular" },
      {
        text: "Ações",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters({
      users: "tables/getUsers",
    }),
  },
  methods: {
    ...mapActions({
      setUsers: "tables/setUsers",
      setTableUsers: "tables/setTableUsers",
    }),

    numberToStatus(id) {
      const numbers = {
        1: "Itbi Prefeitura",
        2: "Calculo Registro",
        3: "Pagamento Itbi",
        4: "Ressalva Bancos",
        5: "Protocartorial",
        6: "Pendecatorial",
        7: "Repres. Cartorial",
        8: "Concluido",
        9: "Arquivado",
      };

      return numbers[id];
    },
    openEditDialog(user) {
      this.dialog.isActive = true;
      this.user = user;
      console.log(user);
    },
    removeDispatch(item) {
      if (
        confirm(
          `Deseja realmente remover o despacho do usuário "${item.cliente.nome_completo}"`
        )
      ) {
        console.log(`${item.cliente.id}`);
        this.$http
          .delete(`/despachante-processos/${item.despacho.id}`)
          .then(() => {
            this.setTableUsers();
            console.log("Deletado");
          })
          .catch((e) => console.log(e.response));
      }
    },
  },
  created() {
    this.setTableUsers();
  },
};
</script>

<style>
</style>