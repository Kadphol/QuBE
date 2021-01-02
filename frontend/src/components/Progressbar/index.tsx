import React from 'react';
import { Iuser } from '../../type.modal';
import styles from './Progressbar.module.css';

function Progressbar(props:Iuser) {
  return (
    <div className="progressbar">
      <ul className={styles.progress}>
        <li className={(props.chapter! >= 1 ) ? styles.active: undefined}>Basic</li>
        <li >Qubits</li>
        <li>Measurement</li>
        <li>Gate</li>
        <li>Algorithm</li>
      </ul>
    </div>
  )
}

export default Progressbar;