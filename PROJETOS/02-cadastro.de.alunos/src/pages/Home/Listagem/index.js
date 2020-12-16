import amigos from "../../../assets/amigos.svg";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

function Listagem() {
  return (
    <S.ListagemWrapper>
      <Typography variant="h3">Listagem de alunos</Typography>

      <S.Content>
        <img src={amigos} alt="amigos" />
        <S.PaperStyled>oi</S.PaperStyled>
      </S.Content>
    </S.ListagemWrapper>
  );
}

export default Listagem;
