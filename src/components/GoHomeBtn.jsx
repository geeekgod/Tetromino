import React, { memo } from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const GoHomeBtn = ({ callBack }) => {
  return <StyledStartButton onClick={callBack}>Home</StyledStartButton>;
};

export default memo(GoHomeBtn);
