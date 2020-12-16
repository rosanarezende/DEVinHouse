import books from "../../../assets/books.svg";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

function Cadastro() {
  return (
    <S.CadastroWrapper>
      <Typography variant="h3">Cadastro de alunos</Typography>

      <S.Content>
        <S.PaperStyled>
          <form>sss</form>
        </S.PaperStyled>
        <img src={books} alt="livros" />
      </S.Content>
    </S.CadastroWrapper>
  );
}

export default Cadastro;
