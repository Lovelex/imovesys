<template>
  <div>
    <v-btn @click="toggleDialog" fab color="info" absolute right top>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <DialogContainer :dialog="dialog">
      <DespachosClientForm @closeDespachosClientDialog="dialog.isActive = $event"/>
    </DialogContainer>
  </div>
</template>

<script>
import dialog from "@/mixins/dialog.js";
import form from "@/mixins/form.js";
import DialogContainer from "@/layout/dialog/DialogContainer";
import DespachosClientForm from "./DespachosClientForm";

export default {
  components: { DialogContainer, DespachosClientForm },
  mixins: [form, dialog],
  
};
</script>

<style>
</style>