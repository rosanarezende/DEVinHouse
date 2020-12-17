import parse from "html-react-parser";

import { camposContent } from "./constants";

import { Typography, Tooltip } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import * as S from "./styles";

const Detalhes = ({ item }) => {
  const { id, aluno, observacoes } = item;
  const observacoesHTML = parse(observacoes);
  // const [editar, setEditar] = useState(false);

  const editarDetalhes = () => {
    console.log("Editar detalhes do aluno", id);
  };

  const campos = camposContent(item);

  return (
    <S.SourceContainer>
      <S.SourceContainer>
        <Tooltip title={`Editar detalhes do aluno ${aluno.nome}`}>
          <S.EditIcon onClick={editarDetalhes}>
            <Edit />
          </S.EditIcon>
        </Tooltip>

        {campos.map((campo, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>
              {campo.title}
            </Typography>
            {campo.itens.map((j, inde) => (
              <div key={inde}>
                <Typography gutterBottom>
                  {j.subtitle && <S.TitleStyled>{j.subtitle}: </S.TitleStyled>}
                  {j.content}
                </Typography>
                {j.list?.map((i, ind) => (
                  <Typography gutterBottom key={ind}>
                    {i}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        ))}

        {observacoes !== "<p></p>\n" && (
          <div>
            <Typography variant="h6" gutterBottom>
              Observações
            </Typography>
            {observacoesHTML}
          </div>
        )}
      </S.SourceContainer>
    </S.SourceContainer>
  );
};

export default Detalhes;
