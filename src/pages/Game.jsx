import React, { useEffect } from 'react'
import Loader from '../components/Loader';
import Tetris from '../components/Tetris'
import '../styles/Game.css'

const Game = () => {
    const [loader, setLoader] = React.useState(false);
    useEffect(() => {
        setLoader(false);
        document.title = "Play Game | Tetromino"
        setInterval(() => {
            setLoader(true);
        }, 2000);
    }, []);

    return (
        <div>
            {loader ? (<Tetris />) : (<Loader />)}
        </div>
    )
}

export default Game;
