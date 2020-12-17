import styled from "styled-components";

export const NovoWrapper = styled.div`
  padding: 3vh 0;
  @media screen and (max-width: 1600px) {
    padding: 2vh 0 1vh;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
