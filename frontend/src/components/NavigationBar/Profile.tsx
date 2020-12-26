import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import axios, {AxiosInstance,AxiosRequestConfig} from 'axios'

import './Profile.css';
import {Iuser} from '../../type.modal'

const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  }
const instance: AxiosInstance = axios.create(config);

class Profile extends React.Component<Iuser> {

    constructor(props:Iuser) {
        super(props);
    }
    
    save(){
        instance.post('http://localhost/updateExplore',{updateid:1})
    }

    render() {
    const profileIcon = (<img className="circleBorder" src={this.props.image} width="30" height="30" alt="profile"></img>);
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <NavDropdown.Item className="ml-auto" >{this.props.name}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" onClick={this.save}>Save</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" href="http://localhost:80/logout">Logout</NavDropdown.Item>
            </NavDropdown>  
      </React.Fragment>
    );
}
}
export default Profile
