import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ProcessWrapper = styled(Paper)`
  margin-bottom: 20px;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;

  img {
    align-self: center;
    width: 84px;
    height: 84px;
    margin-right: 16px;
  }

  > div {
    width: ${(props) => (props.appears ? "42%" : "19%")};
    margin-top: ${(props) => (props.appears ? "10px" : "30px")};
    margin-right: 16px;

    .MuiTypography-h3 {
      margin-bottom: ${(props) => (!props.appears && "14px")};
    }
  }

  .interested {
    width: ${(props) => (props.appears ? "90%" : "20%")};
  }

  .subject,
  .description {
    .MuiTypography-body1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${(props) => (props.appears ? "15vw" : "18vw")};
    }
  }

  img, .description {
    display: ${(props) => props.appears && "none"};
  }
`;
