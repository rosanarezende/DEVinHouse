export const camposContent = (item) => {
  const {
    responsavel,
    emergencia,
    autorizadosBuscar,
    autorizacaoFotoVideo,
  } = item;
  return [
    {
      title: "Dados do Responsável pela criança",
      itens: [
        { subtitle: "Nome", content: responsavel.nome },
        { subtitle: "Telefone", content: responsavel.telefone },
      ],
    },
    {
      title: "Contato de emergência",
      itens: [
        { subtitle: "Avisar", content: emergencia.avisar },
        { subtitle: "Telefone", content: emergencia.telefone },
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
