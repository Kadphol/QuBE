import React from 'react';
import styled, { keyframes } from 'styled-components';
import Question from '@components/Question'
import backgroundClose from '@assets/explore/chapter4/backgroundClose.png'
import Dialog from '@components/DialogBox'
import gustIcon from '@assets/explore/chapter4/gustIcon.png';
import gust from '@assets/explore/chapter4/gust.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import q1 from '@assets/explore/chapter4/unit2/q1.png'
import qv0 from '@assets/explore/chapter4/unit2/qv0.png'
import qv1 from '@assets/explore/chapter4/unit2/qv1.png'
import qvp from '@assets/explore/chapter4/unit2/qv+.png'
import item10 from '@assets/explore/chapter4/unit2/item10.png'
import x from '@assets/explore/chapter4/unit2/x.png'
import y from '@assets/explore/chapter4/unit2/y.png'
import z from '@assets/explore/chapter4/unit2/z.png'
import h from '@assets/explore/chapter4/unit2/h.png'
import axis from '@assets/explore/chapter4/unit2/axis.png'
import sphere from '@assets/explore/chapter4/unit2/sphere.png'
import dot from '@assets/explore/chapter4/unit2/dot.png'

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

const Slide = styled.div`
animation: ${keyframes`
from {transform:translateX(0px); }
25% {transform:translateX(300px); }
75% {transform:translateX(300px); }
to {transform:translateX(600px); }
`} 4s 3s ease-out forwards
`
const Spin = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {transform:rotate(0deg)}
50% {transform:rotate(0deg)}
75% {transform:rotate(-180deg)}
to {transform:rotate(-180deg)}
`} 4s 3s ease-out forwards
`
const Spin1 = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {transform:rotate(0deg)}
40% {transform:rotate(0deg)}
52% {transform:rotate(-125deg)}
to {transform:rotate(-125deg)}
`} 4s 3s ease-out forwards
`
const Spin2 = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {transform:rotate(0deg)}
40% {transform:rotate(0deg)}
50% {transform:rotate(-55deg)}
55% {transform:rotate(-55deg)}
65% {transform:rotate(-235deg)}
to {transform:rotate(-235deg)}
`} 4s 3s ease-out forwards
`
const Fadeaxis = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {opacity:0%}
20% {opacity:0%}
25% {opacity:100%}
75% {opacity:100%}
80% {opacity:0%}
to {opacity:0%}
`} 4s 3s ease-out forwards
`
const Fadeaxis1 = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {opacity:0%}
20% {opacity:0%}
25% {opacity:100%}
50% {opacity:100%}
55% {opacity:0%}
to {opacity:0%}
`} 4s 3s ease-out forwards
`
const Fadeaxis2 = styled.div`
transform-origin: 295px 325px;
animation: ${keyframes`
from {opacity:0%}
50% {opacity:0%}
55% {opacity:100%}
75% {opacity:100%}
80% {opacity:0%}
to {opacity:0%}
`} 4s 3s ease-out forwards
`
const Fadegate = styled.div`
animation: ${keyframes`
from {opacity:100%}
50% {opacity:100%}
63% {opacity:20%}
87% {opacity:20%}
to {opacity:100%}
`} 8s ease-out forwards
`
const Fadequbit = styled.div`
animation: ${keyframes`
from {opacity:0%}
25% {opacity:0%}
37% {opacity:100%}
87% {opacity:100%}
to {opacity:0%}
`} 8s ease-out forwards
`
const Fade1 = styled.div`
animation: ${keyframes`
from {opacity:100%}
25% {opacity:100%}
37% {opacity:0%}
to {opacity:0%}
`} 8s ease-out forwards
`
const Fade2 = styled.div`
animation: ${keyframes`
from {opacity:0%}
87% {opacity:0%}
to {opacity:100%}
`} 8s ease-out forwards
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
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv1} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '570px', top: '270px', 
                        height: '140px', width:'4px', transform:'rotate(54deg)', opacity:'60%' }} />
                    </Fadeaxis>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                            <Spin>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                                <img src={dot} style={{ position: 'absolute', left: '288px', top: '240px', height: '10px' }} />
                            </Spin>
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={x} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <Fade1>
                        <img src={qv1} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '570px', top: '270px', 
                        height: '140px', width:'4px', transform:'rotate(54deg)', opacity:'60%' }} />
                    </Fadeaxis>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                            <Spin>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                                <img src={dot} style={{ position: 'absolute', left: '288px', top: '398px', height: '10px' }} />
                            </Spin>
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={x} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv1} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '602px', top: '254px', 
                        height: '140px', width:'4px', transform:'rotate(96.5deg)', opacity:'60%' }} />
                    </Fadeaxis>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                            <Spin>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                                <img src={dot} style={{ position: 'absolute', left: '288px', top: '240px', height: '10px' }} />
                            </Spin>
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={y} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '592px', top: '254px', 
                        height: '150px', width:'4px', opacity:'60%' }} />
                    </Fadeaxis>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                        <Spin>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                        </Spin>
                        <img src={dot} style={{ position: 'absolute', left: '288px', top: '240px', height: '10px' }} />
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={z} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <Main>
                <Content>
                    <Fade1>
                        <img src={qv0} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qvp} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis1>
                    <div style={{ backgroundColor:'red', position: 'absolute', left: '602px', top: '254px', 
                        height: '140px', width:'4px', transform:'rotate(96.5deg)', opacity:'60%' }} />
                    </Fadeaxis1>
                    <Fadeaxis2>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '570px', top: '270px', 
                        height: '140px', width:'4px', transform:'rotate(54deg)', opacity:'60%' }} />
                    </Fadeaxis2>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                        <Spin1>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                        <img src={dot} style={{ position: 'absolute', left: '288px', top: '240px', height: '10px' }} />
                        </Spin1>
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={h} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
                </Content>
            </Main>);
    }
}

class F6 extends React.Component<any> {
    answerValidate = (valid) => { if (valid) this.props.next() }

    render() {
        return (<Main>
            <Content>
                <ChoicesDiv>
                    <Question
                        answerValidate={this.answerValidate}
                        choices={["|0>", "|1>", "|+>", "|->"]}
                        solution={0} />
                </ChoicesDiv>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (
                <Main>
                <Content>
                    <Fade1>
                        <img src={qvp} style={{ position: 'absolute', left: '200px', top: '230px', height: '180px' }} />
                    </Fade1>
                    <Fade2>
                        <img src={qv0} style={{ position: 'absolute', left: '800px', top: '230px', height: '180px' }} />
                    </Fade2>
                    <Fadeaxis1>
                    <div style={{ backgroundColor:'red', position: 'absolute', left: '602px', top: '254px', 
                        height: '140px', width:'4px', transform:'rotate(96.5deg)', opacity:'60%' }} />
                    </Fadeaxis1>
                    <Fadeaxis2>
                        <div style={{ backgroundColor:'red', position: 'absolute', left: '570px', top: '270px', 
                        height: '140px', width:'4px', transform:'rotate(54deg)', opacity:'60%' }} />
                    </Fadeaxis2>
                    <Slide>
                        <Fadequbit>
                        <img src={axis} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />  
                        <Spin2>
                        <img src={sphere} style={{ position: 'absolute', left: '210px', top: '230px', height: '180px' }} />
                        <img src={dot} style={{ position: 'absolute', left: '226px', top: '366px', height: '10px'}} />
                        </Spin2>
                        </Fadequbit>
                    </Slide>
                    <Fadegate>
                        <img src={h} style={{ position: 'absolute', left: '475px', top: '210px', height: '220px' }} />
                    </Fadegate>
                </Content>
            </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7 }