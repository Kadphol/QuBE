import React from 'react';
import IntroButton from '../../components/IntroButton';
import './Home.scoped.css';

import logoName from '../../assets/intro/intro-logo-name.png';
import {ReactComponent as Qubie} from '../../svg/Qubie-intro.svg';
import footer from '../../assets/intro/intro-lower.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container-fluid">
          <div className="row intro">
            <div className="intro-1 col-lg-7">
              <Qubie className="svg-qubie" />
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
          <div className="row preview justify-content-center">
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9"> {/*test video*/}
                <iframe title="video preview" className="embed-responsive-item"
                frameBorder="0"  
                src="https://www.youtube.com/embed/C0DPdy98e4c" /> 
              </div>
            </div>
          </div>
          <div className="row wave">
            <div className="row subrow">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 why">
                <h2>ทำไมต้องควอนตัม</h2>
                <h3>ทำไมต้องควอนตัม</h3>
                <p>
                เทคโนโลยี  ควอนตัม สามารถทำให้เราสร้างควอนตัมคอมพิวเตอร์
                ที่มีประสิทธิภาพในการประมวลผลเหนือคอมพิวเตอร์ในปัจจุบันได้หลายเท่าตัว
                โดยสามารถนำไปใช้งานในด้านต่างๆ ไม่ว่าจะเป็นการถอดรหัสที่รวดเร็ว 
                การพัฒนา AI ที่มีประสิทธิภาพรวมถึงการพยากรณ์ที่แม่นยำ   
                </p>
              </div>
            </div>
            <div className="row subrow justify-content-end">
              <div className="col-lg-5"></div>
              <div className="col-lg-7 what">
                <h2>Quantum Computing คืออะไร</h2>
                <h3>Quantum Computing คืออะไร</h3>
                  <p>
                    ระบบคอมพิวเตอร์ที่ทำงานโดยใช้คุณสมบัติพิเศษของอะตอม
                  แทนการทำงานบนแผงวงจร ด้วยคุณสมบัติพิเศษเหล่านั้น
                  เราจึงสามารถพัฒนาคอมพิวเตอร์ที่มีประสิทธิภาพมากยิ่งขึ้น
                  </p>
              </div>
            </div>
          </div>
          <div className="row feature justify-content-center">
            <div className="col-5 align-self-center">
              <div className="head">
                <h1>QuBE มีอะไรบ้าง</h1>
              </div>
              <div className="feature-box feature-explore">
                <h2>การผจญภัยในโลกควอนตัม</h2>
                <p>
                  การผจญภัยไปกับเหล่านางฟ้าในดินแดนอันแสนพิศวง 
                  พร้อมกันกับการเรียนรู้เนื้อหาควอนตัมคอมพิวเตอร์
                  ผ่านบทเรียนอันแสนสนุก
                </p>
                <IntroButton link="/explore" name="สำรวจโลกควอนตัม" />
              </div>
              <div className="feature-box feature-playground">
                <h2>สนามฝึกซ้อมควอนตัม</h2>
                <p>
                  การฝึกซ้อมกำลังให้แข่งแกร่งผ่านการต่อวงจรจำลอง
                  ควอนตัมก่อนการต่อสู้กับเจ้ามังกรตัวร้าย
                </p>
                <IntroButton link="/playground" name="สำรวจโลกควอนตัม" />
              </div>
              <div className="feature-box feature-challenge">
                <h2>ท้าทายกับควอนตัม</h2>
                <p>
                  ร่วมต่อสู้กับเจ้ามังกรตัวร้ายด้วยบททดสอบความรู้ 
                  ความเข้าใจควอนตันคอมพิวเตอร์กับเหล่านางฟ้าทั้งหลาย
                </p>
                <IntroButton link="/challenge" name="สำรวจโลกควอนตัม" />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer ml-0 mr-0">
            <img src={footer} alt="footer" style={{width: "1425px"}}/>
        </footer>
      </div>

    );
  }
}

export default Home;
