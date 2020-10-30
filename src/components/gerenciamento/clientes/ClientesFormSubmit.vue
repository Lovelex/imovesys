<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12" >
          <v-select :items="tipoCadastro" item-text="text" item-value="value" v-model="cliente.tipoCadastro" label="Tipo de Cadastro" />
        </v-col>
        <v-col cols="12" >
          <v-autocomplete :items="responsavel" item-text="text" item-value="value" v-model="cliente.Responsável"  label="Responsável pelo cliente" />
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
    cliente: {
      
    }
  })
};
</script>

<style>
</style>