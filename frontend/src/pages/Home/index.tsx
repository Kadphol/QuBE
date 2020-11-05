import React from 'react';
import LoginButton from '../App/Login';
import './Home.css';

import logo from '../../assets/logo.png';
import name from '../../assets/name.png';
import qubie from '../../assets/Qubie-intro.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="intro-1 col-md-7">
              <img src={qubie} alt="qubie" />
            </div>
            <div className="intro-2 col-md-4">
              <img src={logo} alt="QuBE Logo" className="justify-content-center"/>
              <img src={name} alt="QuBE full name" />
              <p>
                  เราคือ สื่อการเรียนรู้ที่จะช่วยให้ทุกคนสามารถ
                เข้าใจในควอนตัมคอมพิวเตอร์ได้ง่ายขึ้นผ่าน สื่อที่ทุกคนจะได้รับความสนุกสอดแทรกกับ
                เนื้อหาความรู้เพื่อรับการเข้ามาของ
                ควอนตัมคอมพิวเตอร์ในอนาคต
              </p>
            </div>
          </div>
          <br />
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Home;
