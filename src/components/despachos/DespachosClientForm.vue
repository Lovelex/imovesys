<template>
  <div>
    <h2 class="grey--text text--darken-2">Novo despacho</h2>
    <v-form ref="dispatchForm">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="dispatch.nome_completo" validate-on-blur label="Nome" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select v-model="dispatch.empresa" validate-on-blur label="Empresa" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="dispatch.responsavel"
            validate-on-blur
            label="Responsável pelo cliente"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.cpfcnpj" validate-on-blur label="CPF ou CNPJ" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.email" validate-on-blur label="E-mail" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.telefone_celular" validate-on-blur label="Telefone" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.cep" validate-on-blur label="CEP" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field v-model="dispatch.endereco" validate-on-blur label="Endereço" />
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="dispatch.complemento" validate-on-blur label="Complemento" />
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="dispatch.numero" validate-on-blur label="Número" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field v-model="dispatch.bairro" validate-on-blur label="Bairro" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.cidade" validate-on-blur label="Cidade" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="dispatch.estado" validate-on-blur label="Estado" />
        </v-col>
      </v-row>
    </v-form>
    <div class="d-flex justify-end">
      <v-btn @click="submitDispatch" color="info">Inserir</v-btn>
      <v-btn @click="closeDespachosClientDialog" class="ml-2" color="secondary">Fechar</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import form from "@/mixins/form";

export default {
  mixins: [form],
  data: () => ({
    dispatch: {
      tipo_pessoa: "PF",
      nome_completo: "Novo",
      empresa: "6",
      responsavel: "",
      cpfcnpj: "356.847.418-27",
      email: "jaopss1999%40gmail.com",
      telefone_celular: "(31) 9999-9999",
      cep: "30.810-620",
      endereco: "Rua Paschoal Costa",
      complemento: "69",
      numero: "4",
      bairro: "Jardim Alvorada",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
    },
  }),
  computed: {
    ...mapGetters({
      user: "user/getUser",
    }),
    dispatchToQuery() {
      const created_by = `created_by=${this.user.id}`;

      const cadastro = `cadastro_despacho_modal=true`;

      const nome_completo = `nome=${this.dispatch.nome_completo}`;
      const tipo_pessoa = `tipo_pessoa=${this.dispatch.tipo_pessoa}`;
      const empresa = `empresa=${this.dispatch.empresa}`;
      const cpfcnpj = `cpfcnpj=${this.dispatch.cpfcnpj}`;
      const email = `email=${this.dispatch.email}`;
      const telefone_celular = `telefone_celular=${this.dispatch.telefone_celular}`;
      const cep = `cep=${this.dispatch.cep}`;
      const endereco = `endereco=${this.dispatch.endereco}`;
      const rua = `rua=${this.dispatch.rua}`;
      const complemento = `complemento=${this.dispatch.complemento}`;
      const bairro = `bairro=${this.dispatch.bairro}`;
      const cidade = `cidade=${this.dispatch.cidade}`;
      const numero = `numero=${this.dispatch.numero}`;
      const estado = `estado=${this.dispatch.estado}`;

      const query = `${cadastro}&dadosDespacho=${nome_completo}%26${tipo_pessoa}%26${empresa}%26${created_by}%26${cpfcnpj}%26${email}%26${telefone_celular}%26${cep}%26${endereco}%26${rua}%26${complemento}%26${bairro}%26${cidade}%26${numero}%26${estado}`;
      return query.replaceAll(" ", "%20").replace("@", "%40");
    },
  },
  methods: {
    ...mapActions({
      setUsers: 'tables/setUsers',
      setTableUsers: 'tables/setTableUsers'
    }),
    submitDispatch() {
      const form = this.$refs.dispatchForm;
      console.log(this.dispatch);
      this.$http
        .post(`/storedispatchclient?${this.dispatchToQuery}`)
        .then((resp) => {
          this.setTableUsers()
          this.clearForm();
          console.log(resp);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateDispatch() {},
    closeDespachosClientDialog() {
      this.$emit("closeDespachosClientDialog", false);
    },
  },
};
</script>

<style>
</style>