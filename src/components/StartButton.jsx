import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
    return (
        <StyledStartButton onClick={callBack}>Start</StyledStartButton>
    )
}

export default StartButton;