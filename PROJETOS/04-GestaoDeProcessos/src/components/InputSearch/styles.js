import styled from "styled-components"
import { Paper } from "@material-ui/core";

export const PaperStyled = styled(Paper)`
  margin: ${props => props.margininput};
  width: 464px;
  padding: 2px 4px;
  display: flex;
  align-items: center;

  .iconButton {
    padding: 10px;
  }

  .inputBase{
    margin-left: 10px;
    flex: 1;
  }
`
