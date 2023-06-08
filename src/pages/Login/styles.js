import styled from "styled-components";
import { keyframes } from "styled-components";


export const PageLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const showUp = keyframes`
    from {
        opacity: 0;
        transform: translateX(50%);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;
export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${showUp} 1s;

  form {
    text-align: center;
    width: 370px;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.4rem;
    background-color: ${(props) => props.theme.grey3};
    margin-bottom: 2rem;

  }

  @media (max-width:500px) {
    form {
      width: 80vw;

      input {
        
        font-size: small;
        
      }
    }
  }

`;

export const HeaderLogin = styled.header`
  display: flex;
  width: 370px;
  justify-content: center;
  gap: 20px;

  margin: 2rem 0;
`;
