import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import adminSnackbar from './modules/adminSnackbar'
import tables from './modules/tables'
import user from './modules/user'

// Configuracoes
import configUsuarios from './modules/configuracoes/configUsuarios'

// Gerenciamento
import gerMidias from './modules/gerenciamento/gerMidias'
import gerClientes from './modules/gerenciamento/gerClientes'
import gerEmpreendimentos from './modules/gerenciamento/gerEmpreendimentos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    adminSnackbar,
    tables,
    user,
    configUsuarios,
    gerMidias,
    gerClientes,
    gerEmpreendimentos
  }
})
