<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Usuário</v-tab>
      <v-tab v-if="mode !== 'submit'">Clientes</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <UsuariosFormSubmit v-if="mode === 'submit'" />
            <UsuariosFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div>
            <ClientesForm class="mb-2"/>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import UsuariosFormSubmit from "./UsuariosFormSubmit";
import UsuariosFormEdit from "./UsuariosFormEdit";
import ClientesForm from "./ClientesForm";

export default {
  props: ["mode", "tab"],
  components: { UsuariosFormSubmit, UsuariosFormEdit, ClientesForm },
  
};
</script>

<style>
</style>