import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../assets/login-logo.png';
import axios, {AxiosInstance,AxiosRequestConfig} from 'axios'
import styles from './LoginModal.module.css';

interface ModalProps {
  show: boolean;
  onHide: Function;
}

const config: AxiosRequestConfig = {
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
}
const instance: AxiosInstance = axios.create(config);

export default class LoginModal extends React.Component<ModalProps> {

  Login = (): void => {
    window.location.href = 'http://localhost/login'
  }

  guestLogin = (): void =>{
    instance.get('http://localhost/guestlogin',{})
    .then( () => window.location.href = 'http://localhost:3000')
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