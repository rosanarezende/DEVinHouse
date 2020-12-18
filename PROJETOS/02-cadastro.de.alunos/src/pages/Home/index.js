import { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

import AlunoService from "../../service";

// import background from "../../assets/desenho.jpg";
import desenho500 from "../../assets/desenho-500.jpg";
import desenho1000 from "../../assets/desenho-1000.jpg";
import desenho2000 from "../../assets/desenho-2000.jpg";
import bottom from "../../assets/curve3.svg";

import Cadastro from "./Cadastro";
import Listagem from "./Listagem";

function Home() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    AlunoService.buscaAlunos().then((response) => setAlunos(response));
  }, []);

  return (
    <>
      <S.Section1>
        <picture>
          <source media="(min-width: 45em)" srcSet={desenho2000} />
          <source media="(min-width: 32em)" srcSet={desenho1000} />
          <img
            id="background"
            src={desenho500}
            alt="The president giving an award."
          />
        </picture>
        <img id="curve" src={bottom} alt="curva" />
        <div id="content">
          <Typography variant="h1" component="h2" align="center">
            Educação viva e consciente
          </Typography>
        </div>
      </S.Section1>

      <Cadastro setAlunos={setAlunos} />

      <Listagem alunos={alunos} setAlunos={setAlunos} />
    </>
  );
}

export default Home;
