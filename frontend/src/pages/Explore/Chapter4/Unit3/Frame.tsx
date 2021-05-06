import React from 'react';
import styled, { keyframes } from 'styled-components';
import Question from '@components/Question'
import backgroundClose from '@assets/explore/chapter4/backgroundClose.png'
import Dialog from '@components/DialogBox'
import gustIcon from '@assets/explore/chapter4/gustIcon.png';
import gust from '@assets/explore/chapter4/gust.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import q1 from '@assets/explore/chapter4/unit3/q1.png'
import qv0 from '@assets/explore/chapter4/unit3/qv0.png'
import qv1 from '@assets/explore/chapter4/unit3/qv1.png'
import qvp from '@assets/explore/chapter4/unit3/qv+.png'
import gate from '@assets/explore/chapter4/unit3/item8.png'
import x from '@assets/explore/chapter4/unit3/x.png'
import y from '@assets/explore/chapter4/unit3/y.png'
import z from '@assets/explore/chapter4/unit3/z.png'
import h from '@assets/explore/chapter4/unit3/h.png'
import cx from '@assets/explore/chapter4/unit3/cx_Inuse.png'
import ccx from '@assets/explore/chapter4/unit3/ccx_Inuse.png'
import cxIcon from '@assets/explore/chapter4/unit3/cx.png'
import ccxIcon from '@assets/explore/chapter4/unit3/ccx.png'
import czIcon from '@assets/explore/chapter4/unit3/cz.png'
import cczIcon from '@assets/explore/chapter4/unit3/ccz.png'
import axis from '@assets/explore/chapter4/unit3/axis.png'
import sphere from '@assets/explore/chapter4/unit3/sphere.png'
import dot from '@assets/explore/chapter4/unit3/dot.png'

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

const SlideControl = styled.div`
animation: ${keyframes`
from {transform:translateX(0px); }
30% {transform:translateX(0px); }
40% {transform:translateX(300px); }
70% {transform:translateX(300px); }
80% {transform:translateX(600px); }
to {transform:translateX(600px); }
`} 10s ease-out forwards
`
const SlideGate = styled.div`
animation: ${keyframes`
from {transform:translateX(0px); }
30% {transform:translateX(0px); }
40% {transform:translateX(100px); }
50% {transform:translateX(100px); }
60% {transform:translateX(300px); }
70% {transform:translateX(300px); }
80% {transform:translateX(600px); }
to {transform:translateX(600px); }
`} 10s ease-out forwards
`
const Spin = styled.div`
transform-origin: 295px 425px;
animation: ${keyframes`
from {transform:rotate(0deg)}
60% {transform:rotate(0deg)}
70% {transform:rotate(-180deg)}
to {transform:rotate(-180deg)}
`} 10s ease-out forwards
`
const Spin2 = styled.div`
transform-origin: 295px 475px;
animation: ${keyframes`
from {transform:rotate(0deg)}
60% {transform:rotate(0deg)}
70% {transform:rotate(-180deg)}
to {transform:rotate(-180deg)}
`} 10s ease-out forwards
`
const Spin3 = styled.div`
transform-origin: 295px 175px;
animation: ${keyframes`
from {transform:rotate(0deg)}
60% {transform:rotate(0deg)}
70% {transform:rotate(-180deg)}
to {transform:rotate(-180deg)}
`} 10s ease-out forwards
`
const Fadeaxis = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {opacity:0%}
60% {opacity:0%}
61% {opacity:60%}
70% {opacity:60%}
71% {opacity:0%}
to {opacity:0%}
`} 10s ease-out forwards
`
const Fadetarget = styled.div`
animation: ${keyframes`
from {opacity:100%}
40% {opacity:100%}
50% {opacity:20%}
70% {opacity:20%}
80% {opacity:100%}
to {opacity:100%}
`} 10s ease-out forwards
`
const Fadequbit = styled.div`
animation: ${keyframes`
from {opacity:0%}
20% {opacity:0%}
30% {opacity:100%}
80% {opacity:100%}
90% {opacity:0%}
to {opacity:0%}
`} 10s ease-out forwards
`
const Fade1 = styled.div`
animation: ${keyframes`
from {opacity:100%}
20% {opacity:100%}
30% {opacity:0%}
to {opacity:0%}
`} 10s ease-out forwards
`
const Fade2 = styled.div`
animation: ${keyframes`
from {opacity:0%}
80% {opacity:0%}
90% {opacity:100%}
to {opacity:100%}
`} 10s ease-out forwards
`
const Fadecontent = styled.div`
animation: ${keyframes`
from {opacity:0%}
10% {opacity:0%}
15% {opacity:100%}
to {opacity:100%}
`} 10s ease-out forwards
`
const Fadegate = styled.div`
animation: ${keyframes`
from {opacity:100%}
10% {opacity:100%}
15% {opacity:0%}
to {opacity:0%}
`} 10s ease-out forwards
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
                    <img src={gust} style={{ position: 'absolute', left: '500px', top: '60px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '567px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '581px', top: '175px',
                            height: '150px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '567px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '581px', top: '175px',
                            height: '150px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 
                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '80px', height: '180px' }} />
                    </SlideControl>
                    <SlideGate>
                            <Spin>
                                <img src={q1} style={{ position: 'absolute', left: '200px', top: '330px', height: '180px' }} />
                            </Spin>
                    </SlideGate>
                    <Fadetarget>
                        <img src={gate} style={{ position: 'absolute', left: '477px', top: '310px', height: '220px' }} />
                    </Fadetarget>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '567px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '581px', top: '175px',
                            height: '150px', width: '10px', opacity: '100%'
                        }} />
                    <SlideControl>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '80px', height: '180px' }} />
                    </SlideControl>
                    <SlideGate>
                                <img src={q1} style={{ position: 'absolute', left: '200px', top: '330px', height: '180px' }} />
                    </SlideGate>
                    <Fadetarget>
                        <img src={gate} style={{ position: 'absolute', left: '477px', top: '310px', height: '220px' }} />
                    </Fadetarget>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <Fadegate>
                <img src={cxIcon} style={{ position: 'absolute', left: '477px', top: '210px', height: '220px' }} />
                </Fadegate>
                <Fadecontent>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '330px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv1} style={{ position: 'absolute', left: '800px', top: '330px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{
                            backgroundColor: 'red', position: 'absolute', left: '575px', top: '365px',
                            height: '140px', width: '4px', transform: 'rotate(54deg)', opacity: '60%'
                        }} />
                    </Fadeaxis>
                    <SlideGate>
                        <Fadequbit>
                            <img src={axis} style={{ position: 'absolute', left: '210px', top: '330px', height: '180px' }} />
                            <Spin>
                                <img src={sphere} style={{ position: 'absolute', left: '210px', top: '330px', height: '180px' }} />
                                <img src={dot} style={{ position: 'absolute', left: '288px', top: '340px', height: '10px' }} />
                            </Spin>
                        </Fadequbit>
                    </SlideGate>
                    <Fadetarget>
                        <img src={cx} style={{ position: 'absolute', left: '477px', top: '310px', height: '220px' }} />
                    </Fadetarget>
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '567px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '581px', top: '175px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '567px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '581px', top: '175px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 
                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '80px', height: '180px' }} />
                    </SlideControl>
                 </Fadecontent>
                </Content>
            </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <Fadegate>
                <img src={ccxIcon} style={{ position: 'absolute', left: '477px', top: '210px', height: '220px' }} />
                </Fadegate>
                <Fadecontent>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '380px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv1} style={{ position: 'absolute', left: '800px', top: '380px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{
                            backgroundColor: 'red', position: 'absolute', left: '575px', top: '415px',
                            height: '140px', width: '4px', transform: 'rotate(54deg)', opacity: '60%'
                        }} />
                    </Fadeaxis>
                    <SlideGate>
                        <Fadequbit>
                            <img src={axis} style={{ position: 'absolute', left: '210px', top: '380px', height: '180px' }} />
                            <Spin2>
                                <img src={sphere} style={{ position: 'absolute', left: '210px', top: '380px', height: '180px' }} />
                                <img src={dot} style={{ position: 'absolute', left: '288px', top: '390px', height: '10px' }} />
                            </Spin2>
                        </Fadequbit>
                    </SlideGate>
                    <Fadetarget>
                        <img src={ccx} style={{ position: 'absolute', left: '477px', top: '360px', height: '220px' }} />
                    </Fadetarget>
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '567px', top: '110px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '581px', top: '135px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '567px', top: '110px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '581px', top: '135px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 
                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '40px', height: '180px' }} />
                    </SlideControl>
                    <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '567px', top:'280px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '581px', top: '305px',
                            height: '88px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '567px', top: '280px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '581px', top: '305px',
                            height: '88px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 
                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '210px', height: '180px' }} />
                    </SlideControl>
                    </Fadecontent>
                </Content>
            </Main>);
    }
}

class F5 extends React.Component <any> {
    state = {click:false}
    render() {
        return (
            <Main>
                 <Content>
                 <Fadegate>
                <img src={czIcon} style={{ position: 'absolute', left: '477px', top: '210px', height: '220px' }} />
                </Fadegate>
                <Fadecontent>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '330px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '330px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{
                            backgroundColor: 'red', position: 'absolute', left: '592px', top: '365px',
                            height: '140px', width: '4px', opacity: '60%'
                        }} />
                    </Fadeaxis>
                    
                    <Fadetarget>
                    <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '577px', top: '390px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '577px', top: '390px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    </Fadetarget> 
                    </Fadetarget>
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '577px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '591px', top: '175px',
                            height: '222px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '577px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '591px', top: '175px',
                            height: '222px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 

                    <SlideGate>
                        <Fadequbit>
                            <img src={axis} style={{ position: 'absolute', left: '210px', top: '330px', height: '180px' }} />
                            <Spin>
                                <img src={sphere} style={{ position: 'absolute', left: '210px', top: '330px', height: '180px' }} />
                            </Spin>
                            <img src={dot} style={{ position: 'absolute', left: '288px', top: '340px', height: '10px' }} />
                        </Fadequbit>
                    </SlideGate>

                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '80px', height: '180px' }} />
                    </SlideControl>
                    </Fadecontent>
                </Content>
                {
                 this.state.click === false &&
                 <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                 <Dialog showNext next={()=>this.setState({click:true})} img={gustIcon} 
                 message={`ต่อไป Controlled-Z gate หรือ CZ gate คล้ายกันกับ CNOT gate เพียงแต่เปลี่ยนจาก Pauli-X เป็น Pauli-Z แทน
                 อย่าลืมว่าการหมุนแกน Z ไม่มีผลกับ |0>`} />
                 </div>   
                }
                {
                 this.state.click === true &&
                 <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                 <Dialog showNext next={this.props.next} img={qubieIcon} 
                 message={"อ๊ะ มันแปลก ๆ นะ ทำไมสัญลักษณ์ทั้งสองด้านของ Controlled-Z gate ถึงเหมือนกันล่ะ แล้วจะรู้ได้ยังไงว่าด้านไหนเป็นส่วนควบคุม"} />
                 </div>   
                }
            </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (
            <Main>
                 <Content>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '80px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '80px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{
                            backgroundColor: 'red', position: 'absolute', left: '592px', top: '98px',
                            height: '140px', width: '4px', opacity: '60%'
                        }} />
                    </Fadeaxis>
                    
                    <Fadetarget>
                    <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '577px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '577px', top: '150px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    </Fadetarget> 
                    </Fadetarget>

                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '577px', top: '390px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '591px', top: '175px',
                            height: '222px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '577px', top: '390px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '591px', top: '175px',
                            height: '222px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 

                    <SlideGate>
                        <Fadequbit>
                            <img src={axis} style={{ position: 'absolute', left: '210px', top: '80px', height: '180px' }} />
                            <Spin3>
                                <img src={sphere} style={{ position: 'absolute', left: '210px', top: '80px', height: '180px' }} />
                            </Spin3>
                            <img src={dot} style={{ position: 'absolute', left: '288px', top: '90px', height: '10px' }} />
                        </Fadequbit>
                    </SlideGate>

                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '330px', height: '180px' }} />
                    </SlideControl>
                </Content>
            </Main>);
    }
}

class F7 extends React.Component<any> {

    render() {
        return (<Main>
            <Content>
            <Fadegate>
                <img src={cczIcon} style={{ position: 'absolute', left: '477px', top: '210px', height: '220px' }} />
                </Fadegate>
                <Fadecontent>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '380px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '380px', height: '180px' }} />
                    </Fade2>

                    <Fadetarget>
                    <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '570px', top: '450px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '570px', top: '450px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                    </Fadetarget> 
                    </Fadetarget>

                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '570px', top: '110px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '584px', top: '135px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '570px', top: '110px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '584px', top: '135px',
                            height: '168px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 

                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '40px', height: '180px' }} />
                    </SlideControl>

                    <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '570px', top:'280px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: '#FBE87E', position: 'absolute', left: '584px', top: '305px',
                            height: '147px', width: '10px', opacity: '100%'
                        }} />
                    <Fadetarget>
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '570px', top: '280px',
                            height: '40px', width: '40px', opacity: '100%', borderRadius: '50%'
                        }} />
                        <div style={{
                            backgroundColor: 'gray', position: 'absolute', left: '584px', top: '305px',
                            height: '147px', width: '10px', opacity: '100%'
                        }} />
                    </Fadetarget> 

                    <SlideControl>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '210px', height: '180px' }} />
                    </SlideControl>

                        
                    <Fadeaxis>
                        <div style={{
                            backgroundColor: 'red', position: 'absolute', left: '590px', top: '400px',
                            height: '140px', width: '4px', opacity: '60%'
                        }} />
                    </Fadeaxis>
                    
                    <SlideGate>
                        <Fadequbit>
                            <img src={axis} style={{ position: 'absolute', left: '210px', top: '380px', height: '180px' }} />
                            <Spin2>
                                <img src={sphere} style={{ position: 'absolute', left: '210px', top: '380px', height: '180px' }} />
                            </Spin2>
                            <img src={dot} style={{ position: 'absolute', left: '288px', top: '390px', height: '10px' }} />
                        </Fadequbit>
                    </SlideGate>
                    </Fadecontent>
                </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7 }