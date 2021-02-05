import React from 'react';
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import logo from '../../assets/login-logo.png';
import styles from './LoginModal.module.css';
import axios from '../../config/axiosconfig'
import ENDPOINT from '../../config/endpoint'

interface ModalProps {
  show: boolean;
  onHide: Function;
}

export default function LoginModal(props) {

  const history = useHistory()

  const Login = () => {
    window.location.href = `${ENDPOINT.URL}/login`
    history.push('/')
    
  }

  const guestLogin = () =>{
    axios.get(`${ENDPOINT.URL}/guestlogin`,{})
    .then( () => history.push('/'))
  }
  
  return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <div className={styles.logo}>
            <img src={logo} alt="logo in login modal"/>
          </div>
          <h4 className={styles.login}>เข้าสู่ระบบ</h4>
          <button className={`btn btn-primary ${styles.fblogin}`} onClick={Login}>
            เข้าสู่ระบบด้วย Facebook
          </button>
          <div className={styles.bot}>
            <a className={styles.line} onClick={guestLogin} href="/">หรือ เข้าสู่ระบบแบบ guest</a>
          </div>
        </Modal.Body>
      </Modal>
    );
  
}