import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const InputListWrapper = styled.div`
  #inputs {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
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

  .trinta {
    width: 30%;
  }
  .setenta {
    width: 69%;
  }

  .trinta,
  .setenta {
    margin-bottom: 0.5vh;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
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
