import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

import Message from './Message';
import styles from './DialogBox.module.css';


import nextIcon from '../../assets/explore/dialog/next.png';
const sfxDialog = require('../../assets/sound/sfx_dialog.mp3').default
const sfxClick = require('../../assets/sound/sfx_click.mp3').default


const MessageDiv = styled.div`
  width: 80%;
  height: 100px;
  text-align: left;
  display: inline-block;
  position: relative;
  background-color: #FFFFFF;
  border: 5px solid #FBE87E;
  border-radius: 50px;
  margin: 15px 50px;
  overflow: hidden;
  margin-top: 1%;
`;

const IconDiv = styled.div`
  border: 5px solid #FBE87E;
  background-color: #FFFFFF;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  z-index: 2;
`;

const DialogBox = ({img,message,next,showIcon=true,showNext=true}) => {

  const click = new Audio(sfxClick)

  return (
    <div style={{ paddingTop: '570px', height:'100%', position: 'static'}}>
      {showIcon
      ?<IconDiv>
        <img src={img} alt="test" className={styles.icon}/>
      </IconDiv>
      :null}
      <MessageDiv>
        <Message message={message} />
        {showNext?<img className={`${styles.next}`} src={nextIcon} alt="next icon" onMouseDown={()=>click.play()} onClick={next}/>:null}
      </MessageDiv>
    </div>
  )
}

export default DialogBox;