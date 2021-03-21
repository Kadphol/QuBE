import React from 'react';
import styled, { keyframes } from 'styled-components';
import Bew from '@assets/explore/chapter2/Bew.png'
import backgroundClose from '@assets/explore/chapter2/BackgroundClose.png'
import q1 from '@assets/explore/chapter2/unit3/q1.png'
import q2 from '@assets/explore/chapter2/unit3/q2.png'
import system from '@assets/explore/chapter2/unit3/system.png'
import line1 from '@assets/explore/chapter2/unit3/line1.png'
import line2 from '@assets/explore/chapter2/unit3/line2.png'
import qv0 from '@assets/explore/chapter2/unit3/qv0.png'
import qv1 from '@assets/explore/chapter2/unit3/qv1.png'
import qvp from '@assets/explore/chapter2/unit3/qv+.png'
import qvm from '@assets/explore/chapter2/unit3/qv-.png'
import qvpi from '@assets/explore/chapter2/unit3/qv+i.png'
import qvmi from '@assets/explore/chapter2/unit3/qv-i.png'
import qunknown from '@assets/explore/chapter2/unit3/qunknown.png'
import item1 from '@assets/explore/chapter2/unit3/item1.png'
import correct from '@assets/explore/chapter2/unit3/correct.png'
import wrong from '@assets/explore/chapter2/unit3/wrong.png'
import leftArrow from '@assets/explore/chapter2/unit3/leftArrow.png'
import rightArrow from '@assets/explore/chapter2/unit3/rightArrow.png'
import entanglement from '@assets/explore/chapter2/unit3/entanglement.png'
import Dialog from '@components/DialogBox'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@svg/Qubie-intro.svg'


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
const slideFromLeft1 = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(200px)}
`
const slideFromLeft2 = keyframes`
0% {transform: translateX(0px)}
50% {transform: translateX(375px)}
75% {transform: translateX(375px)}
100% {transform: translateX(600px)}
`
const slideFromLeft3 = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(300px)}
`
const slideFromLeft4 = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(400px)}
`

const fade = keyframes`
0% {opacity: 0%}
60% {opacity: 0%}
100% {opacity: 100%}
`
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
                <img src={Bew} style={{ position: 'absolute', left: '400px', top: '100px' }} />
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {

    state = { switch: false }

    render() {

        let Slide1 = styled.div`
        -webkit-animation: ${slideFromLeft1} 0.5s 0.75s ease-out normal forwards ;
            `
        let Slide2 = styled.div`
        -webkit-animation: ${slideFromLeft2} 1.5s 1.75s ease-out normal forwards ;
            `
        let Slide3 = styled.div`
        -webkit-animation: ${slideFromLeft3} 0.5s 1.85s ease-out normal forwards ;
            `
        let Slide4 = styled.div`
        -webkit-animation: ${slideFromLeft3} 0.55s 2.75s ease-out normal forwards ;
            `

        return (<Main>
            <Content>
                <img src={line1} style={{ position: 'absolute', top: '155px', left: '215px' }} />
                <img src={line1} style={{ position: 'absolute', top: '302.5px', left: '215px' }} />
                <img src={line2} style={{ position: 'absolute', top: '455px', left: '425px' }} />
                <Slide1>
                    <img src={qv0} style={{ position: 'absolute', top: '95px', left: '150px' }} />
                    <img src={qv0} style={{ position: 'absolute', top: '245px', left: '150px' }} />
                </Slide1>
                <Slide3>
                    <img src={qv0} style={{ position: 'absolute', top: '395px', left: '360px' }} />
                </Slide3>
                <Slide2>
                    <img src={qunknown} style={{ position: 'absolute', top: '95px', left: '350px' }} />
                    <img src={qunknown} style={{ position: 'absolute', top: '245px', left: '350px' }} />
                </Slide2>
                <Slide4>
                    <img src={qunknown} style={{ position: 'absolute', top: '395px', left: '650px' }} />
                </Slide4>
                <img src={system} style={{ position: 'absolute', top: '85px', left: '315px' }} />
                <img src={system} style={{ position: 'absolute', top: '235px', left: '620px' }} />
            </Content>
        </Main>);
    }
}

class F2 extends React.Component<any> {

    state = { show: [qv0, qv0, qv0] }

    click = new Audio(sfxClick)
    qubit = [qv0, qv1, qvp, qvm, qvpi, qvmi]

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                show: [
                    this.qubit[Math.floor(Math.random() * this.qubit.length)],
                    this.qubit[Math.floor(Math.random() * this.qubit.length)],
                    this.qubit[Math.floor(Math.random() * this.qubit.length)]
                ]
            })
        }, 750)
    }

    render() {
        return (<Main>
            <Content>
                <img src={this.state.show[0]} style={{ position: 'absolute', top: '100px', left: '550px' }} />
                <img src={this.state.show[1]} style={{ position: 'absolute', top: '250px', left: '550px' }} />
                <img src={this.state.show[2]} style={{ position: 'absolute', top: '400px', left: '550px' }} />
            </Content>
        </Main>);
    }
}



class F3 extends React.Component<any> {


    state = { switch: false }

    render() {

        let Slide1 = styled.div`
        -webkit-animation: ${slideFromLeft4} 0.75s 0.75s ease-out normal forwards ;
            `
        let Slide2 = styled.div`
            -webkit-animation: ${slideFromLeft4} 0.75s 2s ease-out normal forwards ;
                `

        return (<Main>
            <Content>
                <img src={line1} style={{ position: 'absolute', top: '210px', left: '215px' }} />
                <img src={line1} style={{ position: 'absolute', top: '357.5px', left: '215px' }} />
                <Slide1>
                    <img src={qv0} style={{ position: 'absolute', top: '150px', left: '150px' }} />
                    <img src={qv0} style={{ position: 'absolute', top: '300px', left: '150px' }} />
                </Slide1>
                <Slide2>
                    <img src={qunknown} style={{ position: 'absolute', top: '150px', left: '550px' }} />
                    <img src={qunknown} style={{ position: 'absolute', top: '300px', left: '550px' }} />
                    <img src={entanglement} style={{ position: 'absolute', top: '130px', left: '540px' }} />
                </Slide2>
                <img src={system} style={{ width:'350px',position: 'absolute', top: '120px', left: '430px' }} />
            </Content>
        </Main>);
    }
}

class F4 extends React.Component<any> {

    showList = [[qv1, qv0], [qvm, qvp], [qvmi, qvpi], [qv0, qv1], [qvp, qvm], [qvpi, qvmi]]

    state = { select: 3, show: this.showList[3], count:0 }

    click = new Audio(sfxClick)

    handleClick = (i) => {
        this.click.play()
        let target = this.state.select + i === 6 ? 0 : this.state.select + i === -1 ? 5 : this.state.select + i
        this.setState({ select: target, show: this.showList[target], count:this.state.count+1 })
    }

    render() {

        return (<Main>
            <Content>
                <img src={this.state.show[0]} style={{ position: 'absolute', left: '550px', top: '165px' }} />
                <img src={this.state.show[1]} style={{ position: 'absolute', left: '550px', top: '315px' }} />
                <img src={entanglement} style={{ position: 'absolute', left: '540px', top: '150px' }} />
                <img src={leftArrow} onClick={() => this.handleClick(-1)} style={{ position: 'absolute', left: '420px', top: '280px', cursor: 'pointer' }} />
                <img src={rightArrow} onClick={() => this.handleClick(1)} style={{ position: 'absolute', left: '720px', top: '280px', cursor: 'pointer' }} />
            </Content>
            {this.state.count>=6 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={qubieIcon} message={"จริงด้วย! อย่างนี้ถึงแม้ว่าคิวบิตแต่ละตัวจะมีสถานะที่เป็นไปได้เท่าเดิม แต่พอมองรวมกันแล้ว คิวบิตคู่นี้มีสถานะได้ไม่กี่แบบเท่านั้น"} />
                </div>
            }
        </Main>);
    }
}

class F5 extends React.Component {

    state = {state:0}
    wrong = new Audio(sfxWrong)
    correct = new Audio(sfxCorrect)

    componentDidMount = () => {
        setInterval(()=>{
            let nextState = this.state.state+1
            this.setState({state:nextState})
            if(nextState===2){this.wrong.play()}
            if(nextState===5){this.correct.play()}
        },1500)
    }

    render() {
        return (<Main>
            <Content>
                <img src={q1} style={{ position: 'absolute', left: '650px', top: '165px' }} />
                <img src={q2} style={{ position: 'absolute', left: '650px', top: '315px' }} />
                <img src={entanglement} style={{ position: 'absolute', left: '640px', top: '150px' }} />
                <img src={qubie} style={{ width:'200px',position: 'absolute', left: '410px', top: '250px' }} />
                { this.state.state >= 1 && this.state.state !== 3 &&
                <img src={item1} style={{ width:'200px',transform:'scaleX(-1)',position: 'absolute', left: '300px', top: '150px' }} />}
                {(this.state.state === 1 || this.state.state === 2) && <p style={{ width:'200px',position: 'absolute', left: '300px', top: '172px', 
                fontFamily:'Kanit',fontSize:'20px'
                }}>เอ.. |Q<sub>1</sub>&gt; มีสถานะ<br/>เป็นอะไรได้บ้างนะ</p>}
                {this.state.state===2 && <img src={wrong} style={{ position: 'absolute', left: '800px', top: '420px' }} />}
                {this.state.state>=4 && <p style={{ width:'200px',position: 'absolute', left: '300px', top: '172px', 
                fontFamily:'Kanit',fontSize:'20px'
                }}>|Q<sub>1</sub>Q<sub>2</sub>&gt; มีสถานะ<br/>เป็นอะไรได้บ้างนะ</p>}
                {this.state.state>=5 && <img src={correct} style={{ position: 'absolute', left: '800px', top: '420px' }} />}

            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
                <img src={Bew} style={{ position: 'absolute', left: '400px', top: '100px' }} />
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6 }