import styled from "styled-components";

export const PageHome = styled.div`
  display: flex;
  flex-direction: column;

  .logo__navbar {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all ease-in-out 0.25s;

    &:hover {
      opacity: 0.5;
    }
  }

  main {
    padding: 1rem 15vw;
  }

  @media (max-width: 600px) {
    main {
      padding: 1rem 10vw;
    }
  }
`;
