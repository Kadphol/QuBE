import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import '../../styles/Profile.css';
import {Iuser} from '../../type.modal'

class Profile extends React.Component<Iuser> {

    constructor(props:Iuser) {
        super(props);
    }
  
    render() {
    const profileIcon = (<img className="circleBorder" src={this.props.image} width="30" height="30"></img>);
    return (
      <React.Fragment>
            <NavDropdown className="ml-auto" title={profileIcon} id="basic-nav-dropdown">
                <a>{this.props.name}</a>
                <NavDropdown.Item className="ml-auto" href="http://localhost:80/logout">Logout</NavDropdown.Item>
            </NavDropdown>  
      </React.Fragment>
    );
}
}
export default Profile
