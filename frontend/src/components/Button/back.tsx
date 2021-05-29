import React from 'react';
import backIcon from '@assets/explore/backIcon.png';
import { Link } from 'react-router-dom';
const sfxClick = require('@assets/sound/sfx_click.mp3').default;

export default function back({path}) {

    const click = new Audio(sfxClick)
    
    return (
        <Link to={path} >
            <img src={backIcon} onMouseDown={()=>click.play()} 
            style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px', zIndex:5 }} alt="back button"/>
        </Link>
    )
}