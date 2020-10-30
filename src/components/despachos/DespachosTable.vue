<template>
  <div>
    <div
      class="elevation-2 pa-4 rounded"
      :style="{width: $vuetify.breakpoint.xs ? '200px' : '300px', height: '70vh', 'overflow-y': 'scroll'}"
    >
      <div class="d-flex pa-1">
        <h4 class="font-weight-medium grey--text">{{ table.title }}</h4>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["table"],
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0271bb; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #014c7e; 
}
</style>