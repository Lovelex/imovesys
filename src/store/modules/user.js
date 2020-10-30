export default {
	namespaced: true,
	state: {
		user: {}
	},
	getters: {
		getUser: state => state.user
	},
	mutations: {
		SET_USER: (state, payload) => state.user = payload
	},
	actions: {
		setUser({ commit }) {
			const user = JSON.parse(localStorage.getItem('user'))
			commit('SET_USER', user)
		},
		removeUser({ commit }) {
			commit('SET_USER', null)
		}
	}
}