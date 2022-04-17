import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import logo from '@assets/login-logo.png';
import styles from './LoginModal.module.css';
import axios from '@config/axiosconfig'
import ENDPOINT from '@config/endpoint'

export default function LoginModal(props) {

  const history = useHistory();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginModal, setLoginModal] = useState(true);

  const Login = () => {
    window.location.href = `${ENDPOINT.URL}/api/login`;
    history.push('/');
    
  }

  const guestLogin = () => {
    axios.get(`/guestlogin`)
      .then( () => window.location.href = ENDPOINT.URL);
  };

  const loginUser = (e) => {
    e.preventDefault();
    if(name === '' || password === '') {

    } else {
      axios
        .post('/local-login', { name: name, password: password})
        .then(response => {
          if(response.status === 401) {
            
          }
        })
    }
  };

  const registerUser = (e) => {
    e.preventDefault();
    if(name === '' || password === '') {

    } else {
      axios
        .post('/register', { name: name, password: password})
        .then(response => {
          if(response.status === 401) {
            
          }
        })
    }
  };

  const handleLoginName = (e) => {
    setName(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegName = (e) => {
    setName(e.target.value);
  };

  const handleRegPassword = (e) => {
    setPassword(e.target.value);
  };

  const setLogin = () => {
    setLoginModal(true);
  };

  const setRegister = () => {
    setLoginModal(false);
  };
  
  return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <div className={styles.logo}>
            <img src={logo} alt="logo in login modal"/>
          </div>
          { 
            loginModal && 
              <>
                <h4 className={styles.login}>เข้าสู่ระบบ</h4>
                <form onSubmit={loginUser}>
                  <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                    <label htmlFor='name'>ชื่อผู้ใช้</label>
                    <input className='form-control' id='name' 
                      onChange={handleLoginName} value={name}/>
                  </div>
                  <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                    <label htmlFor='password'>รหัสผ่าน</label>
                    <input className='form-control' type='password' id="password"
                      onChange={handleLoginPassword} value={password}/>
                  </div>
                  <div className={`form-group ${styles.formGroup}`}>
                    <button className={`form-control btn btn-primary ${styles.fblogin} ${styles.formButton}`} type='submit'>
                      เข้าสู่ระบบ
                    </button>
                  </div>
                </form>
                {/* <button className={`btn btn-primary ${styles.fblogin}`} onClick={Login}>
                  เข้าสู่ระบบด้วย Facebook
                </button> */}
                <div>
                  <a className={styles.subtext} onClick={setRegister} role="button" href='javascript:void(0);'>ยังไม่ได้ลงทะเบียนใช่ไหม? คลิกเลย</a>
                </div>
                <div className={styles.bot}>
                  <a className={styles.line} onClick={guestLogin} href="/">หรือ เข้าสู่ระบบแบบ guest</a>
                </div>
              </>
            }
            {
              !loginModal &&
                <>
                  <h4 className={styles.login}>ลงทะเบียน</h4>
                  <form onSubmit={registerUser}>
                    <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                      <label htmlFor='name'>ชื่อผู้ใช้</label>
                      <input className='form-control' id='name' 
                        onChange={handleRegName} value={name}/>
                    </div>
                    <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                      <label htmlFor='password'>รหัสผ่าน</label>
                      <input className='form-control' type='password' id="password" 
                        onChange={handleRegPassword} value={password}/>
                    </div>
                    <div className={`form-group ${styles.formGroup}`}>
                      <button className={`form-control btn btn-primary ${styles.fblogin} ${styles.formButton}`} type='submit'>
                        ลงทะเบียน
                      </button>
                    </div>
                  </form>
                  <div className={styles.bot}>
                    <a className={styles.subtext} onClick={setLogin} role="button" href='javascript:void(0);'>เคยลงทะเบียนแล้ว? เข้าสู่ระบบ</a>
                  </div>
                </>
            }
        </Modal.Body>
      </Modal>
    );
  
}