import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled.div`
  width: ${props => (props.width ? props.width : "40px")};
  height: ${props => (props.height ? props.height : "40px")};
  ${props => props.backgroundColor && props.backgroundColor}
  border-radius: 50%;
  border: 4px solid ${props => (props.borderColor ? props.borderColor : "#ccc")};
  border-top-color: ${props =>
    props.borderTopColor ? props.borderTopColor : "#888"};
  animation: ${spinAnimation} 1s linear infinite;
`;
