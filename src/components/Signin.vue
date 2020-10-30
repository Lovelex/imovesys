<template>
  <div>
    <AdminSnackbar />
    <v-form @submit.prevent="signin" ref="signinRef">
      <v-text-field
        color="bp"
        v-model="user.email"
        validate-on-blur
        :rules="[rules.required, rules.email]"
        label="E-mail"
      />
      <v-text-field
        color="bp"
        v-model="user.password"
        type="password"
        validate-on-blur
        :rules="[rules.required, rules.min]"
        label="Senha"
        hint="Precisa ter no mínimo 6 caracteres"
      />
      <div class="d-flex justify-end">
        <div>
          <v-btn text>Esqueci minha senha</v-btn>
          <v-btn dark color="bp" type="submit">Entrar</v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import form from "@/mixins/form";
import axios from "axios";
import AdminSnackbar from "@/layout/admin/AdminSnackbar";
import { mapActions } from "vuex";

export default {
  components: { AdminSnackbar },
  mixins: [form],
  data: () => ({
    user: {
      email: "admin@imovesys.com.br",
      password: "123456789",
    },
  }),
  methods: {
    ...mapActions({
      setSnackbar: "adminSnackbar/setSnackbar",
      setUser: "user/setUser"
    }),
    signin() {
      this.$http
        .post("/auth/login", this.user)
        .then((resp) => {
          if (resp?.data) {
            if (resp.data === "Invalid login details") {
              return this.setSnackbar({
                mode: 'error',
                text: 'E-Mail ou senha inválidos'
              });
            }
            if(resp.data.token) {
              this.$cookie.set("token", resp.data.token)
              this.$router.push({ name: "Main" });
              localStorage.setItem('user', JSON.stringify(resp.data.data))
              this.setUser()
            }
          } else {
            console.log("Token não encontrado");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>