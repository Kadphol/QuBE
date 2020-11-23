import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import './Profile.css';
import {Iuser} from '../../type.modal'

class Profile extends React.Component<Iuser> {

    render() {
    const profileIcon = (<img className="circleBorder" src={this.props.image} width="30" height="30" alt="profile"></img>);
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <NavDropdown.Item className="ml-auto" >{this.props.name}</NavDropdown.Item>
                <NavDropdown.Item className="ml-auto" href="http://localhost:80/logout">Logout</NavDropdown.Item>
            </NavDropdown>  
      </React.Fragment>
    );
}
}
export default Profile
