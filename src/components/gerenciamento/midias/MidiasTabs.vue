<template>
  <div class="mx-4">
    <v-tabs v-model="tab.number">
      <v-tab>Mídias</v-tab>
      <v-tabs-items v-model="tab.number">
        <v-tab-item>
          <div>
            <MidiasFormSubmit v-if="mode === 'submit'" />
            <MidiasFormEdit v-if="mode === 'update'" />
          </div>
        </v-tab-item>

      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import MidiasFormSubmit from "./MidiasFormSubmit";
import MidiasFormEdit from "./MidiasFormEdit";


export default {
  props: ["mode", "tab"],
  components: { MidiasFormSubmit, MidiasFormEdit },
  
};
</script>

<style>
</style>