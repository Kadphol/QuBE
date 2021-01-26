import React from 'react';
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  onHide: Function;
}

export default function UnitModal(props:ModalProps) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <div>
          
        </div>
    </Modal>
  )
}