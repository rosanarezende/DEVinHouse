import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const SourceContainer = styled.div`
  position: relative;
  margin: 2vh 2vw 3vh;

  > div {
    margin-bottom: 2vh;
  }
`;

export const TitleStyled = styled.span`
  font-weight: 600;
  font-style: oblique;
`;

export const EditIcon = styled(IconButton)`
  position: absolute;
  right: -2vw;
  top: 0;
  color: #01402e;
`;
