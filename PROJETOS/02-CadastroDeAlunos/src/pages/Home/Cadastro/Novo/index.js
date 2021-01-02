import * as S from "./styles";
import { Typography, Button } from "@material-ui/core";

function Novo({ add }) {
  return (
    <S.NovoWrapper>
      <Typography variant="h6" component="h4" align="center" gutterBottom>
        Clique no botão para cadastrar um novo aluno
      </Typography>
      <br />
      <div id="buttons-wrapper">
        <Button
          name="novo"
          type="button"
          color="primary"
          variant="contained"
          onClick={add}
        >
          NOVO
        </Button>
      </div>
    </S.NovoWrapper>
  );
}

export default Novo;
