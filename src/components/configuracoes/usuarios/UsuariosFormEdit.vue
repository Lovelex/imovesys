<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select v-model="usuario.role" :items="roleOptions" item-text="text" item-value="value" label="Tipo de Acesso" />
        </v-col>
        <v-col cols="12" sm="3">
          <v-select v-model="usuario.situacao" label="Situação do usuário" />
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="usuario.telefone_emergencia" label="Telefone de emergência" />
        </v-col>
        <v-col cols="12">
          <v-select label="Imobiliária" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.data_nascimento" label="Data de Nascimento" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select label="Permissão a proprietários" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-autocomplete label="Banco" />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="usuario.name" label="Nome completo" />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="usuario.cpf" label="CPF" />
        </v-col>
        <v-col cols="12">
          <v-text-field label="Registro CRECI" />
        </v-col>
        <v-col cols="12">
          <v-file-input label="Arquivo carteirinha CRECI" />
        </v-col>
        <v-col cols="12">
          <v-text-field label="Telefone de contato" />
        </v-col>
        <v-col cols="12">
          <v-text-field label="CNPJ" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.email" label="E-mail" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Gerente do usuário" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Nova senha" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Confirmação de senha" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import options from './options'
export default {
  mixins: [options],
  computed: {
    ...mapGetters({
      usuario: 'configUsuarios/getUsuario'
    })
  }
};
</script>

<style>
</style>