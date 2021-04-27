import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundClose from '@assets/explore/chapter4/backgroundClose.png'
import Dialog from '@components/DialogBox'
import gustIcon from '@assets/explore/chapter4/gustIcon.png';
import gust from '@assets/explore/chapter4/gust.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import item1 from '@assets/explore/chapter4/unit1/item1.png';
import item2 from '@assets/explore/chapter4/unit1/item2.png';
import item3 from '@assets/explore/chapter4/unit1/item3.png';
import item4 from '@assets/explore/chapter4/unit1/item4.png';
import item5 from '@assets/explore/chapter4/unit1/item5.png';
import item6 from '@assets/explore/chapter4/unit1/item6.png';
import item7 from '@assets/explore/chapter4/unit1/item7.png';
import item8 from '@assets/explore/chapter4/unit1/item8.png';
import q1 from '@assets/explore/chapter4/unit1/q1.png';
import b1 from '@assets/explore/chapter4/unit1/b1.png';
import bv0 from '@assets/explore/chapter4/unit1/bv0.png';
import bv1 from '@assets/explore/chapter4/unit1/bv1.png';
import bunknown from '@assets/explore/chapter4/unit1/bunknown.png';
import item14 from '@assets/explore/chapter4/unit1/item14.png';
import item15 from '@assets/explore/chapter4/unit1/item15.png';
import item16 from '@assets/explore/chapter4/unit1/item16.png';
import arrow from '@assets/explore/chapter4/unit1/arrow.png';

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
`;

const ChoicesDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
                <Fly>
                    <img src={gust} style={{ position: 'absolute', left: '450px', top: '60px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        const Fadeout = styled.div`
    animation: ${keyframes`
    from {opacity:100%}
    75% {opacity:100%}
    to {opacity:0%}
    `} 3s ease-out forwards
`
        const Fadein = styled.div`
    animation: ${keyframes`
    from {opacity:0%}
    80% {opacity:0%}
    to {opacity:100%}
    `} 3.75s ease-out forwards
`
        return (
            <Main>
                <Content>
                    <Fadein>
                    <img src={item2} style={{ position: 'absolute', left: '230px', top: '140px', height: '400px' }} />
                    </Fadein>
                    <Fadeout>
                    <img src={item3} style={{ position: 'absolute', left: '230px', top: '140px', height: '400px' }} />
                    </Fadeout>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    render() {
        const Fadeout = styled.div`
    animation: ${keyframes`
    from {opacity:100%}
    75% {opacity:100%}
    to {opacity:15%}
    `} 3s ease-out forwards
`
const Slide = styled.div`
    animation: ${keyframes`
    from {transform:translateX(0px)}
    to {transform:translateX(300px)}
    `} 1s 4s ease-out forwards
`
const Slide2 = styled.div`
    animation: ${keyframes`
    from {transform:translateX(0px)}
    to {transform:translateX(300px)}
    `} 1s 5.5s ease-out forwards
`
        return (
            <Main>
                <Content>
                <Slide>
                <img src={q1} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />  
                </Slide>
                <Slide2>
                <img src={item7} style={{ position: 'absolute', left: '510px', top: '250px', height: '150px' }} />  
                </Slide2>
                <img src={item8} style={{ position: 'absolute', left: '490px', top: '220px', height: '200px' }} />  
                    <Fadeout>
                    <img src={item1} style={{ position: 'absolute', left: '400px', top: '140px', height: '400px' }} />
                    </Fadeout>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <img src={item4} style={{ position: 'absolute', left: '150px', top: '260px', height: '200px' }} />
                <img src={item5} style={{ position: 'absolute', left: '380px', top: '260px', height: '200px' }} />
                <img src={item6} style={{ position: 'absolute', left: '280px', top: '110px', height: '200px' }} />
                <img src={item8} style={{ position: 'absolute', left: '760px', top: '200px', height: '200px' }} />
                <p style={{ fontFamily: `'Kanit', sans-serif`, fontSize:'45px',position: 'absolute', left: '260px', top: '450px', height: '400px' }}>Logic Gate</p>
                <p style={{ fontFamily: `'Kanit', sans-serif`, fontSize:'45px',position: 'absolute', left: '720px', top: '450px', height: '400px' }}>Quantum Gate</p>
                </Content>
            </Main>);
    }
}

class F4 extends React.Component {
    state = {state:0}
    componentDidMount = () => {
        setInterval(()=>{
            this.setState({state:this.state.state+1})
        },1500)
    }
    render() {
        let {state} = this.state
        return (
            <Main>
                <Content>
                <div style={{ position: 'absolute', left: '280px', top: '330px', 
                height: '8px',width:'300px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '680px', top: '330px', 
                height: '8px',width:'300px' ,backgroundColor:state>=2?'#FBE87E':'grey'}}/>
                <img src={item6} style={{ position: 'absolute', left: '520px', top: '232px', height: '200px' }} />
                <img src={state===0?b1:bv0} style={{ position: 'absolute', left: '230px', top: '230px', height: '200px' }} />
                <img src={state>=2?bv1:bunknown} style={{ position: 'absolute', left: '840px', top: '230px', height: '200px' }} />
                </Content>
            </Main>);
    }
}

class F5 extends React.Component<any> {
    state = {state1:bunknown,state2:bunknown}
    click = new Audio(sfxClick)
    handleClick1 = (value) => {
        this.click.play()
        this.setState({state1:value})
    }
    handleClick2 = (value) => {
        this.click.play()
        this.setState({state2:value})
    }
    render() {
        return (
            <Main>
                <Content>
                <img src={item14} style={{ position: 'absolute', left: '850px', top: '30px', height: '250px' }} />
                <img src={item15} style={{ position: 'absolute', left: '850px', top: '290px', height: '250px' }} />
                <div style={{ position: 'absolute', left: '260px', top: '125px', 
                height: '8px',width:'300px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '260px', top: '190px', 
                height: '8px',width:'300px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '260px', top: '365px', 
                height: '8px',width:'300px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '260px', top: '430px', 
                height: '8px',width:'300px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '530px', top: '157px', 
                height: '8px',width:'170px' ,backgroundColor:'grey'}}/>
                <div style={{ position: 'absolute', left: '530px', top: '397px', 
                height: '8px',width:'170px' ,backgroundColor:'grey'}}/>
                <img src={item4} style={{ position: 'absolute', left: '400px', top: '55px', height: '200px' }} />
                <img src={item5} style={{ position: 'absolute', left: '400px', top: '300px', height: '200px' }} />
                <img src={bv1} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
                <img src={bv0} style={{ position: 'absolute', left: '200px', top: '160px', height: '100px' }} />
                <img src={bv1} style={{ position: 'absolute', left: '200px', top: '290px', height: '100px' }} />
                <img src={bv0} style={{ position: 'absolute', left: '200px', top: '400px', height: '100px' }} />
                <img src={this.state.state1} style={{ position: 'absolute', left: '650px', top: '105px', height: '100px' }} />
                <img src={bv0} onClick = {()=>{this.handleClick1(bv0)}}style={{ position: 'absolute', left: '660px', top: '210px', height: '50px', cursor:'pointer'}} />
                <img src={bv1} onClick = {()=>{this.handleClick1(bv1)}}style={{ position: 'absolute', left: '700px', top: '210px', height: '50px', cursor:'pointer'}} />
                <img src={this.state.state2} style={{ position: 'absolute', left: '650px', top: '345px', height: '100px' }} />
                <img src={bv0} onClick = {()=>{this.handleClick2(bv0)}}style={{ position: 'absolute', left: '660px', top: '450px', height: '50px', cursor:'pointer'}} />
                <img src={bv1} onClick = {()=>{this.handleClick2(bv1)}}style={{ position: 'absolute', left: '700px', top: '450px', height: '50px', cursor:'pointer'}} />
                {/* <img src={arrow} style={{ position: 'absolute', left: '677px', top: '280px', height: '50px', transform:'rotate(180deg)'}} />
                <img src={arrow} style={{ position: 'absolute', left: '677px', top: '430px', height: '50px' }} />
                 */}
                </Content>
                {
                 this.state.state1===bv0 && this.state.state2===bv1 &&
                 <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                 <Dialog showNext next={this.props.next} img={qubieIcon} message={"ฉันคิดว่าฉันเข้าใจการทำงานของมันแล้ว! ตารางค่าความจริงนี่ช่วยได้เยอะเลย!"} />
                 </div>   
                }
            </Main>);
    }
}

class F6 extends React.Component {
    render() {
const Slide = styled.div`
    animation: ${keyframes`
    from {transform:translateX(0px); }
    25% {transform:translateX(300px); }
    75% {transform:translateX(300px); }
    to {transform:translateX(0px); }
    `} 4s 1s ease-out forwards
`
const Spin = styled.div`
transform-origin: 590px 320px;
    animation: ${keyframes`
    from {transform:rotate(0deg)}
    50% {transform:rotate(0deg)}
    75% {transform:rotate(180deg)}
    to {transform:rotate(180deg)}
  `} 4s 1s ease-out forwards
`
const Fadeout = styled.div`
    animation: ${keyframes`
    from {opacity:100%}
    67% {opacity:100%}
    to {opacity:20%}
    `} 3s ease-out forwards
`
        return (
            <Main>
                <Content>
                    <Spin>
                <Slide>
                <img src={q1} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />  
                </Slide>
                </Spin>
                <Fadeout>
                <img src={item8} style={{ position: 'absolute', left: '490px', top: '220px', height: '200px' }} />  
                </Fadeout>
                </Content>
            </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6 }