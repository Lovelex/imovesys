<template>
  <div>
    <v-card class="pa-2">
      <v-row>
        <v-col cols="12" md="5">
          <div>
            <div>
              <label>
                <span>De: {{ usuario.titulo }}</span>
              </label>
              <v-text-field outlined readonly :value="usuario.titulo" />
            </div>
            <div>
              <label>
                <span>Sem movimentação por mais de:</span>
              </label>
              <v-text-field v-model="search" type="number" />
            </div>
          </div>
        </v-col>
        <v-col class="d-none d-md-block" cols="12" sm="2">
          <div class="d-flex justify-center mt-10">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <label>
            <span>Para: {{ usuario.titulo }}</span>
          </label>
          <v-select outlined label="Selecione" />
        </v-col>
        <v-col>
          <v-card class="pa-2">
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-checkbox
                  :value="cliente.id"
                  :label="cliente.nome"
                  v-for="(cliente, i) in usuario.clientes"
                  v-model="checkboxes"
                  :key="i"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div class="d-flex justify-end my-4">
        <v-btn color="primary">
          Transferir
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    search: 0,
    checkboxes: []
  }),
  computed: {
    ...mapGetters({
      usuario: "configUsuarios/getUsuario"
    })
  },
  methods: {
    transferClients() {
      console.log();
    }
  }
};
</script>

<style>
</style>