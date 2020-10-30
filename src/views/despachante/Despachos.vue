<template>
  <div id="despachos">
    <v-container fluid>
      <v-tabs v-model="tab" fixed-tabs centered>
        <v-tab>Lista</v-tab>
        <v-tab>Cartões</v-tab>
       
        <v-tabs-items v-model="tab" :touchless="true">
          <v-tab-item>
            <List :tables="tables"/>
          </v-tab-item>
          <v-tab-item>
            <DespachosWrapper :tables="tables" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import DespachosWrapper from "@/components/despachos/DespachosWrapper";
import List from "@/components/despachos/List";
import cookie from 'vue-cookie'
import axios from "axios";
import { mapActions, mapGetters } from 'vuex';

cookie
export default {
  components: { DespachosWrapper, List },
  data: () => ({
    tab: 1,
  }),
  computed: {
    ...mapGetters({
      tables: 'tables/getTables'
    })
  },
  methods: {
    ...mapActions({
      setUsers: 'tables/setUsers'
    }),
  },
  created() {
    this.setUsers()
  },
};
</script>

<style>
</style>