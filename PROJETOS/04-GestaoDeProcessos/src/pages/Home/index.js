import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

import NewProcess from "../../components/NewProcess";
import InputSearch from "../../components/InputSearch";

function Home() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <S.HomeWrapper>
      <Typography align="center" color="primary" variant="h1">
        Busca de processos
      </Typography>

      <InputSearch 
        text="Pesquise por uma informação do processo"
        inconClick={() => history.push("/search")}
        marginInput="30px 0 77px"
      />

      <Typography gutterBottom align="center">
        Você pode criar um novo processo{" "}
        <S.LinkStyled onClick={() => setOpen(true)}>clicando aqui</S.LinkStyled>
      </Typography>

      <NewProcess open={open} setOpen={setOpen} />
    </S.HomeWrapper>
  );
}

export default Home;
