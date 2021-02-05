import React from 'react'
import backIcon from '../../assets/explore/backIcon.png'
import {Redirect,Link} from 'react-router-dom'
<<<<<<< HEAD
const sfxClick = require('../../assets/sound/sfx_click.mp3').default

export default function back({path}) {

    const click = new Audio(sfxClick)
    
    return (
        <Link to={path} >
            <img src={backIcon} onMouseDown={()=>click.play()} 
            style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} />
=======

export default function back({path}) {
    return (
        <Link to={path} >
            <img src={backIcon} style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} />
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
        </Link>
    )
}