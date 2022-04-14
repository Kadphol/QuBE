import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { NavDropdown } from 'react-bootstrap';

import './Profile.css';
import ENDPOINT from '@config/endpoint';

export default function Profile({user,setUser}) {

    const history = useHistory()

    const logout = () => {
        history.push('/')
    }

    const profileIcon = (<img className="circleBorder" src={user.image} width="30" height="30" alt="profile" />);
    
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <NavDropdown.Item className="ml-auto" >{user.name}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Chapter: {user.chapter+1}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Unit: {user.unit+1}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >High Score: {user.highscore}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" href={`${ENDPOINT.URL}/api/logout`} onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>  
      </React.Fragment>
    );
}