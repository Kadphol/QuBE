import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ComingSoonModal(props) {

  const mainColor = '#8B90E3'
  const altColor = '#8B90E3'

  const text = {
    // position: 'absolute',
    width: 'autopx',
    height: '120px',
    marginTop: '100px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '35px',
    lineHeight: '120px',
    textAlign: 'center',
    color: mainColor,
  } as React.CSSProperties;

  const main = {
    position: 'relative',
    width: 'auto',
    height: '120px',
    border: `1px solid ${altColor}` ,
    borderRadius: '20px'
  } as React.CSSProperties;

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <div style={main}>
          <span style={text}>Coming soon</span>
        </div>
      </Modal.Body>
    </Modal>
  );

}