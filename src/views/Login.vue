<template>
  <div id="login">
    <v-container class="d-flex flex-column justify-center align-center vh100">
      <v-card width="600" class="pa-4">
      <h2 class="my-6">Imovesys</h2>
        <v-tabs color="bp">
          <v-tab>Entrar</v-tab>
          <v-tab>Recuperar Senha</v-tab>
          <v-tab-item>
            <div class="py-4">
              <Signin />
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="py-4">
              <PasswordRecover />
            </div>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Signin from "@/components/Signin";
import PasswordRecover from "@/components/PasswordRecover";

export default {
  components: { Signin, PasswordRecover },
};
</script>

<style>
.vh100 {
  min-height: 100vh;
  box-sizing: border-box;
}
</style>