<template>
  <div class="despachos-tables mt-10 pt-2 pb-4">
    <DespachosSubmitDialog :dialog="dialog" />

    <div class="d-flex">
      <DespachosTable class="mx-4" v-for="(table, i) in tables" :key="i" :table="table">
        <draggable
          class="pb-16"
          :class="table.status_id"
          @end="updateTableOnEnd($event)"
          @change="getUserOnChange($event)"
          :options="{delay: $vuetify.breakpoint.xs ? 400 : 0}"
          v-model="table.users"
          group="users"
        >
          <div v-for="(user, i) in table.users" :key="i">
            <DespachosCards class="user-select-none" :i="i" :user="user" />
          </div>
        </draggable>
      </DespachosTable>
    </div>
  </div>
</template>

<script>
import DespachosTable from "./DespachosTable";
import DespachosCards from "./DespachosCards";
import DespachosSubmitDialog from "./DespachosSubmitDialog";
import dialog from "@/mixins/dialog.js";
import draggable from "vuedraggable";
import cookie from "vue-cookie";

export default {
  components: {
    DespachosTable,
    draggable,
    DespachosCards,
    DespachosSubmitDialog,
  },
  props: ["tables"],
  data: () => ({
    dialog: {
      isActive: false,
    },
    user: {
      tableId: "",
      data: {},
    },
  }),
  methods: {
    getTableNameByClassOnEnd($event) {
      const secondClassName = $event.to.className.split(" ")[1];
      this.user.tableId = secondClassName;
    },
    getUserOnChange($event) {
      if ($event.added) {
        this.user.data = $event.added.element;
      }
    },
    updateTableOnEnd($event) {
      if ($event.to !== $event.from) {
        this.getTableNameByClassOnEnd($event);
        this.$http
          .post("/changedispatchstatus", {
            status_id: this.user.tableId,
            id: this.user.data.despacho.id,
          })
          .then(() => {
            console.log("Atualizado");
          })
          .catch((e) => {
            console.log(e.message);
          });
      }
    },
    openDispatchUpdateDialog(user) {
      console.log(user);
    },
  },
};
</script>

<style scoped>
.user-select-none {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.despachos-tables {
  overflow-x: scroll;
}
</style>