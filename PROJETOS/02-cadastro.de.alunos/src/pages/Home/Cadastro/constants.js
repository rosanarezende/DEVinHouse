const emergencia = [
  { id: 1, name: "PAIS" },
  { id: 2, name: "TIOS" },
  { id: 3, name: "AVÓS" },
  { id: 4, name: "PADRINHOS" },
  { id: 5, name: "OUTRO" },
];

export const turmas = [
  { id: 1, name: "Turma 1" },
  { id: 2, name: "Turma 2" },
  { id: 3, name: "Turma 3" },
  { id: 4, name: "Turma 4" },
  { id: 5, name: "Turma 5" },
];

const dataNoPassado = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  let mes = JSON.stringify(hoje.getMonth() + 1);
  if (mes < 10) {
    mes = "0" + mes;
  }
  let dia = hoje.getDate() - 1;
  if (dia < 10) {
    dia = "0" + dia;
  }
  return `${ano}-${mes}-${dia}`;
};

export const fieldsContent = [
  {
    name: "nome",
    label: "NOME",
    type: "text",
    className: "setenta",
    top: "Dados do Aluno",
  },
  {
    name: "nascimento",
    label: "DATA DE NASCIMENTO",
    type: "date",
    className: "trinta",
    shrink: true,
    max: dataNoPassado(),
  },
  {
    name: "turma",
    label: "TURMA",
    type: "text",
    className: "cem",
    select: true,
    data: turmas,
  },
  {
    name: "responsavel",
    label: "NOME",
    type: "text",
    className: "setenta",
    top: "Dados do responsável pela criança",
  },
  {
    name: "telefone",
    label: "TELEFONE",
    type: "text",
    className: "trinta",
    pattern: "[(]{1,}[0-9]{2,}[)]{1,}[ ]{1,}[0-9]{5,}[-]{1,}[0-9]{4,}",
    title: "Digite o telefone com DDD, espaço e traço, totalizando 11 números.",
  },
  {
    name: "emergenciaContato",
    label: "AVISAR",
    helper: "Em caso de emergência avisar",
    type: "text",
    className: "setenta",
    select: true,
    data: emergencia,
    top: "Contato de emergência",
  },
  {
    name: "emergenciaTelefone",
    label: "TELEFONE",
    helper: "Telefone para emergências",
    type: "text",
    className: "trinta",
    pattern: "[(]{1,}[0-9]{2,}[)]{1,}[ ]{1,}[0-9]{5,}[-]{1,}[0-9]{4,}",
    title: "Digite o telefone com DDD, espaço e traço, totalizando 11 números.",
  },
];

const vinculo = [
  { id: 1, name: "MÃE" },
  { id: 2, name: "PAI" },
  { id: 3, name: "TIA" },
  { id: 4, name: "TIO" },
  { id: 5, name: "AVÓ" },
  { id: 6, name: "AVÔ" },
  { id: 7, name: "MADRINHA" },
  { id: 8, name: "PADRINHO" },
  { id: 9, name: "OUTRO" },
];

export const authorizedFieldsContent = [
  {
    name: "autorizadoNome",
    label: "NOME",
    helper: "Pessoa autorizada a buscar a criança",
    type: "text",
    className: "setenta",
  },
  {
    name: "autorizadoVinculo",
    label: "GRAU DE PARENTESCO",
    helper: "Grau de parentesco da pessoa com a criança",
    type: "text",
    className: "trinta",
    select: true,
    data: vinculo,
  },
];
