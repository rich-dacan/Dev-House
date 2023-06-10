import styled from "styled-components";

export const Tech = styled.li`
  div {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(3) {
    flex-direction: row;
  }
`;

export const ImagePrincipal = styled.div`
  width: 5rem;
  height: 3rem;
  padding: 0.3rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;
