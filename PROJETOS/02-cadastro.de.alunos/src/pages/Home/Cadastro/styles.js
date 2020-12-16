import styled from "styled-components";
import { Paper, IconButton } from "@material-ui/core";

export const CadastroWrapper = styled.section`
  padding: 0 2em;

  h3 {
    @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 5vh;
  }

  #img-book {
    width: 20%;
    @media screen and (max-width: 900px) {
      width: 60%;
    }
  }
`;

export const PaperStyled = styled(Paper)`
  width: 70%;
  padding: 2em;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 1vh 0 3vh;
  }

  .trinta {
    width: 30%;
  }
  .quarenta {
    width: 40%;
  }
  .sessenta {
    width: 59%;
  }
  .setenta {
    width: 69%;
  }
  .cem {
    margin-bottom: 0.5vh;
    width: 100%;
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

  #inputs {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    /* margin-bottom: 2vh 0; */
  }

  #top {
    margin-top: 1vh;
    width: 69%;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
  }

  #restricao {
    align-self: flex-start;
  }

  #autorizados {
    margin: 1vh 0 0;

    #autorizado {
      position: relative;
      padding-right: 50px;
    }

    #adicionar {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  }

  #novo {
    padding: 3vh 0;
    @media screen and (max-width: 1600px) {
      padding: 2vh 0 1vh;
    }
  }

  #buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const CloseIcon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  color: gray;
  :hover {
    color: red;
  }
`;
