import React, { useEffect } from 'react'
import Tetris from '../components/Tetris'
import '../styles/Game.css'

const Game = () => {

    useEffect(()=>{
        document.title = "Play Game | Tetromino"
    },[]);

    return (
        <div>
            <Tetris/>
        </div>
    )
}

export default Game;
