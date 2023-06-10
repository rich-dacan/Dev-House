import React from "react";
import { Loader } from "semantic-ui-react";

import { Container } from "./styles";

interface Props {
  text?: string;
}
const Loading: React.FC<Props> = ({ text }) => {
  return <Container>{text || "Carregando ..."}</Container>;
};

export default Loading;
