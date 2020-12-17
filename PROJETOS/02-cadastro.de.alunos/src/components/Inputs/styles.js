import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;

  .trinta {
    width: 30%;
  }
  .quarenta {
    width: 40%;
  }
  .sessenta {
    width: 59%;
  }
  .setenta {
    width: 69%;
  }
  .cem {
    margin-bottom: 0.5vh;
    width: 100%;
  }

  .trinta,
  .quarenta,
  .sessenta,
  .setenta {
    margin-bottom: 0.5vh;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
  }

  #top {
    margin-top: 1vh;
    width: 69%;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
  }
`;
