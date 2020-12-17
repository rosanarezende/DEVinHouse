import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const AppbarStyled = styled(AppBar)`
  height: 8vh;
  display: flex;
  justify-content: center;
  padding: 0 2vw;
  text-shadow: 1px 1px 2px rgba(87, 30, 94, 0.3);
`;

export const Logo = styled.img`
  height: 5vh;
  width: auto;
  cursor: pointer;
  margin-right: 15px;
  @media screen and (max-width: 800px) {
    height: 3vh;
  }
`;

export const DivGrow = styled.div`
  flex-grow: 1;
`;
