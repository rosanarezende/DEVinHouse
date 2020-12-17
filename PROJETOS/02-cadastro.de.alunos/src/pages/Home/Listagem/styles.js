import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ListagemWrapper = styled.section`
  margin: 2vh 0 3vh;
  padding: 0 2em;

  h3 {
    @media screen and (max-width: 1200px) {
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
    flex-direction: column-reverse;
    margin-bottom: 5vh;
  }

  img {
    width: 25%;
    @media screen and (max-width: 1200px) {
      width: 60%;
    }
    @media screen and (max-width: 600px) {
      width: 80%;
    }
  }
`;

export const PaperStyled = styled(Paper)`

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 1vh 0 3vh;
  }

  .MuiTableBody-root {
    tr {
      background: rgba(100, 100, 100, 0.03);
    }
  }

  .MuiTableCell-root {
    padding: 16px 6px;
    
  }

  .MuiTableCell-head{
    font-size: min(16px, 4.5vw) !important;
    font-weight: bold ;
    background-color: #EFE8DD !important;
    color: #591521;
  }

  
`;
