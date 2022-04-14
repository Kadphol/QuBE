import React from 'react';
import styled from 'styled-components';

import Message from './Message';
import styles from './DialogBox.module.css';


import nextIcon from '@assets/explore/dialog/next.png';
const sfxClick = require('@assets/sound/sfx_click.mp3').default


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

const nextButtonStyle = {
  cursor: 'pointer',
  position: 'flex',
  marginTop: '19px'
}

const DialogBox = ({img,message,next,showIcon=true,showNext=true,nextStyle={}}) => {

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
        {showNext?<img style={{...nextButtonStyle,...nextStyle} as React.CSSProperties} src={nextIcon} alt="next icon" onMouseDown={()=>click.play()} onClick={next}/>:null}
      </MessageDiv>
    </div>
  )
}

export default DialogBox;