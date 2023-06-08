import styled from "styled-components";

export const NavHome = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.grey2};
  position: fixed;
  padding: 1rem 15vw;
  background-color: ${(props) => props.theme.grey4};

  >div {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width:600px) {
        padding: 1rem;
  }

  @media (max-width:350px) {
        button {
          padding: 0.2rem 0.5rem ;
        }
  }
`;
