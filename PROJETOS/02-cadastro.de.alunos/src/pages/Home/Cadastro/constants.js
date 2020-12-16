
export const emergencia = [
  { id: 1, name: "PAIS" },
  { id: 2, name: "TIOS" },
  { id: 3, name: "AVÓS" },
  { id: 4, name: "PADRINHOS" },
  { id: 5, name: "OUTRO" },
];

export const fieldsContent = [
  {
    name: "nome",
    label: "NOME DO ALUNO",
    type: "text",
    className: "setenta",
  },
  {
    name: "nascimento",
    label: "DATA DE NASCIMENTO",
    type: "date",
    className: "trinta",
    shrink: true,
  },
  {
    name: "responsavel",
    label: "NOME DO RESPONSÁVEL",
    helper: "Nome do responsável pela criança",
    type: "text",
    className: "setenta",
  },
  {
    name: "telefone",
    label: "TELEFONE",
    helper: "Telefone de contato do responsável pela criança",
    type: "text",
    className: "trinta",
  },
  {
    name: "emergenciaContanto",
    label: "CONTATO DE EMERGÊNCIA",
    helper: "Em caso de emergência avisar",
    type: "text",
    className: "setenta",
    select: true,
    data: emergencia,
  },
  {
    name: "emergenciaTelefone",
    label: "TELEFONE",
    helper: "Telefone para Emergências",
    type: "text",
    className: "trinta",
  },
  
];

export const vinculo = [
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

//   shrink: true,

export const authorizedFieldsContent = [
  {
    name: "autorizadoNome",
    label: "NOME",
    helper: "Pessoa autorizada a buscar a criança",
    type: "text",
    className: "cinquenta",
  },
  // {
  //   name: "autorizadoVinculo",
  //   label: "VÍNCULO",
  //   helper: "Vínculo da pessoa com a criança",
  //   type: "text",
  //   className: "vinteCinco",
  //   select: true,
  //   data: vinculo,
  // },
  // {
  //   name: "emergenciaTelefone",
  //   label: "TELEFONE",
  //   type: "text",
  //   className: "vinteCinco",
  // },
]
