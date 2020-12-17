import styled from "styled-components";

export const ConditionalSwitchWrapper = styled.div`
  .quarenta {
    width: 40%;
  }
  .sessenta {
    width: 59%;
  }

  .quarenta,
  .sessenta {
    margin-bottom: 0.5vh;
    @media screen and (max-width: 1600px) {
      width: 100%;
    }
  }

  #inputs {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
  }

  #restricao {
    align-self: flex-start;
  }
`;
