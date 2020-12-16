// importar logo
import logo from "../../assets/andorinha.png";

import { Toolbar, Typography } from "@material-ui/core";
import * as S from "./styles";

function Header() {
  return (
    <S.AppbarStyled position="absolute" color="transparent">
      <Toolbar>
        <S.Logo src={logo} alt="logo" />
        <Typography component="h1" variant="h2">
          Escola Andorinha
        </Typography>
        <S.DivGrow />
      </Toolbar>
    </S.AppbarStyled>
  );
}

export default Header;
