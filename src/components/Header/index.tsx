import React from 'react';

import './styles.css';
import videoBackground from '../../assets/videos/bgVideo.webm';

function Header() {
    return (
        <div className="Header">
            <video src={videoBackground} autoPlay muted loop></video>
            <div className="content">
                <h1>Bem-vindo</h1>
                <h3>ao meu site</h3>
                <p>este site está em desenvolvimento!</p>
            </div>
        </div>
    )
}

export default Header;

