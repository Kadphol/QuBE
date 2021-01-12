import React from 'react';
import Message from './Message';
import styles from './DialogBox.module.css';

import next from '../../assets/explore/dialog/next.png';
import beck from '../../assets/explore/dialog/Beck-icon.png';


const DialogBox = () => {
  return (
    <div className={`container ${styles.dialogbox}`}>
      <div className={`left ${styles.icon}`}>
        <img src={beck} alt="test"/>
      </div>
      <div className="center">
        <Message message="สงสัยกันมั้ยว่า คอมพิวเตอร์แบบดั้งเดิมที่เราใช้กันอยู่ สามารถเข้าใจได้อย่างไร
ว่าเราป้อนค่าอะไรเข้าไปและเราต้องการให้แสดงผลอะไรออกมา"/>
      </div>
      <img className={`right ${styles.next}`} src={next} alt="next icon"/>
    </div>
  )
}

export default DialogBox;