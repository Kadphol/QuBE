import React from 'react';
import styled, { keyframes } from 'styled-components';
import Qubie from '@assets/explore/Qubie.png';
import Dragon from '@assets/explore/Dragon.png';
import backgroundUnit from '@assets/explore/chapter1/backgroundUnit.png'
import item1 from '@assets/explore/chapter1/quiz/item1.png';
import item2 from '@assets/explore/chapter1/quiz/item2.png';
import item3 from '@assets/explore/chapter1/quiz/item3.png';
import item4 from '@assets/explore/chapter1/quiz/item4.png';
import item5 from '@assets/explore/chapter1/quiz/item5.png';
import item6 from '@assets/explore/chapter1/quiz/item6.png';
import item7 from '@assets/explore/chapter1/quiz/item7.png';
import item8 from '@assets/explore/chapter1/quiz/item8.png';
import item9 from '@assets/explore/chapter1/quiz/item9.png';
import item10 from '@assets/explore/chapter1/quiz/item10.png';
import item11 from '@assets/explore/chapter1/quiz/item11.png';
import item12 from '@assets/explore/chapter1/quiz/item12.png';
import item13 from '@assets/explore/chapter1/quiz/item13.png';
import item14 from '@assets/explore/chapter1/quiz/item14.png';
import lightOn from '@assets/explore/chapter1/quiz/lightOn.png';
import lightOff from '@assets/explore/chapter1/quiz/lightOff.png';
import switchOn from '@assets/explore/chapter1/quiz/switchOn.png';
import switchOff from '@assets/explore/chapter1/quiz/switchOff.png';
import bit0 from '@assets/explore/chapter1/quiz/bit0.png';
import bit1 from '@assets/explore/chapter1/quiz/bit1.png';
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import starFrame from '@assets/explore/chapter1/quiz/starFrame.png';
import nextButton from '@assets/explore/chapter1/quiz/nextButton.png';
import Question from '@components/Question';
import ChapterBox from '@components/ChapterBox'
const sfxStar = require('@assets/sound/sfx_star.mp3').default;
const sfxPing = require('@assets/sound/sfx_ping.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxClear = require('@assets/sound/sfx_clear.mp3').default;

const ChoicesDiv = styled.div`
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
overflow: hidden;
`;

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
position: absolute;
width: 700px;
height: 400px;
left: 270px;
top: 163px;
img {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 173px;
}
`

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class F0 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-700px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Qubie"/>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}
class F1 extends React.Component {
    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.75s 0.2s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Flip>
                    <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px', transform:'scaleX(-1)' }} alt="Dragon"/>
                    </Flip>
                </Fly>
            </Content>
        </Main>);
    }
}
class F2 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-700px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-150px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide1>
                    <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px' }} alt="Qubie"/>
                    </Slide1>
                <Slide2>
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px' }} alt="Dragon"/>
                </Slide2>
                </Fly>
            </Content>
        </Main>);
    }
}
class F3 extends React.Component {
    render() {
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px' }} alt="Qubie"/>
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px' }} alt="Dragon"/>
                </Fly>
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

    render() {
        return (<Main>
            <Content >
                <ChoicesDiv><Question
                    answerValidate={this.validate}
                    choices={['ราคาถูกหาซื้อได้ง่าย', 'สามารถประมวลผลได้เร็วกว่า', 'ขนาดเล็กพกพาสะดวก', 'นิยมใช้กันอย่างแพร่หลาย']}
                    solution={1}
                /></ChoicesDiv>
            </Content>
        </Main>);
    }
}


class F5 extends React.Component<any> {

    state = {
        perfect: true,
        switches: [false, true, false, true, true, false],
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
        if(attemp>=4) this.setState({ perfect: false })
        if(allValid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
    }

    render() {
        return (<Main>
            <Content >
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
            </Content>
        </Main>);
    }
}

class F6 extends React.Component<any> {

    state = {
        perfect: true,
        switches: [false, false, true, false, false, true],
        attemp: 0,
        letters: ['A','C','B']
    }

    solution = [false,true,false,false,true,true]
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    lightLeft = [241,314,431,504, 621, 694]

    handleClick = (index) => {
        let { switches,attemp } = this.state
        switches[index] = !switches[index]
        attemp += 1
        let newLetter = ['E','E','E']
        let i
        for(i=0;i<=2;i++){
            newLetter[i] = !switches[i*2]&&!switches[i*2+1]? 'A': !switches[i*2]&&switches[i*2+1]? 'B' : switches[i*2]&&!switches[i*2+1]? 'C' : 'D'
        }
        this.setState({switches:switches,attemp:attemp,letters:newLetter})
        let valid = (((index==0||index==1)&&(!this.state.switches[0]&&this.state.switches[1])) ||
                     ((index==2||index==3)&&(!this.state.switches[2]&&!this.state.switches[3])) ||
                     ((index==4||index==5)&&(this.state.switches[4]&&this.state.switches[5])) 
                    )
        if(valid) this.correct.play()
        else this.wrong.play()
        let allValid = JSON.stringify(switches) === JSON.stringify(this.solution)
        if(attemp>=3) this.setState({ perfect: false })
        if(allValid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
    }

    render() {
        return (<Main>
            <Content >
            {
                    this.state.switches.map((item, index) => (
                        <React.Fragment>
                            <img src={item ? bit1 : bit0} 
                            onMouseDown={()=>this.click.play()}
                            onClick={()=>this.handleClick(index)}
                            style={{ height:'100px', width:'auto', cursor:'pointer', position: 'absolute', top: `450px`, left: `${this.lightLeft[index]}px` }} />
                        </React.Fragment>
                    )
                    )
                }
                <img src={item10} style={{position:'absolute',top:'130px',left:'840px'}}/>
                <img src={item11} style={{height:'350px',position:'absolute',top:'66px',left:'347px'}}/>
                <img src={item12} style={{position:'absolute',top:'323px',left:'480px'}}/>
                <img src={item13} style={{position:'absolute',top:'323px',left:'622px'}}/>
                <img src={item14} style={{position:'absolute',top:'323px',left:'288px'}}/>
                <p style={{position:'absolute',top:'100px',left:'380px', fontSize:'100px',color:'white'}}>{this.state.letters[0]}</p>
                <p style={{position:'absolute',top:'100px',left:'480px', fontSize:'100px',color:'white'}}>{this.state.letters[1]}</p>
                <p style={{position:'absolute',top:'100px',left:'580px', fontSize:'100px',color:'white'}}>{this.state.letters[2]}</p>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.75s 0.5s ease-out forwards;
            `
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 1.5s ease-out forwards;
            `
        return (<Main>
            <Content>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Dragon"/>
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 1.5s ease-out forwards;
            `
        return (<Main>
            <Content>
                <Fly>
                    <Slide>
                    <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Qubie"/>
                    </Slide>
                </Fly>
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

    state = { item: 0 }

    componentDidMount = () => {
        this.clear.volume = 0.4
        this.clear.play()
        setInterval(() => {
            this.setState({ item: this.state.item+1 })
        }, 1000)
    }

    render() {

        let { item } = this.state

        return (<Main>
            <Content >
                    {   item < 4 && 
                        <ChapterBox next={this.props.next} button={false} chapter="1" title="พื้นฐาน" textColor="green" boxColor="lightgreen" buttonColor="#52DB89" text="เริ่มต้น"/>
                    }
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '459px' }} />
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '582px' }} />
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '705px' }} />
                    {   item >= 1 && item < 4 &&
                        <img src={this.props.star >= 1 ? star : noStar} style={{ position:'absolute', top: '400px', left: '459px' }} />
                    }
                    {   item >= 2 && item < 4 &&
                        <img src={this.props.star >= 2 ? star : noStar} style={{ position:'absolute', top: '400px', left: '582px' }} />
                    }
                    {   item >= 3 && item < 4 &&
                        <img src={this.props.star >= 3 ? star : noStar} style={{ position:'absolute', top: '400px', left: '705px' }} />
                    }
                    {   item >= 4 &&
                        <ChapterBox next={this.props.next} button chapter="1" title="พื้นฐาน" textColor="green" boxColor="lightgreen" buttonColor="#52DB89" text="เสร็จสิ้น"/>
                    }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10 }
