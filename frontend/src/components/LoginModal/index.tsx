import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../assets/login-logo.png';

import styles from './LoginModal.module.css';

interface ModalProps {
  show: boolean;
  onHide: boolean;
}

export default class LoginModal extends React.Component<ModalProps> {
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
          <a className={`btn btn-primary ${styles.fblogin}`} href="/login"> {/*test login*/}
            เข้าสู่ระบบด้วย Facebook
          </a>
          <div className={styles.bot}>
            <a className={styles.line} href="/login">หรือ เข้าสู่ระบบแบบ guest</a> {/*test login*/}
          </div>
        </Modal.Body>
  
      </Modal>
    );
  }
  
}