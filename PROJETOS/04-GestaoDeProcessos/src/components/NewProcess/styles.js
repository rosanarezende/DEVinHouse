import styled from "styled-components";
import { IconButton, DialogContent } from "@material-ui/core";

export const CloseIcon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  color: grey;
`;

export const DialogContentStyled = styled(DialogContent)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

