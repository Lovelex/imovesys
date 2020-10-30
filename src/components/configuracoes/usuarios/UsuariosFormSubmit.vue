<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select :items="roleOptions" item-text="text" item-value="value" v-model="usuario.role" label="Tipo de Acesso" />
        </v-col>
        <v-col cols="12" sm="3">
          <v-select :items="situacaoOptions" item-text="text" item-value="value" v-model="usuario.situacao"  label="Situação do usuário" />
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="usuario.telefone_emergencia" label="Telefone de emergência" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.data_nascimento" label="Data de nascimento" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select :items="proprietariosOptions" item-text="text" item-value="value" v-model="proprietariosOptions" label="Permissão a proprietários" />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="usuario.name" label="Nome completo" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.email" label="E-mail" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select v-model="usuario.gerente_id" label="Gerente do usuário" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.password" type="password" label="Senha" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="usuario.passwordConfirmation" type="password" label="Confirmação de senha" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import options from './options'

export default {
  mixins: [options],
  data: () => ({
    usuario: {
      cpf: "",
      data_nascimento: "",
      email: "",
      gerente_id: "",
      is_admin: false,
      name: "",
      notification_id: "",
      proprietarios: "S",
      role: "",
      situacao: "",
      telefone_emergencia: "",
      tipo_usuario_id: "",
      role: "",
      password: "",
      passwordConfirmation: ""
    }
  })
};
</script>

<style>
</style>