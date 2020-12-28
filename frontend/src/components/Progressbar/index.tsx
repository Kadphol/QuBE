import React from 'react';
import styles from './Progressbar.module.css';

class Progressbar extends React.Component {
  render() {
    return (
      <div className="progressbar">
        <ul className={styles.progress}>
          <li className={styles.active}>Basic</li>
          <li >Qubits</li>
          <li>Measurement</li>
          <li>Gate</li>
          <li>Algorithm</li>
        </ul>
      </div>
    )
  }
}

export default Progressbar;