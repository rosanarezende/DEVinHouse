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
    width: ${(props) => (props.appears === "true" ? "42%" : "19%")};
    margin-top: ${(props) => (props.appears === "true" ? "10px" : "30px")};
    margin-right: 16px;

    @media screen and (max-width: 900px) {
      width: 100%
    }

    .MuiTypography-h3 {
      margin-bottom: ${(props) => (props.appears === "false" && "14px")};
      @media screen and (max-width: 900px) {
        margin-bottom: 5px;
      }
    }
  }

  .interested {
    width: ${(props) => (props.appears === "true" ? "90%" : "20%")};
  }

  .subject,
  .description {
    .MuiTypography-body1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${(props) => (props.appears === "true" ? "15vw" : "18vw")};

      @media screen and (max-width: 900px) {
        max-width: 100%;
      }
    }
  }

  img, .description {
    display: ${(props) => props.appears === "true" && "none"};
  }
`;
