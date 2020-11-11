import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/brand.png';

import './NavigationBar.scoped.css';
import LoginButton from './LoginButton'
import Profile from './Profile'
import {Iuser} from '../../type.modal'

class NavigationBar extends React.Component<Iuser> {

  constructor(props:Iuser) {
      super(props);
  }

  render() {
    return (
      <div className="Navigation">
        <Navbar bg="light">
          <Navbar.Brand href="/">
            <img src={logo} alt="QuBE logo brand for navbar." />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="justify-content-end ml-auto">
              <NavLink exact to="/" className="nav-link">
                เริ่มต้นกับควอนตัม
              </NavLink>
              <NavLink to="/explore" className="nav-link">
                ผจญภัยในโลกควอนตัม
              </NavLink>
              <NavLink to="/playground" className="nav-link">
                สนามฝึกซ้อมควอนตัม
              </NavLink>
              <NavLink to="/challenge" className="nav-link">
                ท้าทายกับควอนตัม
              </NavLink>
              {this.props.loginStatus
              ?<Profile name={this.props.name} loginStatus={this.props.loginStatus} image={this.props.image}/>
              :<LoginButton/>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
