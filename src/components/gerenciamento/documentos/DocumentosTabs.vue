<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Documentos</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <DocumentosFormSubmit v-if="mode === 'submit'" />
            <DocumentosFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>

      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import DocumentosFormSubmit from "./DocumentosFormSubmit";
import DocumentosFormEdit from "./DocumentosFormEdit";


export default {
  props: ["mode", "tab"],
  components: { DocumentosFormSubmit, DocumentosFormEdit },
  
};
</script>

<style>
</style>