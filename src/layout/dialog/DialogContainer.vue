<template>
  <div>
    <v-dialog
      :persistent="persistent"
      :width="$vuetify.breakpoint.smAndDown ? '100%' : '80%'"
      v-model="dialog.isActive"
    >
      <v-card class="pa-4">
        <slot></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Object,
    persistent: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>