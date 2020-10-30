<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Empreendimento</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <EmpreendimentosFormSubmit v-if="mode === 'submit'" />
            <EmpreendimentosFormEdit v-if="mode === 'update'" />
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
import EmpreendimentosFormSubmit from "./EmpreendimentosFormSubmit";
import EmpreendimentosFormEdit from "./EmpreendimentosFormEdit";


export default {
  props: ["mode", "tab"],
  components: { EmpreendimentosFormSubmit, EmpreendimentosFormEdit },
  
};
</script>

<style>
</style>