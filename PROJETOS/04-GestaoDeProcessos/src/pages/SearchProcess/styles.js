import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }

  .subtitle {
    width: 118px;

    @media screen and (max-width: 900px) {
      width: 100%;
      margin-bottom: 10px;
      text-align: center;
    }
  }

  .novo {
    width: 136px;
    height: 49px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #757575;

    @media screen and (max-width: 900px) {
      margin: 5px auto 0;
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 50vw;
`;

export const ContentWrapper = styled.div`
  margin: ${(props) => (props.appears ? "0 50px 0  170px" : "0 170px")};
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 0 20px;
    flex-direction: column-reverse;
  }

  .process {
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.appears ? "75%" : "100%")};

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .detail {
    width: calc(100% - 30px);
    margin-left: 30px;

    @media screen and (max-width: 900px) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
    }
  }
`;
