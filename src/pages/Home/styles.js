import styled from "styled-components";

export const PageHome = styled.div`
  display: flex;
  flex-direction: column;

  .logo__navbar {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    cursor: pointer;
    transition: all ease-in-out 0.25s;

    &:hover {
      opacity: 0.5;
    }
  }

  main {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 15vw;
  }

  @media (max-width: 600px) {
    main {
      padding: 1rem 3vw;
    }
  }
`;
