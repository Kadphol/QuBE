import React from 'react';
import styled, { keyframes, css } from 'styled-components';
<<<<<<< HEAD
import Qubie from '../../../../assets/explore/Qubie.png'
import Dragon from '../../../../assets/explore/Dragon.png'
import item1 from '../../../../assets/explore/chapter1/quiz/item1.png'
import item2 from '../../../../assets/explore/chapter1/quiz/item2.png'
import item3 from '../../../../assets/explore/chapter1/quiz/item3.png'
import item4 from '../../../../assets/explore/chapter1/quiz/item4.png'
import item5 from '../../../../assets/explore/chapter1/quiz/item5.png'
import item6 from '../../../../assets/explore/chapter1/quiz/item6.png'
import item7 from '../../../../assets/explore/chapter1/quiz/item7.png'
import item8 from '../../../../assets/explore/chapter1/quiz/item8.png'
import item9 from '../../../../assets/explore/chapter1/quiz/item9.png'
import lightOn from '../../../../assets/explore/chapter1/quiz/lightOn.png'
import lightOff from '../../../../assets/explore/chapter1/quiz/lightOff.png'
import switchOn from '../../../../assets/explore/chapter1/quiz/switchOn.png'
import switchOff from '../../../../assets/explore/chapter1/quiz/switchOff.png'
import star from '../../../../assets/explore/chapter1/quiz/star.png'
import noStar from '../../../../assets/explore/chapter1/quiz/noStar.png'
import starFrame from '../../../../assets/explore/chapter1/quiz/starFrame.png'
import nextButton from '../../../../assets/explore/chapter1/quiz/nextButton.png'
import completeButton from '../../../../assets/explore/chapter1/quiz/completeButton.png'
import completeFrame from '../../../../assets/explore/chapter1/quiz/completeFrame.png'
import Question from '../../../../components/Question'
const sfxStar = require('../../../../assets/sound/sfx_star.mp3').default
const sfxPing = require('../../../../assets/sound/sfx_ping.mp3').default
const sfxWrong = require('../../../../assets/sound/sfx_wrong.mp3').default
const sfxCorrect = require('../../../../assets/sound/sfx_correct.mp3').default
const sfxClick = require('../../../../assets/sound/sfx_click.mp3').default
const sfxClear = require('../../../../assets/sound/sfx_clear.mp3').default
=======
import Beck from '../../../../assets/explore/chapter1/Beck.png'
import BackgroundClose from '../../../../assets/explore/chapter1/BackgroundClose.png'
import item1 from '../../../../assets/explore/chapter1/quiz/item1.png'
import item2 from '../../../../assets/explore/chapter1/quiz/item2.png'
import item3 from '../../../../assets/explore/chapter1/unit1/item3.png'
import item4 from '../../../../assets/explore/chapter1/unit1/item4.png'
import item5 from '../../../../assets/explore/chapter1/unit1/item5.png'
import item6 from '../../../../assets/explore/chapter1/unit1/item6.png'
import item1alt from '../../../../assets/explore/chapter1/unit1/item1alt.png'
import item2alt from '../../../../assets/explore/chapter1/unit1/item2alt.png'
import item3alt from '../../../../assets/explore/chapter1/unit1/item3alt.png'
import item4alt from '../../../../assets/explore/chapter1/unit1/item4alt.png'
import item5alt from '../../../../assets/explore/chapter1/unit1/item5alt.png'
import item6alt from '../../../../assets/explore/chapter1/unit1/item6alt.png'
import item7 from '../../../../assets/explore/chapter1/unit1/item7.png'
import item8 from '../../../../assets/explore/chapter1/unit1/item8.png'
import item9 from '../../../../assets/explore/chapter1/unit1/item9.png'
import item10 from '../../../../assets/explore/chapter1/unit1/item10.png'
import item11 from '../../../../assets/explore/chapter1/unit1/item11.png'
import item12 from '../../../../assets/explore/chapter1/unit1/item12.png'
import star from '../../../../assets/explore/chapter1/quiz/star.png'
import starFrame from '../../../../assets/explore/chapter1/quiz/starFrame.png'
import Question from '../../../../components/Question'
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

const ObjectDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`

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

<<<<<<< HEAD
const fade1 = keyframes`
0% {opacity: 0%}
100% {opacity: 100%}
`

const fade2 = keyframes`
0% {opacity: 0%}
33% {opacity: 0%}
100% {opacity: 100%}
`

const fade3 = keyframes`
0% {opacity: 0%}
66% {opacity: 0%}
100% {opacity: 100%}
`

const BoxDiv = styled.div`
=======
const slideFromLeft = keyframes`
0% {transform: translateX(-202px)}
100% {transform: translateX(0px)}
`
const slideFromRight = keyframes`
0% {transform: translateX(202px)}
100% {transform: translateX(0px)}
`
const fade = keyframes`
0% {opacity: 0%}
100% {opacity: 100%}
`

const StarDiv = styled.div`
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
position: absolute;
width: 700px;
height: 400px;
left: 270px;
top: 163px;
<<<<<<< HEAD
=======
background-image: url(${starFrame});
cursor: pointer;
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
img {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 173px;
}
`

<<<<<<< HEAD
class F0 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} />
            </Content>
        </Main>);
    }
}
class F1 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} />
            </Content>
        </Main>);
    }
}
class F2 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px' }} />
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px' }} />
            </Content>
        </Main>);
    }
}
class F3 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px' }} />
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F4 extends React.Component<any> {

    state = { perfect: true }

    validate = (valid) => {
        if (valid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
        else this.setState({ perfect: false })
    }
=======
class F0 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

    render() {
        return (<Main>
            <Content >
<<<<<<< HEAD
                <ObjectDiv><Question
                    answerValidate={this.validate}
                    choices={['แค่มีชื่อเรียกต่างกัน', 'ต่างกันที่ผู้ใช้งาน', 'กลไกในการทำงานต่างกัน']}
                    solution={2}
                /></ObjectDiv>
=======
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['true','false','false']}
                solution={0}
               /></ObjectDiv>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
            </Content>
        </Main>);
    }
}

<<<<<<< HEAD
class F5 extends React.Component<any> {

    state = { perfect: true }

    validate = (valid) => {
        if (valid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
        else this.setState({ perfect: false })
    }
=======
class F1 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

    render() {
        return (<Main>
            <Content >
<<<<<<< HEAD
                <ObjectDiv><Question
                    answerValidate={this.validate}
                    choices={['ราคาถูกหาซื้อได้ง่าย', 'สามารถประมวลผลได้เร็วกว่า', 'ขนาดเล็กพกพาสะดวก']}
                    solution={1}
                /></ObjectDiv>
=======
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['false','false','true']}
                solution={2}
               /></ObjectDiv>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
            </Content>
        </Main>);
    }
}

<<<<<<< HEAD

class F6 extends React.Component<any> {

    state = {
        perfect: true,
        switches: [false, false, false, false, false, false],
        attemp: 0
    }

    solution = [true,false,true,false,true,false]
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    switchTop = [60, 150, 250, 330, 430, 520]
    lineTop = [81, 175, 172, 275, 348, 168]
    lineLeft = [371, 377, 376, 376, 376, 376]
    lightTop = [220, 310, 130, 220, 310, 130]
    lightLeft = [694, 694, 621, 621, 621, 694]
    line = [item3,item4,item5,item6,item7,item8]

    handleClick = (index) => {
        let { switches,attemp } = this.state
        switches[index] = !switches[index]
        attemp += 1
        this.setState({switches:switches,attemp:attemp})
        let valid = ([0,2,4].includes(index) && switches[index]) || ([1,3,5].includes(index) && !switches[index])
        if(valid) this.correct.play()
        else this.wrong.play()
        let allValid = JSON.stringify(switches) === JSON.stringify(this.solution)
        if(attemp>=3) this.validate(allValid)
    }

    validate = (valid) => {
        if (valid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
        else this.setState({ perfect: false })
    }
=======
class F2 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

    render() {
        return (<Main>
            <Content >
<<<<<<< HEAD
                <img src={item2} style={{ position: 'absolute', top: '81px', left: '181px' }} />
                <img src={item1} style={{ position: 'absolute', top: '242px', left: '69px' }} />
                {
                    this.state.switches.map((item, index) => (
                        <React.Fragment>
                            <img src={this.line[index]} 
                            style={{ position: 'absolute', top: `${this.lineTop[index]}px`, left: `${this.lineLeft[index]}px`, filter:item?'none':'grayscale(1)'}} />
                            <img src={item ? lightOn : lightOff} 
                            style={{ position: 'absolute', top: `${this.lightTop[index]}px`, left: `${this.lightLeft[index]}px` }} />
                            <img src={item ? switchOn : switchOff} 
                            onMouseDown={()=>this.click.play()}
                            onClick={()=>this.handleClick(index)}
                            style={{ position: 'absolute', top: `${this.switchTop[index]}px`, left: '309px', cursor:'pointer', zIndex:2}} />
                        </React.Fragment>
                    )
                    )
                }
                <img src={item9} style={{ position: 'absolute', top: '149px', left: '852px' }} />
=======
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['false','true','false']}
                solution={1}
               /></ObjectDiv>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
            </Content>
        </Main>);
    }
}

<<<<<<< HEAD
class F7 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F9 extends React.Component<any> {

    state = { count: 0 }

    sfxStar = new Audio(sfxStar)
    sfxWrong = new Audio(sfxWrong)

    render() {

        let FadeIn1 = styled.div`
        animation: ${fade1} 0.25s forwards ;
        `

        return (<Main>
            <Content >
                <BoxDiv style={{ backgroundImage: `url(${starFrame})` }}>
                    {
                        this.props.prevStar >= 1 &&
                        <img src={star} style={{ left: '189px' }} />
                    }
                    {
                        this.props.prevStar >= 2 &&
                        <img src={star} style={{ left: '312px' }} />
                    }
                    {
                        this.props.prevStar >= 3 &&
                        <img src={star} style={{ left: '435px' }} />
                    }
                    {
                        this.props.star == 1 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '189px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star == 2 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '312px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star == 3 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '435px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star === this.props.prevStar &&
                        <audio src={sfxWrong} autoPlay />
                    }
                    <img onClick={this.props.next}
                        style={{ position: 'absolute', top: '284px', left: '280px', width: '130px', height: '40px', cursor: 'pointer' }}
                        src={nextButton} />
                </BoxDiv>
            </Content>
        </Main>);
    }
}

class F10 extends React.Component<any> {

    click = new Audio(sfxClick)
    clear = new Audio(sfxClear)

    state = { button: false }

    componentDidMount = () => {
        this.clear.volume = 0.4
        this.clear.play()
        setTimeout(() => {
            this.setState({ button: true })
        }, 4000)
    }
=======
class F3 extends React.Component<any> {
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

    render() {
        return (<Main>
            <Content >
<<<<<<< HEAD
                <BoxDiv style={{ backgroundImage: `url(${completeFrame})` }}>

                    {
                        !this.state.button &&
                        <img src={this.props.star >= 1 ? star : noStar} style={{ top: '229px', left: '189px' }} />
                    }
                    {
                        !this.state.button &&
                        <img src={this.props.star >= 2 ? star : noStar} style={{ top: '229px', left: '312px' }} />
                    }
                    {
                        !this.state.button &&
                        <img src={this.props.star >= 3 ? star : noStar} style={{ top: '229px', left: '435px' }} />

                    }
                    {
                        this.state.button &&
                        <img src={completeButton}
                            style={{ position: 'absolute', top: '250px', left: '246px', width: '200px', height: '50px', cursor: 'pointer' }}
                            onMouseDown={() => this.click.play()} onClick={this.props.next} />
                    }
                </BoxDiv>
=======
                <StarDiv onClick={this.props.next}>
                    {this.props.star>=1&&<img src={star} style={{left:'189px'}}/>}
                    {this.props.star>=2&&<img src={star} style={{left:'312px'}}/>}
                    {this.props.star>=3&&<img src={star} style={{left:'435px'}}/>}
                </StarDiv>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
            </Content>
        </Main>);
    }
}

<<<<<<< HEAD
export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10 }
=======
export { F0, F1, F2, F3}
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
