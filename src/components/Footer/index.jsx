import React from "react";
import { Wrapper } from "./style";

export const Footer = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <h2>
        &copy; Todos os direitos reservados | 2021 - {new Date().getFullYear()}
      </h2>
    </Wrapper>
  );
};
