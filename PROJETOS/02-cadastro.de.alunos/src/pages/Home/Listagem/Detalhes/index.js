import parse from "html-react-parser";

import { camposContent } from "./constants";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

const Detalhes = ({ item }) => {
  const observacoesHTML = parse(item.observacoes);
  const campos = camposContent(item);
  return (
    <S.SourceContainer>
      <S.SourceContainer>
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
        {item.observacoes !== "<p></p>\n" && (
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
