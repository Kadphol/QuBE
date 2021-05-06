import React from "react";
import styled, { keyframes } from "styled-components";
import Beck from "@assets/explore/chapter1/beck.png";
import BackgroundClose from "@assets/explore/chapter1/backgroundClose.png";
import cpu1 from "@assets/explore/chapter1/unit2/cpuandcom_1.png";
import cpuandbit1 from "@assets/explore/chapter1/unit2/cpuandbit_1.png";
import cpuandbit2 from "@assets/explore/chapter1/unit2/cpuandbit_2.png";
import bit0 from "@assets/explore/chapter1/unit2/bit0.png";
import bit1 from "@assets/explore/chapter1/unit2/bit1.png";
import question from "@assets/explore/chapter1/unit2/question_icon.png";
import line from "@assets/explore/chapter1/unit2/line.png";
import line2 from "@assets/explore/chapter1/unit2/line2.png";
import line3 from "@assets/explore/chapter1/unit2/line3.png";
import line4 from "@assets/explore/chapter1/unit2/line4.png";
import button from "@assets/explore/chapter1/unit2/button.png";
import circuit from "@assets/explore/chapter1/unit2/circuit.png";
import power from "@assets/explore/chapter1/quiz/item1.png";
import switchOn from "@assets/explore/chapter1/unit2/switch_on.png";
import switchOff from "@assets/explore/chapter1/unit2/switch_off.png";
import lightOn from '@assets/explore/chapter1/quiz/lightOn.png';
import lightOff from '@assets/explore/chapter1/quiz/lightOff.png';
const sfxClick = require('@assets/sound/sfx_click.mp3').default;

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const fade = keyframes`
    0% {opacity: 0%}
    100% {opacity: 100%}
`;

const FadeIn = styled.div`
  animation: ${fade} 0.5s forwards;
`;

const FadeOut = styled.div`
  animation: ${fade} 0.5s reverse forwards;
`;

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`
class F0 extends React.Component {
  render() {
    return (
      <Main>
        <Content style={{ backgroundImage: `url(${BackgroundClose})` }}>
          <Fly>
            <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck" />
          </Fly>
        </Content>
      </Main>
    );
  }
}

class F1 extends React.Component<any> {
  render() {
    return (
      <Main>
        <Content>
          <FadeIn>
            <img
              src={cpu1}
              style={{ position: "absolute", left: "227px", top: "120px" }}
              alt="CPU1"
            ></img>
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F2 extends React.Component<any> {
  render() {
    return (
      <Main>
        <Content>
          <FadeOut>
            <img
              src={cpu1}
              style={{ position: "absolute", left: "227px", top: "120px" }}
              alt="CPU1"
            ></img>
          </FadeOut>
          <FadeIn>
            <img
              src={cpuandbit1}
              style={{ position: "absolute", left: "130px", top: "120px" }}
              alt="CPU and bit 1"
            ></img>
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F3 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <FadeIn>
            <img
              src={cpuandbit2}
              style={{ position: "absolute", left: "130px", top: "120px" }}
              alt="CPU and bit 2"
            ></img>
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F4 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <img
            src={question}
            style={{ position: "absolute", top: "270px", left: "560px" }}
            alt="question icon"
          />
          <FadeIn>
            <img
              src={bit0}
              style={{ position: "absolute", top: "230px", left: "230px" }}
              alt="zero bit"
            />
            <img
              src={bit1}
              style={{ position: "absolute", top: "230px", left: "840px" }}
              alt="one bit"
            />
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F5 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "420px",
              filter: "grayscale(1)",
            }}
            alt="power line off"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "740px",
              filter: "grayscale(1)",
            }}
            alt="power line off"
          />
          <img
            src={bit0}
            style={{ position: "absolute", top: "230px", left: "845px" }}
            alt="zero bit"
          />
          <FadeIn>
            <img
              src={switchOff}
              style={{
                position: "absolute",
                width: "200px",
                height: "100px",
                top: "290px",
                left: "545px",
              }}
              alt="switch off"
            />
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F6 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "420px",
            }}
            alt="power line on"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "740px",
              filter: "grayscale(1)",
            }}
            alt="power line off"
          />
          <img
            src={bit0}
            style={{ position: "absolute", top: "230px", left: "845px" }}
            alt="zero bit"
          />
          <img
            src={switchOff}
            style={{
              position: "absolute",
              width: "200px",
              height: "100px",
              top: "290px",
              left: "545px",
            }}
            alt="switch off"
          />
        </Content>
      </Main>
    );
  }
}

class F7 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "420px",
            }}
            alt="power line on"
          />
          <img
            src={line}
            style={{
              position: "absolute",
              width: "140px",
              top: "330px",
              left: "740px",
            }}
            alt="power line on"
          />
          <img
            src={bit1}
            style={{ position: "absolute", top: "230px", left: "845px" }}
            alt="one bit"
          />
          <img
            src={switchOn}
            style={{
              position: "absolute",
              width: "200px",
              height: "100px",
              top: "290px",
              left: "545px",
            }}
            alt="switch on"
          />
        </Content>
      </Main>
    );
  }
}

class F8 extends React.Component {
  state = {
    switches: [false, false, false]
  }

  switchTop = [70, 240, 420];
  lineTop = [110, 275, 460];
  bitTop = [60, 225, 410];
  lightTop = [60, 225, 410];

  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line3}
            style={{
              position: "absolute",
              top: "110px",
              left: "332px",
            }}
            alt="power multiple line"
          />
          {
            this.state.switches.map((item, index) => (
              <React.Fragment>
                <img src={item ? switchOn : switchOff} style={{ position: 'absolute', width: "150px", height: "75px", top: `${this.switchTop[index]}px`, left: '480px' }} alt="light switch" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '630px' }} alt="power line" />
                <img src={item ? bit1 : bit0} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.bitTop[index]}px`, left: '760px' }} alt="bit" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '842px' }} alt="power line" />
                <img src={item ? lightOn : lightOff} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.lightTop[index]}px`, left: '965px' }} alt="light bulb" />
              </React.Fragment>
            ))
          }
        </Content>
      </Main>
    );
  }
}

class F9 extends React.Component<any> {
  state = {
    switches: [false, false, false]
  }

  click = new Audio(sfxClick);

  switchTop = [70, 240, 420];
  lineTop = [110, 275, 460];
  bitTop = [60, 225, 410];
  lightTop = [60, 225, 410];

  handleClick = (index) => {
    let switches = this.state.switches;
    switches[index] = !switches[index];
    this.setState({ switches: switches })
    if (switches[0] && switches[1] && switches[2]) this.props.next();
  }

  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line3}
            style={{
              position: "absolute",
              top: "110px",
              left: "332px",
            }}
            alt="power multiple line"
          />
          {
            this.state.switches.map((item, index) => (
              <React.Fragment>
                <img src={item ? switchOn : switchOff} style={{ position: 'absolute', width: "150px", height: "75px", top: `${this.switchTop[index]}px`, left: '480px', cursor: 'pointer', zIndex: 2 }}
                  onMouseDown={() => this.click.play()}
                  onClick={() => this.handleClick(index)}
                  alt="light switch" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '630px' }} alt="power line" />
                <img src={item ? bit1 : bit0} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.bitTop[index]}px`, left: '760px' }} alt="bit" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '842px' }} alt="power line" />
                <img src={item ? lightOn : lightOff} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.lightTop[index]}px`, left: '965px' }} alt="light bulb" />
              </React.Fragment>
            ))
          }
        </Content>
      </Main>
    );
  }
}

class F10 extends React.Component {
  state = {
    switches: [true, true, true]
  }

  switchTop = [70, 240, 420];
  lineTop = [110, 275, 460];
  bitTop = [60, 225, 410];
  lightTop = [60, 225, 410];

  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line3}
            style={{
              position: "absolute",
              top: "110px",
              left: "332px",
            }}
            alt="power multiple line"
          />
          {
            this.state.switches.map((item, index) => (
              <React.Fragment>
                <img src={item ? switchOn : switchOff} style={{ position: 'absolute', width: "150px", height: "75px", top: `${this.switchTop[index]}px`, left: '480px' }} alt="light switch" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '630px' }} alt="power line" />
                <img src={item ? bit1 : bit0} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.bitTop[index]}px`, left: '760px' }} alt="bit" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '842px' }} alt="power line" />
                <img src={item ? lightOn : lightOff} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.lightTop[index]}px`, left: '965px' }} alt="light bulb" />
              </React.Fragment>
            ))
          }
        </Content>
      </Main>
    );
  }
}

class F11 extends React.Component {
  state = {
    switches: [true, true, true]
  }

  switchTop = [70, 240, 420];
  lineTop = [110, 275, 460];
  bitTop = [60, 225, 410];
  lightTop = [60, 225, 410];

  render() {
    return (
      <Main>
        <Content>
          <img
            src={power}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: "230px",
              left: "243px",
            }}
            alt="power icon"
          />
          <img
            src={line3}
            style={{
              position: "absolute",
              top: "110px",
              left: "332px",
            }}
            alt="power multiple line"
          />
          {
            this.state.switches.map((item, index) => (
              <React.Fragment>
                <img src={item ? switchOn : switchOff} style={{ position: 'absolute', width: "150px", height: "75px", top: `${this.switchTop[index]}px`, left: '480px' }} alt="light switch" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '630px' }} alt="power line" />
                <img src={item ? bit1 : bit0} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.bitTop[index]}px`, left: '760px' }} alt="bit" />
                <img src={line2} style={{ position: 'absolute', width: '150px', height: '5px', top: `${this.lineTop[index]}px`, filter: item ? 'none' : 'grayscale(1)', left: '842px' }} alt="power line" />
                <img src={item ? lightOn : lightOff} style={{ position: 'absolute', width: '100px', height: '100px', top: `${this.lightTop[index]}px`, left: '965px' }} alt="light bulb" />
              </React.Fragment>
            ))
          }
        </Content>
      </Main>
    );
  }
}

class F12 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <FadeIn>
            <img
              src={circuit}
              style={{
                position: 'absolute',
                width: '550px',
                height: '550px',
                left: '400px'
              }}
              alt="circuit"
            />
          </FadeIn>
        </Content>
      </Main>
    );
  }
}

class F13 extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <img
            src={circuit}
            style={{
              position: 'absolute',
              width: '550px',
              height: '550px',
              left: '500px',
              zIndex: 2
            }}
            alt="circuit"
          />
          <FadeIn>
            <img
              src={button}
              style={{
                position: 'absolute',
                left: '360px',
                top: '235px'
              }}
              alt="button"
            />
            <img
              src={line4}
              style={{
                position: 'absolute',
                top: '30px',
                left: '440px',
                zIndex: -1
              }}
              alt="multiple power line for circuit"
            />
          </FadeIn>
        </Content>
      </Main>
    );
  }
}


class F14 extends React.Component {
  render() {
    return (
      <Main>
        <Content style={{ backgroundImage: `url(${BackgroundClose})` }}>
          <Fly>
            <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck"/>
          </Fly>
        </Content>
      </Main>
    );
  }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14 };
