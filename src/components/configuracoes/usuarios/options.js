export default {
  data: () => ({
    roleOptions: [
      {
        text: 'Administrador',
        value: "admin"
      },
      {
        text: 'Corretor',
        value: "corretor"
      },
      {
        text: 'Anaslita de Crédito',
        value: "ac"
      },
      {
        text: 'Correspondente',
        value: "correspondente"
      },
      {
        text: 'Gerente',
        value: "gerente"
      },
      {
        text: 'Despachante',
        value: "despachante"
      },
      {
        text: 'Locatário',
        value: "locatário"
      },
      {
        text: 'Supervisor',
        value: "supervisor"
      },
      {
        text: 'Corretor Sênior',
        value: "cs"
      },
      {
        text: 'Captador',
        value: "captador"
      },
    ],
    situacaoOptions: [
      {
        text: 'Ativo',
        value: "1"
      },
      {
        text: 'Desativado',
        value: "2"
      },
    ],
    proprietariosOptions: [
      {
        text: 'Sim',
        value: "S"
      },
      {
        text: 'Não',
        value: "N"
      },
    ]
  })
}