import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { NavDropdown } from 'react-bootstrap';

import './Profile.css';
import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint';

export default function Profile({user,setUser}) {

    const history = useHistory()

    const clear = () => {
        axios.put(`${ENDPOINT.URL}/updateInfo`, { unit: 0, chapter: 0, score:0}) // clear progress
        axios.put(`${ENDPOINT.URL}/updatePreSurvey`, { degree: 0, type: false}) // clear pre survey
        axios.put(`${ENDPOINT.URL}/updatePostSurvey`, { satisfy: 0, comment: null}) // clear post survey
        setUser(()=>({...user,unit: 0, chapter: 0, score:0}))
    }

    const logout = () => {
        history.push('/')
    }

    const next = () => {
        setUser(()=>({...user,unit: 0, chapter: user.chapter+1, score:0}))
    }

    const prev = () => {
        setUser(()=>({...user,unit: 0, chapter: user.chapter-1, score:0}))
    }

    const profileIcon = (<img className="circleBorder" src={user.image} width="30" height="30" alt="profile" />);
    
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <NavDropdown.Item className="ml-auto" >{user.name}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Chapter: {user.chapter+1}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >Unit: {user.unit+1}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" >High Score: {user.highscore}</NavDropdown.Item>
                {/* <NavDropdown.Item className="ml-auto" onClick={clear}>Clear</NavDropdown.Item> */}
                <NavDropdown.Item className="ml-auto" href={`${ENDPOINT.URL}/logout`} onClick={logout}>Logout</NavDropdown.Item>
                {/* <NavDropdown.Item className="ml-auto" onClick={next}>Next chapter</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" onClick={prev}>Prev chapter</NavDropdown.Item> */}
            </NavDropdown>  
      </React.Fragment>
    );
}