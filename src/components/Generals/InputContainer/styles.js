import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

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

export const InputDirection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.8rem;
  transition: 0.4s;
  color: ${(props) => props.theme.grey0};

  >div {
    display:flex;
    gap: 0.5rem;
  }

  .eye {
    cursor:pointer;
  }

  label {
    color: ${(props) => props.theme.grey0};
    font-size: 0.8rem;

    span {
      ${(props) =>
        props.isError &&
        css`
          color: red;
        `};
    }
  }

  div {
    background-color: ${(props) => props.theme.grey2};
    display: flex;
    //font-size: 1rem;
    border: ${(props) => (props.isError ? "1px solid red" : "none")};
    border-radius: 5px;
    padding: 0.6rem 1rem;

    animation: ${showUp} 1s;

    ${(props) =>
      !props.delay &&
      css`
        animation-duration: 0s;
      `}

    animation-delay: ${(props) => props.delay};

    &:focus-within {
      border: 1px solid white;
    }
  }

  input,
  select {
    width: 95%;
    background-color: ${(props) => props.theme.grey2};
    border: none;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: ${(props) => props.theme.textwhite};
      box-shadow: 0 0 0 30px ${(props) => props.theme.grey2} inset !important;
    }
  }

  select {
    width: 100%;
    appearance: none;
    display: flex; 
  }

  select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: -3px;
}


  input /*select::selection */ {
    color: ${(props) => props.theme.textwhite};
  }

  select, input::placeholder {
    color: ${(props) => props.theme.grey1};
  }
`;
