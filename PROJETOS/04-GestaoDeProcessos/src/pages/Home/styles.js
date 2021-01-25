import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  min-height: 99vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20vw;

  @media screen and (max-width: 900px) {
    padding: 0 5vw;
  }
`;

export const LinkStyled = styled.span`
  color: #005b95;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
