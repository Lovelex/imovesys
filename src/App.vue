<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import cookie from 'vue-cookie'
import handleErrors from '@/mixins/handleErrors.js'
import axios from './plugins/axios'

export default {
  mixins: [handleErrors],
  methods: {
    isUserWithCookie() {
      this.$http.interceptors.request.use(
        (config) => {
          if (!config.url.endsWith("/auth/login")) {
            config.headers.Authorization = `Bearer ${cookie.get("token")}`;
            return config;
          }
          return config;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    handleAllResErrors() {
      this.$http.interceptors.response.use(
        (response) => {
          return response
        },
        (error) => {
          this.handleErrors(error)
        }
      ) 
    },
  },
  created() {
    this.isUserWithCookie()
    this.handleAllResErrors()
    axios.get('/obras')
      .then(resp => console.log(resp.data))
  },
};
</script>

<style>
</style>