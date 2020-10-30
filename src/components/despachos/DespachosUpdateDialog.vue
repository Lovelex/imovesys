<template>
  <DialogContainer :dialog="dialog">
    <v-tabs v-if="user.cliente">
      <v-tab>Despacho</v-tab>
      <v-tab>Cliente</v-tab>
      <v-tab-item>
        <div class="pa-4">
					<DespachoForm :cliente="user.cliente.nome_completo" :despacho="user.despacho"/>
				</div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-4">
          <ClientForm :cliente="user.cliente"/>
        </div>
      </v-tab-item>
    </v-tabs>
    <div class="d-flex justify-end">
      <v-btn @click="updateDispatch" color="warning">Atualizar</v-btn>
      <v-btn class="ml-2" color="secondary" @click="closeDialog">Fechar</v-btn>
    </div>
  </DialogContainer>
</template>

<script>
import DialogContainer from "@/layout/dialog/DialogContainer";
import ClientForm from "./ClientForm";
import DespachoForm from "./DespachoForm";

export default {
  components: { DialogContainer, ClientForm, DespachoForm },
  props: ["dialog", "user"],
  methods: {
    closeDialog() {
      this.dialog.isActive = false;
    },
    updateDispatch() {
      const formData = new FormData()
      formData.append("processo_passo", this.user.despacho.processo_passo || '')
			formData.append("processo_id", this.user.despacho.id || '')
			// formData.append("nome_cliente", this.user.despacho.cliente.nome_completo)
			formData.append("conjugue_despacho", this.user.despacho.conjugue_despacho || '')
			formData.append("status_despacho", this.user.despacho.status_despacho || '')
			formData.append("parceiro_despacho", this.user.despacho.parceiro_despacho || '')
			formData.append("data_recebimento_despacho", this.user.despacho.data_recebimento_despacho || '')
			formData.append("data_inicio_processo", this.user.despacho.data_inicio_processo || '')
			formData.append("data_previsao", this.user.despacho.data_previsao || '')
			formData.append("data_finalizacao_processo", this.user.despacho.data_finalizacao_processo || '')
			formData.append("fid_despacho", this.user.despacho.fid_despacho || '')
			formData.append("obra_despacho", this.user.despacho.obra_despacho || '')
			formData.append("empresa_cliente_id", this.user.despacho.empresa_cliente_id || '')
			formData.append("bloco_despacho", this.user.despacho.bloco_despacho || '')
			formData.append("unidade_despacho", this.user.despacho.unidade_despacho || '')
			formData.append("banco_despacho", this.user.despacho.banco_despacho || '')
			formData.append("observacoes_processo", this.user.despacho.observacoes_processo || '')
      
      return this.$http
        .post('/atualizar-despacho', formData)
        .then(() => console.log('OK'))
        .catch(e => console.log(e.response))
    },
    updateCliente() {
      
    }
  },
};
</script>

<style>
</style>