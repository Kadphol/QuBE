import React from 'react';
import { Iuser } from '@src/type.modal';
import styles from './Progressbar.module.css';

function star(star?:number) {
  switch(star) {
    case(1): {
      return styles.star1;
    }
    case(2): {
      return styles.star2;
    }
    case(3): {
      return styles.star3;
    }
    default: {
      return styles.available;
    }
  }
}

function Progressbar(props:Iuser) {
  return (
    <React.Fragment>
      <ul className={styles.progress}>
        <li className={
          (props.chapter! >= 1 ) ? star(props.star![0])
          : undefined }>พื้นฐาน</li>
        <li className={
          (props.chapter! >= 2 ) ? star(props.star![1])
          : undefined }>คิวบิต</li>
        <li className={
          (props.chapter! >= 3 ) ? star(props.star![2])
          : undefined }>การวัด</li>
        <li className={
          (props.chapter! >= 4 ) ? star(props.star![3])
          : undefined }>ควอนตัมเกต</li>
        <li className={
          (props.chapter! >= 5 ) ? star(props.star![4])
          : undefined }>อัลกอริทึม</li>
      </ul>
    </React.Fragment>
  )
}

export default Progressbar;