import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Bar } from 'react-chartjs-2'
import Dialog from '@components/DialogBox'
import backgroundClose from '@assets/explore/chapter5/backgroundClose.png'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import princess from '@assets/explore/chapter5/princess.png'
import item1 from '@assets/explore/chapter5/unit3/item1.png'
import item2 from '@assets/explore/chapter5/unit3/item2.png'
import item3 from '@assets/explore/chapter5/unit3/item3.png'
import item4 from '@assets/explore/chapter5/unit3/item4.png'
import item5 from '@assets/explore/chapter5/unit3/item5.png'
import item6 from '@assets/explore/chapter5/unit3/item6.png'
import item7 from '@assets/explore/chapter5/unit3/item7.png'
import item8 from '@assets/explore/chapter5/unit3/item8.png'
import item9 from '@assets/explore/chapter5/unit3/item9.png'
import h from '@assets/explore/chapter5/unit3/h.png'
import b0 from '@assets/explore/chapter5/unit3/bv0.png'
import b1 from '@assets/explore/chapter5/unit3/bv1.png'
import bu from '@assets/explore/chapter5/unit3/bunknown.png'
import q0 from '@assets/explore/chapter5/unit3/qv0.png'
import qp from '@assets/explore/chapter5/unit3/qv+.png'
import item15 from '@assets/explore/chapter5/unit3/item15.png'
import item20 from '@assets/explore/chapter5/unit3/item20.png'
import item21 from '@assets/explore/chapter5/unit3/item21.png'
import item22 from '@assets/explore/chapter5/unit3/item22.png'
import arrow from '@assets/explore/chapter5/unit3/arrow.png'

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
const slideToRight = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(200px)}
`

const fade = keyframes`
0% {opacity: 0%}
100% {opacity: 100%}
`

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;

class F0 extends React.Component {
    render() {
        return (
            <Main>
                <Content style={{ backgroundImage: `url(${backgroundClose})` }}>
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
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
                    <img src={item1} style={{ position: 'absolute', left: '200px', top: '260px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '350px', top: '260px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '500px', top: '260px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '650px', top: '260px', height: '170px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '200px', top: '430px', lineHeight: '40px'
                    }}>00</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '350px', top: '430px', lineHeight: '40px'
                    }}>01</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '500px', top: '430px', lineHeight: '40px'
                    }}>10</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '650px', top: '430px', lineHeight: '40px'
                    }}>11</div>

                    <div style={{ backgroundColor: 'rgb(255,255,255,0.5)', borderRadius: '10%', position: 'absolute', left: '850px', top: '180px', height: '300px', width: '300px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '180px', lineHeight: '80px'
                    }}>เวลาที่ใช้ไป</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '150px', height: '180px', width: '300px',
                        position: 'absolute', left: '850px', top: '240px', lineHeight: '180px'
                    }}>0</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '400px', lineHeight: '80px'
                    }}>Timestep</div>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '230px', top: '100px', height: '5px', width: '500px' }} />
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '230px', top: '220px', height: '5px', width: '500px' }} />
                    <img src={item5} style={{ position: 'absolute', left: '350px', top: '50px', height: '240px' }} />
                    <img src={b0} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
                    <img src={b0} style={{ position: 'absolute', left: '200px', top: '170px', height: '100px' }} />
                    <img src={bu} style={{ position: 'absolute', left: '650px', top: '50px', height: '100px' }} />
                    <img src={bu} style={{ position: 'absolute', left: '650px', top: '170px', height: '100px' }} />

                    <img src={item1} style={{ position: 'absolute', left: '200px', top: '360px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '350px', top: '360px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '500px', top: '360px', height: '170px' }} />
                    <img src={item1} style={{ position: 'absolute', left: '650px', top: '360px', height: '170px' }} />

                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '200px', top: '530px', lineHeight: '40px'
                    }}>00</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '350px', top: '530px', lineHeight: '40px'
                    }}>01</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '500px', top: '530px', lineHeight: '40px'
                    }}>10</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '650px', top: '530px', lineHeight: '40px'
                    }}>11</div>

                    <div style={{ backgroundColor: 'rgb(255,255,255,0.5)', borderRadius: '10%', position: 'absolute', left: '850px', top: '180px', height: '300px', width: '300px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '180px', lineHeight: '80px'
                    }}>เวลาที่ใช้ไป</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '150px', height: '180px', width: '300px',
                        position: 'absolute', left: '850px', top: '240px', lineHeight: '180px'
                    }}>0</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '400px', lineHeight: '80px'
                    }}>Timestep</div>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component<any> {
    state = {
        subframe: 0,
        arrowLeft: ['-1000px', '225px', '225px', '375px', '375px', '525px', '525px', '675px', '675px', '675px'],
        timestep: ['0', '0', '1', '1', '2', '2', '3', '3', '4', '4'],
        bit0: [b0, b0, b0, b0, b0, b1, b1, b1, b1, b1],
        bit1: [b0, b0, b0, b1, b1, b0, b0, b1, b1, b1],
    }
    click = new Audio(sfxClick)
    componentDidMount = () => {
        setTimeout(() => {
            setInterval(() => {
                if (this.state.subframe < 9) {
                    this.click.play()
                    this.setState({ subframe: this.state.subframe + 1 })
                }
            }, 1250)
        }, 2000)
    }
    render() {
        let { subframe, bit0, bit1, arrowLeft } = this.state
        return (
            <Main>
                <Content>
                    {
                        (subframe === 1 || subframe === 3 || subframe === 5 || subframe === 7) &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '195px', top: '40px', height: '250px', width: '100px' }} />
                    }
                    {
                        (subframe === 2 || subframe === 4 || subframe === 6 || subframe === 8) &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '350px', top: '40px', height: '250px', width: '250px' }} />
                    }
                    {
                        subframe === 9 &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '640px', top: '40px', height: '250px', width: '100px' }} />
                    }
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '230px', top: '100px', height: '5px', width: '480px' }} />
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '230px', top: '220px', height: '5px', width: '480px' }} />
                    <img src={item5} style={{ position: 'absolute', left: '350px', top: '50px', height: '240px' }} />
                    <img src={bit0[subframe]} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
                    <img src={bit1[subframe]} style={{ position: 'absolute', left: '200px', top: '170px', height: '100px' }} />
                    <img src={subframe === 9 ? b1 : bu} style={{ position: 'absolute', left: '650px', top: '50px', height: '100px' }} />
                    <img src={subframe === 9 ? b1 : bu} style={{ position: 'absolute', left: '650px', top: '170px', height: '100px' }} />

                    <img src={arrow} style={{ position: 'absolute', left: arrowLeft[subframe], top: '310px', height: '40px' }} />
                    <img src={subframe >= 8 ? item2 : item1} style={{ position: 'absolute', left: '650px', top: '360px', height: '170px' }} />
                    <img src={subframe === 6 ? item2 : item1} style={{ position: 'absolute', left: '500px', top: '360px', height: '170px' }} />
                    <img src={subframe === 4 ? item2 : item1} style={{ position: 'absolute', left: '350px', top: '360px', height: '170px' }} />
                    <img src={subframe === 2 ? item2 : item1} style={{ position: 'absolute', left: '200px', top: '360px', height: '170px' }} />
                    {
                        subframe >= 8 &&
                        <Fly>
                            <img src={princess} style={{ position: 'absolute', left: '680px', top: '360px', height: '170px' }} />
                        </Fly>
                    }

                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '200px', top: '530px', lineHeight: '40px'
                    }}>00</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '350px', top: '530px', lineHeight: '40px'
                    }}>01</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '500px', top: '530px', lineHeight: '40px'
                    }}>10</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '650px', top: '530px', lineHeight: '40px'
                    }}>11</div>

                    <div style={{ backgroundColor: 'rgb(255,255,255,0.5)', borderRadius: '10%', position: 'absolute', left: '850px', top: '180px', height: '300px', width: '300px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '180px', lineHeight: '80px'
                    }}>เวลาที่ใช้ไป</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '150px', height: '180px', width: '300px',
                        position: 'absolute', left: '850px', top: '240px', lineHeight: '180px'
                    }}>{this.state.timestep[subframe]}</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '400px', lineHeight: '80px'
                    }}>Timestep</div>
                </Content>
                {
                    this.state.subframe >= 9 &&
                    <div style={{ position: 'relative', marginTop: '-720px', zIndex: 3 }}>
                        <Dialog showNext next={() => this.props.next()} img={princessIcon}
                            message={`เธอจะเห็นว่าในกรณีที่แย่ที่สุดซึ่งคำตอบอยู่ประตูสุดท้าย เราอาจต้องใช้เวลามากถึง N หน่วย 
            ในการเปิดประตูให้ครบทุกบาน`} />
                    </div>
                }
            </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '150px', top: '100px', height: '5px', width: '480px' }} />
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '150px', top: '220px', height: '5px', width: '480px' }} />
                    <img src={item6} style={{ position: 'absolute', left: '310px', top: '50px', height: '240px' }} />
                    <img src={q0} style={{ position: 'absolute', left: '80px', top: '50px', height: '100px' }} />
                    <img src={q0} style={{ position: 'absolute', left: '80px', top: '170px', height: '100px' }} />
                    <img src={h} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
                    <img src={h} style={{ position: 'absolute', left: '200px', top: '170px', height: '100px' }} />
                    <img src={item15} style={{ position: 'absolute', left: '580px', top: '50px', height: '100px' }} />
                    <img src={item15} style={{ position: 'absolute', left: '580px', top: '170px', height: '100px' }} />
                    <img src={item22} style={{ position: 'absolute', left: '700px', top: '50px', height: '100px' }} />
                    <img src={item22} style={{ position: 'absolute', left: '700px', top: '170px', height: '100px' }} />

                    <img src={item3} style={{ position: 'absolute', left: '200px', top: '360px', height: '170px' }} />
                    <img src={item3} style={{ position: 'absolute', left: '350px', top: '360px', height: '170px' }} />
                    <img src={item3} style={{ position: 'absolute', left: '500px', top: '360px', height: '170px' }} />
                    <img src={item3} style={{ position: 'absolute', left: '650px', top: '360px', height: '170px' }} />

                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '200px', top: '530px', lineHeight: '40px'
                    }}>00</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '350px', top: '530px', lineHeight: '40px'
                    }}>01</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '500px', top: '530px', lineHeight: '40px'
                    }}>10</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '650px', top: '530px', lineHeight: '40px'
                    }}>11</div>

                    <div style={{ backgroundColor: 'rgb(255,255,255,0.5)', borderRadius: '10%', position: 'absolute', left: '850px', top: '180px', height: '300px', width: '300px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '180px', lineHeight: '80px'
                    }}>เวลาที่ใช้ไป</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '150px', height: '180px', width: '300px',
                        position: 'absolute', left: '850px', top: '240px', lineHeight: '180px'
                    }}>0</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '400px', lineHeight: '80px'
                    }}>Timestep</div>
                </Content>
            </Main>);
    }
}

class F5 extends React.Component<any> {
    state = {
        subframe: 0,
        timestep: ['0', '0', '0', '1', '1', '2', '2', '2'],
    }
    click = new Audio(sfxClick)
    componentDidMount = () => {
        setTimeout(() => {
            setInterval(() => {
                if (this.state.subframe < 7) {
                    this.click.play()
                    this.setState({ subframe: this.state.subframe + 1 })
                }
            }, 1250)
        }, 2000)
    }
    render() {
        let { subframe } = this.state
        return (
            <Main>
                <Content>
                    {
                        subframe === 1 &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '80px', top: '40px', height: '250px', width: '100px' }} />
                    }
                    {
                        subframe === 2 &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '200px', top: '40px', height: '250px', width: '100px' }} />
                    }
                    {
                        (subframe === 3 || subframe === 5) &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '320px', top: '40px', height: '250px', width: '230px' }} />
                    }
                    {
                        subframe === 7 &&
                        <div style={{ backgroundColor: 'lightgreen', position: 'absolute', left: '565px', top: '40px', height: '250px', width: '260px' }} />
                    }
                    {/* <div style={{ backgroundColor:'gray',position: 'absolute', left: '230px', top: '100px', height: '5px',width:'480px' }} />
        <div style={{ backgroundColor:'gray',position: 'absolute', left: '230px', top: '220px', height: '5px',width:'480px' }} />
        <img src={item5} style={{ position: 'absolute', left: '350px', top: '50px', height: '240px' }} />
        <img src={bit0[subframe]} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
        <img src={bit1[subframe]} style={{ position: 'absolute', left: '200px', top: '170px', height: '100px' }} />
        <img src={subframe===7?b1:bu} style={{ position: 'absolute', left: '650px', top: '50px', height: '100px' }} />
        <img src={subframe===7?b1:bu} style={{ position: 'absolute', left: '650px', top: '170px', height: '100px' }} /> */}

                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '150px', top: '100px', height: '5px', width: '480px' }} />
                    <div style={{ backgroundColor: 'gray', position: 'absolute', left: '150px', top: '220px', height: '5px', width: '480px' }} />
                    <img src={item6} style={{ position: 'absolute', left: '310px', top: '50px', height: '240px' }} />
                    <img src={q0} style={{ position: 'absolute', left: '80px', top: '50px', height: '100px' }} />
                    <img src={q0} style={{ position: 'absolute', left: '80px', top: '170px', height: '100px' }} />
                    <img src={h} style={{ position: 'absolute', left: '200px', top: '50px', height: '100px' }} />
                    <img src={h} style={{ position: 'absolute', left: '200px', top: '170px', height: '100px' }} />
                    <img src={item15} style={{ position: 'absolute', left: '580px', top: '50px', height: '100px' }} />
                    <img src={item15} style={{ position: 'absolute', left: '580px', top: '170px', height: '100px' }} />
                    <img src={subframe === 7 ? item21 : item22} style={{ position: 'absolute', left: '700px', top: '50px', height: '100px' }} />
                    <img src={subframe === 7 ? item20 : item22} style={{ position: 'absolute', left: '700px', top: '170px', height: '100px' }} />
                    {
                        subframe === 1 &&
                        <img src={arrow} style={{ position: 'absolute', left: '225px', top: '310px', height: '40px' }} />

                    }
                    {
                        (subframe >= 2 && subframe <= 6) &&
                        <React.Fragment>
                            <img src={arrow} style={{ position: 'absolute', left: '225px', top: '310px', height: '40px' }} />
                            <img src={arrow} style={{ position: 'absolute', left: '375px', top: '310px', height: '40px' }} />
                            <img src={arrow} style={{ position: 'absolute', left: '525px', top: '310px', height: '40px' }} />
                            <img src={arrow} style={{ position: 'absolute', left: '675px', top: '310px', height: '40px' }} />
                        </React.Fragment>
                    }
                    {
                        subframe === 7 &&
                        <img src={arrow} style={{ position: 'absolute', left: '525px', top: '310px', height: '40px' }} />
                    }
                    <img src={(subframe === 3 || subframe === 5) ? item4 : item3} style={{ position: 'absolute', left: '650px', top: '360px', height: '170px' }} />
                    <img src={(subframe === 3 || subframe >= 5) ? item4 : item3} style={{ position: 'absolute', left: '500px', top: '360px', height: '170px' }} />
                    <img src={(subframe === 3 || subframe === 5) ? item4 : item3} style={{ position: 'absolute', left: '350px', top: '360px', height: '170px' }} />
                    <img src={(subframe === 3 || subframe === 5) ? item4 : item3} style={{ position: 'absolute', left: '200px', top: '360px', height: '170px' }} />
                    {
                        (subframe === 3 || subframe === 5) &&
                        <Fly>
                            <img src={princess} style={{ position: 'absolute', left: '230px', top: '360px', height: '170px', opacity: '40%' }} />
                            <img src={princess} style={{ position: 'absolute', left: '380px', top: '360px', height: '170px', opacity: '40%' }} />
                            <img src={princess} style={{ position: 'absolute', left: '530px', top: '360px', height: '170px', opacity: '70%' }} />
                            <img src={princess} style={{ position: 'absolute', left: '680px', top: '360px', height: '170px', opacity: '40%' }} />
                        </Fly>
                    }
                    {
                        subframe === 7 &&
                        <Fly>
                            <img src={princess} style={{ position: 'absolute', left: '530px', top: '360px', height: '170px', opacity: '70%' }} />
                        </Fly>
                    }
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '200px', top: '530px', lineHeight: '40px'
                    }}>00</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '350px', top: '530px', lineHeight: '40px'
                    }}>01</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '500px', top: '530px', lineHeight: '40px'
                    }}>10</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '30px', height: '40px', width: '95px',
                        position: 'absolute', left: '650px', top: '530px', lineHeight: '40px'
                    }}>11</div>

                    <div style={{ backgroundColor: 'rgb(255,255,255,0.5)', borderRadius: '10%', position: 'absolute', left: '850px', top: '180px', height: '300px', width: '300px' }} />
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '180px', lineHeight: '80px'
                    }}>เวลาที่ใช้ไป</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '150px', height: '180px', width: '300px',
                        position: 'absolute', left: '850px', top: '240px', lineHeight: '180px'
                    }}>{this.state.timestep[subframe]}</div>
                    <div style={{
                        color: 'black', fontFamily: 'Kanit', fontSize: '40px', height: '80px', width: '300px',
                        position: 'absolute', left: '850px', top: '400px', lineHeight: '80px'
                    }}>Timestep</div>
                </Content>
                {
                    this.state.subframe >= 7 &&
                    <div style={{ position: 'relative', marginTop: '-720px', zIndex: 3 }}>
                        <Dialog showNext next={() => this.props.next()} img={princessIcon}
                            message={`เยี่ยมไปเลย Grover’s algorithm ใช้เวลาทำซ้ำส่วนการค้นหาจำนวน √N ครั้งเสมอ อย่าลืมว่าถ้าหารากเหลือเศษต้องปัดทิ้งตลอดนะ !!`} />
                    </div>
                }
            </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5 }