<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Modelos</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <ModelosFormSubmit v-if="mode === 'submit'" />
            <ModelosFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>

      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import ModelosFormSubmit from "./ModelosFormSubmit";
import ModelosFormEdit from "./ModelosFormEdit";

export default {
  props: ["mode", "tab"],
  components: { ModelosFormSubmit, ModelosFormEdit },
  
};
</script>

<style>
</style>