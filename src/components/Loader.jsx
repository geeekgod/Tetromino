import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div>
            <div className='tetrominos'>
                <div className='tetromino box1'></div>
                <div className='tetromino box2'></div>
                <div className='tetromino box3'></div>
                <div className='tetromino box4'></div>
            </div>
        </div>
    )
}

export default Loader;
