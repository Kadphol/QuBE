import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/brand.png';
import LoginModal from '../LoginModal';

import './NavigationBar.scoped.css';
import Profile from './Profile'
import {Iuser} from '../../type.modal'
import { userContext } from '../../context/userContext'

type navState =  {
  modalShow: boolean
}

class NavigationBar extends React.Component<Iuser, navState> {

  constructor(props:Iuser) {
      super(props);
      this.state = {
        modalShow: false,
      };
      
  }

  showModal = (): void => {
    if(!this.props.loginStatus) this.setState(state => ({modalShow:true}))
  }

  hideModal = (): void => {
    this.setState({modalShow:false})
  }

  render() {
    return (
      <div className="Navigation">
        <LoginModal show={ this.state.modalShow } onHide={this.hideModal}/> {/* close modal*/}
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
              <NavLink to="playground" className="nav-link">
                สนามฝึกซ้อมควอนตัม
              </NavLink>
              <NavLink to="/challenge" className="nav-link">
                ท้าทายกับควอนตัม
              </NavLink>
              <userContext.Consumer>
                { ({user,setUser}) => 
                  user.loginStatus
                  ?<Profile user={user} setUser={setUser}/>
                  : <button className="btn btn-primary nav-login-button" onClick={this.showModal}>เข้าสู่ระบบ </button>
                }
              </userContext.Consumer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
