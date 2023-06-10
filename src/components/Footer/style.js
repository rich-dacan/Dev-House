import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.3rem;
  background-color: ${props => props.theme.grey4};
  color: #f0f0f0;
  height: 200px;
  border-top: 1px solid var(--color-primary);

  > h2 {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    > h2 {
      font-size: 1rem;
    }
  }
`;
