import React from 'react';
import styled from 'styled-components';

import Message from './Message';
import styles from './DialogBox.module.css';


import next from '../../assets/explore/dialog/next.png';
import beck from '../../assets/explore/dialog/Beck-icon.png';

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

const DialogBox = () => {
  return (
    <div style={{ paddingTop: '570px', height:'100%', position: 'static'}}>
      <IconDiv>
        <img src={beck} alt="test" className={styles.icon}/>
      </IconDiv>
      <MessageDiv>
        <Message message="สงสัยกันมั้ยว่า คอมพิวเตอร์แบบดั้งเดิมที่เราใช้กันอยู่ สามารถเข้าใจได้อย่างไร
  ว่าเราป้อนค่าอะไรเข้าไปและเราต้องการให้แสดงผลอะไรออกมา"/>
        <img className={`${styles.next}`} src={next} alt="next icon"/>
      </MessageDiv>
    </div>
  )
}

export default DialogBox;