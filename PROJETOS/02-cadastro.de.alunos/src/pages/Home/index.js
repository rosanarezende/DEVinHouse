import { Typography } from "@material-ui/core";
import * as S from "./styles";

import background from "../../assets/desenho.jpg";
import bottom from "../../assets/curve3.svg";

import Cadastro from "./Cadastro";
import Listagem from "./Listagem";

function Home() {
  return (
    <>
      <S.Section1>
        <img id="background" src={background} alt="imagem de fundo" />
        <img id="curve" src={bottom} alt="curva" />
        <div id="content">
          <Typography variant="h1" component="h2" align="center">
            Educação viva e consciente
          </Typography>
        </div>
      </S.Section1>

      <Cadastro />

      <Listagem />
    </>
  );
}

export default Home;