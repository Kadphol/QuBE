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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorNameMsg, setErrorNameMsg] = useState('');
  const [errorPasswordMsg, setErrorPasswordMsg] = useState('');
  const [errorConfirmPassMsg, setErrorConfirmPassMsg] = useState('');
  const [errorRegMsg, setErrorRegMsg] = useState('');
  const [errorLoginMsg, setErrorLoginMsg] = useState('');
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
    if(errorNameMsg === '' && errorPasswordMsg === '') {
      defaultErrorMsg();
      axios
        .post('/local-login', { name: name, password: password })
        .then(response => {
            window.location.href = ENDPOINT.URL
        })
        .catch(err => {
          if(err.response.status === 401) {
            setErrorLoginMsg('กรอกชื่อผู้ใช้งานหรือรหัสผ่านผิด');
          } else {
            setErrorLoginMsg('ไม่สามารถเข้าสู่ระบบได้');
          }
        });
    }
    
  };

  const registerUser = (e) => {
    e.preventDefault();
    if(errorNameMsg === '' && errorPasswordMsg === '' && errorConfirmPassMsg === '') {
      defaultErrorMsg();
      axios
        .post('/register', { name: name, password: password})
        .then(response => {
          window.location.href = ENDPOINT.URL;
        })
        .catch(err => {
          if(err.response.status === 401) {
            setErrorRegMsg('ชื่อผู้ใช้มีอยู่แล้วในระบบ');
          } else {
            setErrorRegMsg('ไม่สามารถลงทะเบียนได้');
          }
        });
    }
  };

  const handleLoginName = (e) => {
    setName(e.target.value.trim());
  };

  const handleLoginPassword = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleRegName = (e) => {
    setName(e.target.value.trim());
  };

  const handleRegPassword = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleRegConfirmPassword = (e) => {
    setConfirmPassword(e.target.value.trim());
  };

  const handleNameValid = (e) => {
    const input = e.target.value.trim();
    if(input.length === 0) {
      setErrorNameMsg('กรุณากรอกชื่อผู้ใช้งาน');
    } else if(input.length < 4) {
      setErrorNameMsg('ชื่อผู้ใช้ต้องมีความยาวมากกว่า 4 ตัวอักษร');
    } else {
      setErrorNameMsg('');
    }
  };

  const handlePasswordValid = (e) => {
    const input = e.target.value.trim();
    if(input.length === 0) {
      setErrorPasswordMsg('กรุณากรอกรหัสผ่าน');
    } else if(input.length < 4) {
      setErrorPasswordMsg('รหัสผ่านต้องมีความยาวมากกว่า 4 ตัวอักษร');
    } else {
      setErrorPasswordMsg('');
    }
  };

  const handleConfirmPassword = (e) => {
    if(confirmPassword.length > 0) {
      if(password !== confirmPassword) {
        setErrorConfirmPassMsg('รหัสผ่านไม่ตรงกัน');
      } else {
        setErrorConfirmPassMsg('');
      }
    } else {
      setErrorConfirmPassMsg('กรุณากรอกยืนยันรหัสผ่าน');
    }
  };

  const defaultErrorMsg = () => {
    setErrorNameMsg('');
    setErrorPasswordMsg('');
    setErrorRegMsg('');
    setErrorLoginMsg('');
    setErrorConfirmPassMsg('');
  };

  const setLogin = () => {
    setName('');
    setPassword('');
    setConfirmPassword('');
    defaultErrorMsg();
    setLoginModal(true);
  };

  const setRegister = () => {
    setName('');
    setPassword('');
    setConfirmPassword('');
    defaultErrorMsg();
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
                      onChange={handleLoginName} value={name}
                      maxLength={16} required/>
                    {errorLoginMsg && <p className='text-danger'>{errorLoginMsg}</p>}
                    {errorNameMsg && <p className='text-danger'>{errorNameMsg}</p>}
                  </div>
                  <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                    <label htmlFor='password'>รหัสผ่าน</label>
                    <input className='form-control' type='password' id="password"
                      onChange={handleLoginPassword} value={password}
                      maxLength={16} required />
                    {errorPasswordMsg && <p className='text-danger'>{errorPasswordMsg}</p>}
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
                        onChange={handleRegName} value={name}
                        onKeyUp={handleNameValid}
                        minLength={4} maxLength={16} required />
                      {errorRegMsg && <p className='text-danger'>{errorRegMsg}</p>}
                      {errorNameMsg && <p className='text-danger'>{errorNameMsg}</p>}  
                    </div>
                    <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                      <label htmlFor='password'>รหัสผ่าน</label>
                      <input className='form-control' type='password' id="password" 
                        onChange={handleRegPassword} value={password}
                        onKeyUp={handlePasswordValid}
                        minLength={4} maxLength={16} required />
                      {errorPasswordMsg && <p className='text-danger'>{errorPasswordMsg}</p>}
                    </div>
                    <div className={`form-group ${styles.formGroup} ${styles.formLabel}`}>
                      <label htmlFor='confirmPassword'>ยืนยันรหัสผ่าน</label>
                      <input className='form-control' type='password' id="confirmPassword" 
                        onChange={handleRegConfirmPassword} value={confirmPassword}
                        onKeyUp={handleConfirmPassword}
                        minLength={4} maxLength={16} required />
                      {errorConfirmPassMsg && <p className='text-danger'>{errorConfirmPassMsg}</p>}
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