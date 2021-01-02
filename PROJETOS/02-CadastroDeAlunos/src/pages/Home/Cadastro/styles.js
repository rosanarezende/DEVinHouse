import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const CadastroWrapper = styled.section`
  padding: 0 2em;

  h3 {
    @media screen and (max-width: 1200px) {
      margin-top: 2vh;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2vh 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 5vh;
  }

  #img-book {
    width: 19%;
    @media screen and (max-width: 1200px) {
      width: 45%;
    }
    @media screen and (max-width: 600px) {
      width: 75%;
    }
  }
`;

export const PaperStyled = styled(Paper)`
  padding: 2em;
  margin-bottom: 2vh;
  @media screen and (max-width: 1200px) {
    margin: 1vh 0 3vh;
  }

  .form {
    width: 70%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  .trinta,
  .quarenta,
  .sessenta,
  .setenta {
    margin-bottom: 0.5vh;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
  }

  #buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
