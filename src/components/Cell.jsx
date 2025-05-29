import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './styles/StyledCell';

const Cell = ({ type }) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color} />
    )
}

export default Cell;