<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Cliente</v-tab>
      <v-tab v-if="mode === 'update'">Contas bancárias</v-tab>
      <v-tab v-if="mode === 'update'">Dependentes</v-tab>
      <v-tab v-if="mode === 'update'">Empreendimentos recomendados</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <ClientesFormSubmit v-if="mode === 'submit'" />
            <ClientesFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div>
            
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import ClientesFormSubmit from "./ClientesFormSubmit";
import ClientesFormEdit from "./ClientesFormEdit";


export default {
  props: ["mode", "tab"],
  components: { ClientesFormSubmit, ClientesFormEdit },
  
};
</script>

<style>
</style>