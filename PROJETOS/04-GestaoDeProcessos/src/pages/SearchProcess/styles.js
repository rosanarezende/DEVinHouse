import styled from "styled-components"

export const Top = styled.div`
  display: flex;
  align-items: center;

  .subtitle {
    width: 118px;
  }

  .novo {
    width: 136px;
    height: 49px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #757575;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 50vw;
`

export const ContentWrapper = styled.div`
  margin:  ${props => props.appears ? "0 50px 0  170px" : "0 170px"};
  display: flex;

  .process{
    display: flex;
    flex-direction: column;
    width: ${props => props.appears ? "75%" : "100%"};
  }

  .detail {
    width: calc(100% - 30px);
    margin-left: 30px;
  }
`
