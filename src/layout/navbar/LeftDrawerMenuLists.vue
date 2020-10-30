<template>
  <v-list>
    <v-list-group
    color="white"
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item :to="{ name: subItem.to }" v-for="subItem in item.items" :key="subItem.title">
        <v-list-item-content>
          <v-list-item-subtitle v-text="subItem.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        action: "mdi-circle-half-full",
        title: "Gerenciamento",
        items: [
          { title: "Imóveis", to: "Imoveis" },
          { title: "Filial", to: "Filial" },
          { title: "Empreendimentos", to: "Empreendimentos" },
          { title: "Unidades", to: "Unidades" },
          { title: "Clientes", to: "Clientes" },
          { title: "Documentos", to: "Documentos" },
          { title: "Modelos de contratos", to: "Modelos" },
          { title: "Relatório de vendas", to: "Vendas" },
          { title: "Relatórios", to: "Relatorios" },
          { title: "Clientes mídias", to: "Midias" },
          ],
      },
      {
        action: "mdi-vector-arrange-below",
        title: "Despachante",
        items: [
          { title: "Despacho", to: 'Despachos' },
        ],
      },
      {
        action: "mdi-handshake-outline",
        title: "Vendas",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-gavel",
        title: "Aluguéis",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-bank",
        title: "Financeiro",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-cogs",
        title: "Configurações",
        items: [{ title: "Usuários", to: 'Usuarios' }],
      },
    ],
  }),
};
</script>

<style>
</style>