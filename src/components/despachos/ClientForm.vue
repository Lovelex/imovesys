<template>
  <v-form ref="clienteForm">
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="cliente.nome_completo" validate-on-blur label="Nome" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select v-model="cliente.empresa" validate-on-blur label="Empresa" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select v-model="cliente.responsavel" validate-on-blur label="Responsável pelo cliente" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.cpfcnpj" validate-on-blur label="CPF ou CNPJ" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.email" validate-on-blur label="E-mail" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.telefone_celular" validate-on-blur label="Telefone" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.cep" validate-on-blur label="CEP" />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field v-model="cliente.endereco" validate-on-blur label="Endereço" />
      </v-col>
      <v-col cols="12" sm="2">
        <v-text-field v-model="cliente.complemento" validate-on-blur label="Complemento" />
      </v-col>
      <v-col cols="12" sm="2">
        <v-text-field v-model="cliente.numero" validate-on-blur label="Número" />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field v-model="cliente.bairro" validate-on-blur label="Bairro" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.cidade" validate-on-blur label="Cidade" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="cliente.estado" validate-on-blur label="Estado" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>

export default {
	props: ["cliente"],
  computed: {
    clienteToQuery() {
      const cadastro = `cadastro_despacho_modal=true`;
      const nome_completo = `nome=${this.cliente.nome_completo}`;
      const tipo_pessoa = `tipo_pessoa=${this.cliente.tipo_pessoa}`;
      const empresa = `empresa=${this.cliente.empresa}`;
      const created_by = `created_by=${this.cliente.created_by}`;
      const cpfcnpj = `cpfcnpj=${this.cliente.cpfcnpj}`;
      const email = `email=${this.cliente.email}`;
      const telefone_celular = `telefone_celular=${this.cliente.telefone_celular}`;
      const cep = `cep=${this.cliente.cep}`;
      const endereco = `endereco=${this.cliente.endereco}`;
      const rua = `rua=${this.cliente.rua}`;
      const complemento = `complemento=${this.cliente.complemento}`;
      const bairro = `bairro=${this.cliente.bairro}`;
      const cidade = `cidade=${this.cliente.cidade}`;
      const numero = `numero=${this.cliente.numero}`;
      const estado = `estado=${this.cliente.estado}`;

      const query = `${cadastro}&dadosDespacho=${nome_completo}%26${tipo_pessoa}%26${empresa}%26${created_by}%26${cpfcnpj}%26${email}%26${telefone_celular}%26${cep}%26${endereco}%26${rua}%26${complemento}%26${bairro}%26${cidade}%26${numero}%26${estado}`;
      return query.replaceAll(" ", "%20").replace("@", "%40");
    },
  },
};
</script>

<style>
</style>