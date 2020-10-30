import axios from '../../../plugins/axios'

export default {
  namespaced: true,
  state: {
    usuario: {
      titulo: 'Leandro de Souza Correa',
      acesso: 'Corretor',
      clientes: [
        {
          id: 1,
          nome: 'Jonathan',
        },
        {
          id: 2,
          nome: 'Ingrid'
        },
        {
          id: 3,
          nome: 'Fernando'
        },
      ]
    },
    usuarios: {},
    page: 1
  },
  getters: {
    getUsuarios: state => state.usuarios,
    getUsuario: state => state.usuario
  },
  mutations: {
    SET_USUARIOS: (state, payload) => state.usuarios = payload,
    SET_USUARIO: (state, payload) => state.usuario = payload
  },
  actions: {
    setUsuarios({ commit, state }) {
      axios
        .get(`/users?page=${state.page}`)
        .then(resp => {
          commit("SET_USUARIOS", resp.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    setUsuario({ commit, state }, payload) {
      commit("SET_USUARIO", payload)
      console.log(state.usuario)
    }
  }
}