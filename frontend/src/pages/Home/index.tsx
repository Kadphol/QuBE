import React from 'react';
import LoginButton from '../App/Login';
import IntroButton from '../../components/IntroButton';
import './Home.css';

import logoName from '../../assets/intro-logo-name.png';
import qubie from '../../assets/Qubie-intro.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="intro-1 col-lg-7">
              <img src={qubie} alt="qubie" />
            </div>
            <div className="intro-2 col-lg-5">
              <img src={logoName} alt="QuBE Logo" />
              <div className="d-flex justify-content-center">
                <p className="text-center">
                    เราคือ สื่อการเรียนรู้ที่จะช่วยให้ทุกคนสามารถเข้าใจ<br />
                    ในควอนตัมคอมพิวเตอร์ได้ง่ายขึ้นผ่านสื่อที่ทุกคน <br />
                    จะได้รับความสนุกสอดแทรกกับเนื้อหาความรู้ <br />
                  เพื่อรับการเข้ามาของควอนตัมคอมพิวเตอร์ในอนาคต  <br />
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <IntroButton link="/explore" name="เริ่มต้นการผจญภัย" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9"> {/*test video*/}
                <iframe title="video preview" className="embed-responsive-item"
                frameBorder="0"  
                src="https://www.youtube.com/embed/C0DPdy98e4c" /> 
              </div>
            </div>
          </div>
          <div className="wave row">
            <div className="col-lg-5">
              <span>
              เทคโนโลยี  ควอนตัม สามารถทำให้เราสร้างควอนตัมคอมพิวเตอร์
ที่มีประสิทธิภาพในการประมวลผลเหนือคอมพิวเตอร์ในปัจจุบันได้หลายเท่าตัว
โดยสามารถนำไปใช้งานในด้านต่างๆ ไม่ว่าจะเป็นการถอดรหัสที่รวดเร็ว 
การพัฒนา AI ที่มีประสิทธิภาพรวมถึงการพยากรณ์ที่แม่นยำ
              </span>
            </div> 
          </div>
        </div>
        <LoginButton />
      </div>

    );
  }
}

export default Home;
