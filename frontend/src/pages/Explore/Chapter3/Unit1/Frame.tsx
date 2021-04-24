import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundClose from '@assets/explore/chapter3/backgroundClose.png'
import Dialog from '@components/DialogBox'
import maxIcon from '@assets/explore/chapter3/maxIcon.png';
import max from '@assets/explore/chapter3/max.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import item1 from '@assets/explore/chapter3/unit1/item1.png'
import item2 from '@assets/explore/chapter3/unit1/item2.png'
import item3 from '@assets/explore/chapter3/unit1/item3.png'
import item4 from '@assets/explore/chapter3/unit1/item4.png'
import item5 from '@assets/explore/chapter3/unit1/item5.png'
import item6 from '@assets/explore/chapter3/unit1/item6.png'
import item7 from '@assets/explore/chapter3/unit1/item7.png'
import item71 from '@assets/explore/chapter3/unit1/item71.png'
import item72 from '@assets/explore/chapter3/unit1/item72.png'
import item8 from '@assets/explore/chapter3/unit1/item8.png'
import item9 from '@assets/explore/chapter3/unit1/item9.png'
import item10 from '@assets/explore/chapter3/unit1/item10.png'
import item11 from '@assets/explore/chapter3/unit1/item11.png'
import item12 from '@assets/explore/chapter3/unit1/item12.png'
import item13 from '@assets/explore/chapter3/unit1/item13.png'
import item14 from '@assets/explore/chapter3/unit1/item14.png'
import item15 from '@assets/explore/chapter3/unit1/item15.png'
import item16 from '@assets/explore/chapter3/unit1/item16.png'
import arrow from '@assets/explore/chapter3/unit1/arrow.png'
import bv0 from '@assets/explore/chapter3/unit1/bv0.png'
import bv1 from '@assets/explore/chapter3/unit1/bv1.png'
import q1 from '@assets/explore/chapter3/unit1/q1.png'
import q2 from '@assets/explore/chapter3/unit1/q2.png'
import qv0 from '@assets/explore/chapter3/unit1/qv0.png'
import qv1 from '@assets/explore/chapter3/unit1/qv1.png'
import qvp from '@assets/explore/chapter3/unit1/qvp.png'
import sphere from '@assets/explore/chapter3/unit1/sphere.png'

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
                <img src={max} style={{ position: 'absolute', left: '400px', top: '100px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    state = {arrow:200}
    componentDidMount = () => {
        setInterval(()=>{
            let newarrow = this.state.arrow===800? 200: this.state.arrow+300
            this.setState({arrow:newarrow})
        },500)
    }
    render() {
        return (
        <Main>
            <Content>
            <img src={arrow} style={{ position: 'absolute', left: `${this.state.arrow+50}px`, top: '200px',transform: 'rotate(270deg)', height:'100px' }}/>
            <img src={item1} style={{ position: 'absolute', left: '200px', top: '288px', height:'200px'}} />
            <img src={item4} style={{ position: 'absolute', left: '500px', top: '288px', height:'200px'}} />
            <img src={item5} style={{ position: 'absolute', left: '800px', top: '288px', height:'200px' }} />
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-300px)}
            to% {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Fade = styled.div`
            animation: ${keyframes`
            from {opacity:0%}
            75% {opacity:0%}
            to {opacity:100%}
            `} 2s ease-out forwards;
            `
        return (
        <Main>
            <Content>
            <Slide>
            <img src={item1} style={{ position: 'absolute', left: '500px', top: '288px', height:'200px'}} />
            </Slide>
            <Fade>
            <img src={item13} style={{ position: 'absolute', left: '200px', top: '296px', height:'200px'}} />
            </Fade>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component<any,any> {
    state = {state:6,count:0}
    click = new Audio(sfxClick)
    render() {
        return (
        <Main>
            <Content>
            <img src={sphere} style={{ position: 'absolute', left: '200px', top: '120px',}} />
            {
                this.state.state%3 === 0 &&
                <img src={item6} style={{ position: 'absolute', left: '374px', top: '140px',height:'390px'}} />
            }
            {
                this.state.state%3 === 1 &&
                <img src={item6} style={{ position: 'absolute', left: '367px', top: '140px', height:'390px',transform:'rotate(54deg'}} />
            }
            {
                this.state.state%3 === 2 &&
                <img src={item6} style={{ position: 'absolute', left: '374px', top: '134px', height:'390px',transform:'rotate(277deg)'}} />
            }
            <img src={arrow} onClick={()=>{
                this.click.play()
                this.setState({state:this.state.state-1,count:this.state.count+1})}} 
                style={{ position: 'absolute', left: '650px', top: '300px', height:'100px', cursor:'pointer'}} />
            <img src={arrow} onClick={()=>{
                this.click.play()
                this.setState({state:this.state.state+1,count:this.state.count+1})}}
                 style={{ position: 'absolute', left: '1000px', top: '300px', height:'100px', transform:'scaleX(-1)',cursor:'pointer'}} />
            <img src={this.state.state%3===0?item1:this.state.state%3===1?item4:item5} style={{ position: 'absolute', left: '780px', top: '250px', height:'200px'}} />
            </Content>
            {
                this.state.count>=4 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={qubieIcon} message={"อืม.. มีมาตรวัดหลากหลายรูปแบบจริง ๆ ด้วย แล้วเราควรจะเลือกใช้มาตรวัดไหนล่ะ"} />
                </div>
            }
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(-200px)}
            `} 0.75s 1s ease-out forwards;
            `
        let Fade = styled.div`
            animation: ${keyframes`
            from {opacity:0%}
            80% {opacity:0%}
            to {opacity:100%}
            `} 2.5s ease-out forwards;
            `
        return (
        <Main>
            <Content>
            <Slide>
            <img src={item13} style={{ position: 'absolute', left: '250px', top: '288px', height:'200px'}} />
            </Slide>
            <Fade>
            <img src={bv0} style={{ position: 'absolute', left: '800px', top: '288px', height:'200px'}} />
            <img src={bv1} style={{ position: 'absolute', left: '950px', top: '288px', height:'200px'}} />
            </Fade>
            </Content>
        </Main>);
    }
}


export { F0, F1, F2, F3, F4}