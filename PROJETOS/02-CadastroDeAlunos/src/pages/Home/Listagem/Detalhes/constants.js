import { telefoneMask } from "../../../../utils/constants";

export const camposContent = (item) => {
  const {
    responsavel,
    emergencia,
    autorizadosBuscar,
    autorizacaoFotoVideo,
  } = item;
  const responsavelTefone = telefoneMask(responsavel.telefone.toString());
  const emergenciaTefone = telefoneMask(emergencia.telefone.toString());
  return [
    {
      title: "Dados do Responsável pela criança",
      itens: [
        { subtitle: "Nome", content: responsavel.nome },
        { subtitle: "Telefone", content: responsavelTefone },
      ],
    },
    {
      title: "Contato de emergência",
      itens: [
        { subtitle: "Avisar", content: emergencia.avisar },
        { subtitle: "Telefone", content: emergenciaTefone },
      ],
    },
    {
      title: "Pessoas autorizadas a buscar a criança",
      itens: [{ list: autorizadosBuscar }],
    },
    {
      title:
        "Concedeu autorização para uso escolar de fotos e vídeos da criança?",
      itens: [{ content: autorizacaoFotoVideo ? "Sim" : "Não" }],
    },
  ];
};
