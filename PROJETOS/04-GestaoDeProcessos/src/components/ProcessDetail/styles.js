import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ProcessDetailWrapper = styled(Paper)`
  width: 100%;
  position: relative;
  padding: 16px;

  > div {
    margin-bottom: 20px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 21px;
    top: 21px;
  }

  .MuiTypography-h3 {
    margin-bottom: 5px;
  }

  .top {
    display: flex;

    img {
      height: 120px;
      width: 120px;
      margin-right: 20px;
    }

    .top_content {
      display: flex;
      width: 100%;
      flex-wrap: wrap;

      .process-number {
        margin-right: 30px;
      }

      .subject {
        margin-top: 13px;
        width: 100%;
      }
    }
  }

  .interested {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .MuiTypography-body1 {
      width: 45%;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 0;

    .remove {
      color: #757575;
    }

    button {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 9px;
      width: 136px;
    }
  }
`;
