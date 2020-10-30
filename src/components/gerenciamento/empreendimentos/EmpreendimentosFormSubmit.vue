<template>
  <div class="mt-8">
    <v-form>
      <div>
        <span class="text-h5 font-weight-bold grey--text text--darken-2">Obra</span>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Nome da obra" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="VGV" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Data de início" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Data de fim" />
          </v-col>
        </v-row>
      </div>

      <div>
        <span class="text-h5 font-weight-bold grey--text text--darken-2">Empreendimento</span>
        <v-row>
          <v-col cols="12">
            <v-select label="Estabelecimento" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select label="Tipo de instalação" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Nome" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select label="Modelo de contrato" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="CNPJ" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select label="Status do imóvel" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Previsão de entrega" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="CEP" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Endereço" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Número" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Bairro" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Cidade" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Estado" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Responsável Técnico" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select label="Gerente Responsável" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field type="number" label="Taxa CEF + Despachante" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select label="ITBI e Registro" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field type="number" label="Número da matrícula" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field type="number" label="Número do alvará" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field type="number" label="Número da APF" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Cartório" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Comarca" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field label="Registro de incorporação" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select label="Taxas" />
          </v-col>
          <v-col cols="12" >
            <v-select label="Micro região" />
          </v-col>
          <v-col cols="12" >
            <v-textarea label="Descrição complementar das unidades" />
          </v-col>
          <v-col cols="12" >
            <v-file-input label="Arquivo garagens" />
          </v-col>
        </v-row>
      </div>
    </v-form>
  </div>
</template>

<script>
import options from "./options";

export default {
  mixins: [options],
  data: () => ({
    cliente: {},
  }),
};
</script>

<style>
</style>