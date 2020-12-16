import styled from "styled-components";

export const Section1 = styled.section`
  position: relative;
  height: 65vh;
  background: rgba(100, 0, 0, 0.1);
  @media screen and (max-width: 900px) {
    height: 55vh;
  }

  #content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    text-shadow: 0px 0px 8px #01402e;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 35vw;
    h2 {
      margin-top: 6vh;
    }

    @media screen and (max-width: 1800px) {
      padding: 0 25vw;
      h2 {
        margin-top: 8vh;
      }
    }
    @media screen and (max-width: 1200px) {
      padding: 0 20vw;
    }
    @media screen and (max-width: 1000px) {
      padding: 0 15vw;
    }
    @media screen and (max-width: 850px) {
      padding: 0 5vw;
    }
  }

  #background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }

  #curve {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
  }
`;
