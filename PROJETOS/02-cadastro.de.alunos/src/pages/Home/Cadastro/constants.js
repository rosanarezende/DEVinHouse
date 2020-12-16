export const vinculo = [
  { id: 1, name: "PAI/MÃE" },
  { id: 2, name: "TIO/TIA" },
  { id: 3, name: "AVÔ/AVÓ" },
  { id: 4, name: "PADRINHO/MADRINHA" },
  { id: 5, name: "OUTRO" },
];

export const textFieldsContent = [
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
  },
  {
    name: "responsavel",
    label: "NOME DO RESPONSÁVEL",
    type: "text",
    className: "setenta",
  },
  {
    name: "telefone",
    label: "TELEFONE DO RESPONSÁVEL",
    type: "text",
    className: "trinta",
  },
  {
    name: "emergenciaNome",
    label: "NOME",
    helper: "Em caso de emergência avisar esta pessoa",
    type: "text",
    className: "cinquenta",
  },
  {
    name: "emergenciaVinculo",
    label: "VÍNCULO",
    helper: "Vínculo do contato com a criança",
    type: "text",
    className: "vinteCinco",
    select: true,
    data: vinculo,
  },
  {
    name: "emergenciaTelefone",
    label: "TELEFONE",
    type: "text",
    className: "vinteCinco",
  },
];

//   shrink: true,
