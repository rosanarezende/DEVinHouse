import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ListagemWrapper = styled.section`
  margin: 2vh 0 3vh;
  padding: 0 2em;

  h3 {
    @media screen and (max-width: 900px) {
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
    flex-direction: column-reverse;
    margin-bottom: 5vh;
  }

  img {
    width: 25%;
    @media screen and (max-width: 900px) {
      width: 80%;
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
`;
