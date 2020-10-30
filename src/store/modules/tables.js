import axios from '../../plugins/axios'

export default {
	namespaced: true,
	state: {
		tables: [],
		users: []
	},
	getters: {
		getTables: state => state.tables,
		getUsers: state => state.users,
	},
	mutations: {
		SET_TABLES: (state, payload) => state.tables = payload,
		SET_USERS: (state, payload) => state.users = payload
	},
	actions: {
		setUsers({ commit }) {
			return axios
				.get("/listdispatches")
				.then(async (resp) => {
					const newTables = [
						{
							status_number: 1,
							status_id: '_itbiprefeitura',
							title: "ITBI Prefeitura",
							users: [],
						},
						{
							status_number: 2,
							status_id: '_calculoregistro',
							title: "Cálculo Registro",
							users: [],
						},
						{
							status_number: 3,
							status_id: '_pagamentoitbi',
							title: "Pagamento Registro e ITBI",
							users: [],
						},
						{
							status_number: 4,
							status_id: '_ressalvabancos',
							title: "Ressalvas Bancos",
							users: [],
						},
						{
							status_number: 5,
							status_id: '_protocartorial',
							title: "Protocolo Cartorial",
							users: [],
						},
						{
							status_number: 6,
							status_id: '_pendecatorial',
							title: "Pendências Cartoriais",
							users: [],
						},
						{
							status_number: 7,
							status_id: '_represcartorial',
							title: "Rapresentado. No Cartório",
							users: [],
						},
						{
							status_number: 8,
							status_id: '_concluido',
							title: "Concluído",
							users: [],
						},
					]
					await resp.data.forEach(user => {
						console.log(user)
						const { status_id } = user.despacho
						newTables[status_id - 1].users.push(user)
					});
					console.log(newTables)
					commit('SET_TABLES', newTables)
				})
				.catch((e) => {
					console.log(e.response)
				});
		},
		setTableUsers({ commit, state, dispatch }) {
			console.log(state.users)
			dispatch('setUsers')
				.then( async () => {
					const users = [];
					await state.tables.forEach((table) => {
						table.users.forEach((user) => {
							console.log(user)
							users.push(user);
						});
					});
					commit('SET_USERS', users) 
				})
		},
	}
}