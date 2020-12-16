import styled from "styled-components";
import { Paper } from "@material-ui/core";

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

  img {
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

  form {
    #inputs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 2vh 0;
      gap: 10px;
      /* @media screen and (max-width: 1200px) {
        gap: 5px;
      }
      @media screen and (max-width: 900px) {
        gap: 10px;
      } */

      .dez {
        width: 10%;
      }
      .vinte {
        width: 20%;
      }
      .vinteCinco {
        width: 24%;
      }
      .trinta {
        width: 29%;
      }
      .quarenta {
        width: 40%;
      }
      .cinquenta {
        width: 50%;
      }
      .sessenta {
        width: 59%;
      }
      .setenta {
        width: 70%;
      }
      .dez,
      .vinte,
      .vinteCinco,
      .trinta,
      .quarenta,
      .cinquenta,
      .sessenta,
      .setenta {
        margin-bottom: 0.5vh;
        @media screen and (max-width: 900px) {
          width: 100%;
        }
      }
    }

    /* #button-wrapper {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;
    } */
  }
`;
