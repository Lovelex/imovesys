import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from 'vue-cookie'

Vue.use(VueRouter)

// Routes
import Login from '@/views/Login'
import Main from '@/views/Main'
import Home from '@/views/Home'

// Despachante
import Despachante from '@/views/despachante/Despachante'
import Despachos from '@/views/despachante/Despachos'

// Gerenciamento
import Gerenciamento from '@/views/gerenciamento/Gerenciamento'
import Clientes from '@/views/gerenciamento/Clientes'
import Imoveis from '@/views/gerenciamento/Imoveis'
import Documentos from '@/views/gerenciamento/Documentos'
import Modelos from '@/views/gerenciamento/Modelos'
import Vendas from '@/views/gerenciamento/Vendas'
import Relatorios from '@/views/gerenciamento/Relatorios'
import Midias from '@/views/gerenciamento/Midias'
import Unidades from '@/views/gerenciamento/Unidades'
import Empreendimentos from '@/views/gerenciamento/Empreendimentos'
import Filial from '@/views/gerenciamento/Filial'

// Configuracoes
import Configuracoes from '@/views/configuracoes/Configuracoes'
import Usuarios from '@/views/configuracoes/Usuarios'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'Main' }
    },
    {
      // beforeEnter(to, from, next) {
      //   cookie.get('token')
      //     ? next()
      //     : next({ name: 'Login' })
      // },
      path: '/home',
      component: Main,
      children: [
        {
          path: '',
          name: 'Main',
          component: Home
        },
        {
          path: 'despachante',
          name: 'Despachante',
          component: Despachante,
          children: [
            {
              path: 'despachos',
              name: "Despachos",
              component: Despachos
            }
          ]
        },
        {
          path: 'gerenciamento',
          name: 'Gerenciamento',
          component: Gerenciamento,
          children: [
            {
              path: "clientes",
              name: "Clientes",
              component: Clientes
            },
            {
              path: "imoveis",
              name: "Imoveis",
              component: Imoveis
            },
            {
              path: "unidades",
              name: "Unidades",
              component: Unidades
            },
            {
              path: "documentos",
              name: "Documentos",
              component: Documentos
            },
            {
              path: "modelos-de-contratos",
              name: "Modelos",
              component: Modelos
            },
            {
              path: "vendas",
              name: "Vendas",
              component: Vendas
            },
            {
              path: "relatorios",
              name: "Relatorios",
              component: Relatorios
            },
            {
              path: "clientes-midias",
              name: "Midias",
              component: Midias
            },
            {
              path: "empreendimentos",
              name: "Empreendimentos",
              component: Empreendimentos
            },
            {
              path: "filial",
              name: "Filial",
              component: Filial
            },
          ]
        },
        {
          path: 'configuracoes',
          name: 'Configuracoes',
          component: Configuracoes,
          children: [
            {
              name: 'Usuarios',
              path: 'usuarios',
              component: Usuarios
            }
          ]
        },
      ]
    },
    {
      beforeEnter(to, from, next) {
        cookie.get('token')
          ? next({ name: 'Main' })
          : next()
      },
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
