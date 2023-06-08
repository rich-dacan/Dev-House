import styled from "styled-components";

export const PageHome = styled.div`
  display: flex;
  flex-direction: column;

  main {
    padding: 1rem 15vw;
  }

  @media (max-width:600px) {
    main {
        padding: 1rem 10vw;
    }
  }
`;
