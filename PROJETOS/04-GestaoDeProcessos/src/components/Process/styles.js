import styled from "styled-components"
import { Paper } from "@material-ui/core"

export const ProcessWrapper = styled(Paper)`
  margin:  0 170px 20px;
  padding: 12px;
  display: flex;

  img {
    align-self: center;
    width: 84px;
    height: 84px;
    margin-right: 16px;
  }

  > div {
    width: 22.5%;
    margin-top: 30px;
    margin-right: 16px;

    .MuiTypography-h3 {
      margin-bottom: 14px;
    }

    .MuiTypography-body1{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 20vw;
    }
  }
`
