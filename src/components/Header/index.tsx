import React from 'react';

import './styles.css';
import videoBackground from '../../assets/videos/bgVideo.webm';

function Header() {
    return (
        <div className="Header">
            <video className='bgVideo' src={videoBackground} autoPlay muted loop />
            <div className="textOnVideo">
                <h1 className='t1'>Bem-vindo</h1>
                <h1 className='t2'>ao meu site</h1>
                <p className='p1'>este site está em</p>
                <p className='p2'>desenvolvimento!</p>
            </div>
        </div>
    )
}

export default Header;

