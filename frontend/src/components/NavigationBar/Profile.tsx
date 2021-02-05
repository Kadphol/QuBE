import React from 'react';
import { useHistory } from 'react-router-dom' 
import { NavDropdown } from 'react-bootstrap';

import './Profile.css';
import {Iuser} from '../../type.modal'
import axios from '../../config/axiosconfig'
import ENDPOINT from '../../config/endpoint'

export default function Profile({user,setUser}) {

    const history = useHistory()

    const clear = () => {
        axios.put(`${ENDPOINT.URL}/updateInfo`, { unit: 0, chapter: 0, score:0}) // clear progress
        setUser(()=>({...user,unit: 0, chapter: 0, score:0}))
    }

    const logout = () => {
        history.push('/')
    }

    const profileIcon = (<img className="circleBorder" src={user.image} width="30" height="30" alt="profile"></img>);
    
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <NavDropdown.Item className="ml-auto" >{user.name}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Chapter: {user.chapter}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Unit: {user.unit}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Score: {user.score}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" onClick={clear}>Clear</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" href={`${ENDPOINT.URL}/logout`} onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>  
      </React.Fragment>
    );
}