<template>
	<v-form ref="despachoForm">
		<v-row no-gutters>
			<v-col cols="12">
				<v-text-field :value="despacho.cliente.nome_completo" disabled />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.status_id" label="Processo atual" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.conjugue_despacho" label="Conjugue/Coobrigado" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.status_despacho" label="Status" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.parceiro_despacho" label="Parceiro/Registro (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.data_recebimento_despacho" label="Data recebimento Kit" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.data_inicio_processo" label="Data início do processo" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.data_previsao" label="Data previsão" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.data_finalizacao_processo" label="Data finalização do rpocesso" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.fid_despacho" label="Fid (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.obra_despacho" label="Obra (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.empresa_cliente_id" label="Empresa (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.conjugue_despacho" label="Empreendimento (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.bloco_despacho" label="Bloco (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="despacho.banco_despacho" label="Banco (Não Obrigatório)" />
			</v-col>
			<v-col cols="12">
				<v-textarea outlined v-model="despacho.observacoes_processo" label="Observações do processo" />
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
export default {
	props: ['cliente','despacho'],
	data: () => ({
		// despacho: {
		// 	processo_passo: '',
		// 	processo_id: '',
		// 	nome_cliente: '',
		// 	conjugue_despacho: '',
		// 	status_despacho: '',
		// 	parceiro_despacho: '',
		// 	data_recebimento_despacho: '',
		// 	data_inicio_processo: '',
		// 	data_previsao: '',
		// 	data_finalizacao_processo: '',
		// 	fid_despacho: '',
		// 	obra_despacho: '',
		// 	empresa_cliente_id: '',
		// 	bloco_despacho: '',
		// 	unidade_despacho: '',
		// 	banco_despacho: '',
		// 	observacoes_processo: ''
		// },
	})
}
</script>

<style>

</style>