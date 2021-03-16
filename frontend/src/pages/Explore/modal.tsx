import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sfxClick = require('@assets/sound/sfx_click.mp3').default

export default function UnitModal(props) {

  const mainColor = props.index == 3 ? '#D52027' : '#02A045'
  const altColor = props.index == 3 ? '#B71F2E' : '#01842D'
  const thirdColor = props.index == 3 ? '#D52027' : '#52DB89'
  const episodeText = props.index == 3 ? 'ตอนพิเศษ' : `ตอนที่ ${props.index + 1}`
  const click = new Audio(sfxClick)

  const text = {
    position: 'absolute',
    width: '615px',
    height: '79px',
    left: '0',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '35px',
    lineHeight: '75px',
    textAlign: 'center',
    color: mainColor,
  } as React.CSSProperties;

  const main = {
    position: 'relative',
    width: 'auto',
    height: '320px',
    border: `1px solid ${thirdColor}` ,
    borderRadius: '20px'
  } as React.CSSProperties;

  const Button = {
    position: 'absolute',
    width: '200px',
    height: '50px',
    top: '250px',
    borderRadius: '50px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '50px',
    cursor:'pointer'
  }

  const Button1 = { ...Button,
    textDecoration: 'none',
    left: '80px',
    background: '#F5EBED',
    color: thirdColor
  } as React.CSSProperties;

  const Button2 = { ...Button,
    textDecoration: 'none',
    left: '340px',
    background: thirdColor,
    color:'white'
  } as React.CSSProperties;

  const title = { ...text, top: '100px' }
  const titleEng = { ...text, top: '150px' }
  const episode = { ...text, top: '25px', fontSize:'50px', color: altColor }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <div style={main}>
          <span style={episode}>{episodeText}</span>
          <span style={title}>{props.item.title}</span>
          <span style={titleEng}>({props.item.titleEng})</span>
          <div onMouseDown={()=>click.play()} style={Button1} onClick={props.onHide}>หยุดพัก</div>
          <Link onMouseDown={()=>click.play()} to={props.item.path} style={Button2}>ผจญภัย</Link>
        </div>
      </Modal.Body>
    </Modal>
  );

}