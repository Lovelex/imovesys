import axios from '../../../plugins/axios'

export default {
  namespaced: true,
  state: {
    empreendimentos: [],
    empreendimento: {}
  },
  getters: {
    getEmpreendimentos: state => state.empreendimentos,
    getEmpreendimento: state => state.empreendimento
  },
  mutations: {
    SET_EMPREENDIMENTOS: (state, payload) => state.empreendimentos = payload,
    SET_EMPREENDIMENTO: (state, payload) => state.empreendimento = payload
  },
  actions: {
    setEmpreendimentos({ commit }) {
      axios
        .get(`/algo`)
        .then(resp => {
          commit("SET_EMPREENDIMENTOS", resp.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    setEmpreendimento({ commit }, payload) {
      commit("SET_EMPREENDIMENTO", payload)
    }
  }
}