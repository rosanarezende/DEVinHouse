import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 15vw;
  background: rgba(100, 0, 0, 0.1);

  @media screen and (max-width: 900px) {
    padding: 0 10vw;
  }

  picture  {
    display: flex;
    align-items: center;
  }

  #rosana-logo {
    opacity: 0.6;
  }

  #social {
    display: flex;
  }

  .social-media {
    height: 3vh;
    margin: 0 1vw;
    @media screen and (max-width: 900px) {
      margin: 0 2.5vw;
    }
  }

  .social-media:hover {
    opacity: 0.6;
  }

  #copyright {
    opacity: 0.8;
    @media screen and (max-width: 900px) {
      font-size: 0.6rem;
    }
  }
`;
