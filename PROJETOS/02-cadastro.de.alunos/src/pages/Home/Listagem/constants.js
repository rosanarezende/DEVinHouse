export const tableTranslation = {
  body: {
    emptyDataSourceMessage: "Nenhum registro para exibir",
    addTooltip: "Adicionar",
    deleteTooltip: "Deletar",
    editTooltip: "Editar informações do aluno",
    filterRow: {
      filterTooltip: "Filtrar",
    },
    editRow: {
      deleteText: "Tem certeza que deseja deletar essa linha?",
      cancelTooltip: "Cancelar",
      saveTooltip: "Salvar",
    },
  },
  toolbar: {
    searchTooltip: "Pesquisar...",
    searchPlaceholder: "Pesquisar...",
    nRowsSelected: "{0} linha(s) selecionada(s)",
  },
  pagination: {
    labelRowsSelect: "linhas",
    labelDisplayedRows: "{from}-{to} de {count}",
    firstTooltip: "Primeira página",
    previousTooltip: "Página anterior",
    nextTooltip: "Próxima página",
    lastTooltip: "Última página",
  },
  header: {
    actions: "",
  },
};

export const columns = [
  {
    title: "Aluno",
    field: "aluno.nome",
    cellStyle: {
      width: "20%",
      fontWeight: "bold",
      fontSize: "120%",
    },
  },
  {
    title: "Nascimento",
    field: "aluno.nascimento",
  },
  {
    title: "Turma",
    field: "aluno.turma",
  },
  {
    title: "Restrições Alimentares",
    field: "aluno.restricoesAlimentares.detalhes",
    cellStyle: {
      width: "40%",
    },
  },
];
