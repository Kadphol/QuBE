import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../assets/login-logo.png';
import axios from 'axios'
import styles from './LoginModal.module.css';

interface ModalProps {
  show: boolean;
  onHide: Function;
}

export default class LoginModal extends React.Component<ModalProps> {
  Login = (): void => {
    // axios.get('http://localhost/login')
    window.location.href = 'http://localhost/guestlogin'
  }
  guestLogin = (): void =>{
    // axios.get('http://localhost/guestlogin')
    window.location.href = 'http://localhost/guestlogin'
  }
  render() {
    return (
      <Modal 
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <div className={styles.logo}>
            <img src={logo} alt="logo in login modal"/>
          </div>
          <h4 className={styles.login}>เข้าสู่ระบบ</h4>
          <button className={`btn btn-primary ${styles.fblogin}`} onClick={this.Login}>
            เข้าสู่ระบบด้วย Facebook
          </button>
          <div className={styles.bot}>
            <a className={styles.line} onClick={this.guestLogin} href="#">หรือ เข้าสู่ระบบแบบ guest</a>
          </div>
        </Modal.Body>
  
      </Modal>
    );
  }
  
}