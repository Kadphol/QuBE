import React from 'react'
import backIcon from '../../assets/explore/backIcon.png'
import {Redirect,Link} from 'react-router-dom'

export default function back({path}) {
    return (
        <Link to={path} >
            <img src={backIcon} style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} />
        </Link>
    )
}