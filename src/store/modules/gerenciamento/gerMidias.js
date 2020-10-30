import axios from '../../../plugins/axios'

export default {
  namespaced: true,
  state: {
    midias: [],
    midia: {}
  },
  getters: {
    getMidias: state => state.midias,
    getMidia: state => state.midia
  },
  mutations: {
    SET_MIDIAS: (state, payload) => state.midias = payload,
    SET_MIDIA: (state, payload) => state.midia = payload
  },
  actions: {
    setMidias({ commit }) {
      axios
        .get(`/clientes_midias`)
        .then(resp => {
          commit("SET_MIDIAS", resp.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    setMidia({ commit, state }, payload) {
      commit("SET_MIDIA", payload)
    }
  }
}