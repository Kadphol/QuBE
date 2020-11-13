import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../assets/login-logo.png';

interface ModalProps {
  show: boolean;
  onHide: boolean;
}

export default function LoginModal(prop: ModalProps) {
  return (
    <Modal 
      {...prop}
      size="lg"
      aria-lablelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={logo} alt="logo in login modal"/>
        <h4>เข้าสู่ระบบ</h4>
      </Modal.Body>

    </Modal>
  );
}