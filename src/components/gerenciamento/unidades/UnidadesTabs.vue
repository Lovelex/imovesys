<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Unidades</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <UnidadesFormSubmit v-if="mode === 'submit'" />
            <UnidadesFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>

      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import UnidadesFormSubmit from "./UnidadesFormSubmit";
import UnidadesFormEdit from "./UnidadesFormEdit";

export default {
  props: ["mode", "tab"],
  components: { UnidadesFormSubmit, UnidadesFormEdit },
  
};
</script>

<style>
</style>