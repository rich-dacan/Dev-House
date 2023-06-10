import React from "react";
import { Spinner, SpinnerContainer } from "./styles";

const LoadingSpinner = ({
  width,
  height,
  color,
  backgroundColor,
  borderColor,
  borderTopColor,
}) => {
  return (
    <SpinnerContainer>
      <Spinner
        width={width}
        height={height}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderTopColor={borderTopColor}
      />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
