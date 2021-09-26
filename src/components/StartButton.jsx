import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
    return (
        <StyledStartButton onClick={callBack}>Start Button</StyledStartButton>
    )
}

export default StartButton;