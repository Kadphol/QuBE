import React from 'react';
import styled, { keyframes } from 'styled-components';
import Qubie from '@assets/explore/Qubie.png';
import Dragon from '@assets/explore/Dragon.png';
import backgroundUnit from '@assets/explore/chapter2/BackgroundUnit.png'
import qv0 from '@assets/explore/chapter2/quiz/qv0.png'
import qv1 from '@assets/explore/chapter2/quiz/qv1.png'
import qvp from '@assets/explore/chapter2/quiz/qv+.png'
import qvm from '@assets/explore/chapter2/quiz/qv-.png'
import qvpi from '@assets/explore/chapter2/quiz/qv+i.png'
import qvmi from '@assets/explore/chapter2/quiz/qv-i.png'
import leftArrow from '@assets/explore/chapter2/quiz/leftArrow.png'
import rightArrow from '@assets/explore/chapter2/quiz/rightArrow.png'
import shpere1 from '@assets/explore/chapter2/quiz/sphere1.png'
import dot from '@assets/explore/chapter2/quiz/dot.png'
import dot2 from '@assets/explore/chapter2/quiz/dot2.png'
import item3 from '@assets/explore/chapter2/quiz/item3.png'
import entanglement from '@assets/explore/chapter2/quiz/entanglement.png'
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
                <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} alt="Qubie"/>
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
                    <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px', transform:'scaleX(-1)', height: '400px' }} alt="Dragon"/>
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
                    <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px', height: '400px' }} alt="Qubie"/>
                    </Slide1>
                <Slide2>
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px', height: '400px' }} alt="Dragon"/>
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
                <img src={Qubie} style={{ position: 'absolute', left: '150px', top: '120px', height: '400px' }} alt="Qubie"/>
                <img src={Dragon} style={{ position: 'absolute', left: '650px', top: '120px', height: '400px' }} alt="Dragon"/>
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
                    choices={['0, 1, 2, 3, 4', '|+>, |->, |+i>, |-i>', 'x, y, z, h','|Q1>, |Q2>, |Q3>, |Q4>']}
                    solution={1}
                /></ChoicesDiv>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component<any> {

    state = {
        perfect: true,
        select: [false,false,false,false,false,false,false,false],
        round: 0,
        attemp: 0
    }

    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    solution = [0,2,3]
    question = [qv0,qvp,qvm,qvm]

    handleClick = (index) => {
        let { select,attemp,round } = this.state
        select[index] = true
        attemp += 1
        let valid = (index === this.solution[round])
        let nextRound = valid? round+1: round
        this.setState({select:select,attemp:attemp,round:nextRound})
        if(valid) {
            //console.log('valid')
            this.setState({select:[false,false,false,false,false,false,false,false]})
            this.correct.play()
        }
        else this.wrong.play()
        if(attemp>=3) this.setState({ perfect: false })
        if(nextRound>=3) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
    }

    render() {
        return (<Main>
            <Content >
                <img src={shpere1} style={{ position: 'absolute', top: '100px', left: '300px' }} />
                <img src={this.state.select[0]?dot:dot2} onClick={()=>this.handleClick(0)}
                style={{ cursor:'pointer', position: 'absolute', top: '130px', left: '477px' }} />
                <img src={this.state.select[1]?dot:dot2} onClick={()=>this.handleClick(1)}
                style={{ cursor:'pointer', position: 'absolute', top: '195px', left: '395px' }} />
                <img src={this.state.select[2]?dot:dot2} onClick={()=>this.handleClick(2)}
                style={{ cursor:'pointer', position: 'absolute', top: '400px', left: '335px' }} />
                <img src={this.state.select[3]?dot:dot2} onClick={()=>this.handleClick(3)}
                style={{ cursor:'pointer', position: 'absolute', top: '255px', left: '530px' }} />
                <img src={this.state.select[4]?dot:dot2} onClick={()=>this.handleClick(4)}
                style={{ cursor:'pointer', position: 'absolute', top: '280px', left: '380px' }} />
                <img src={this.state.select[5]?dot:dot2} onClick={()=>this.handleClick(5)}
                style={{ cursor:'pointer', position: 'absolute', top: '315px', left: '650px' }} />
                <img src={this.state.select[6]?dot:dot2} onClick={()=>this.handleClick(6)}
                style={{ cursor:'pointer', position: 'absolute', top: '380px', left: '555px' }} />
                <img src={this.state.select[7]?dot:dot2} onClick={()=>this.handleClick(7)}
                style={{ cursor:'pointer', position: 'absolute', top: '477px', left: '477px' }} />
                <img src={item3} style={{ position: 'absolute', top: '200px', left: '810px' }} />
                <img src={this.question[this.state.round]} style={{ position: 'absolute', top: '240px', left: '850px' }} />
            </Content>
        </Main>);
    }
}


class F6 extends React.Component<any> {

    validate = (valid) => {
        if (valid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
        else this.setState({ perfect: false })
    }

    showList = [[qv1, qv0], [qvm, qvp], [qvmi, qvpi], [qv0, qv1], [qvp, qvm], [qvpi, qvmi]]

    state = { select: 3, show: this.showList[3], perfect: true }

    click = new Audio(sfxClick)

    handleClick = (i) => {
        this.click.play()
        let target = this.state.select + i === 6 ? 0 : this.state.select + i === -1 ? 5 : this.state.select + i
        this.setState({ select: target, show: this.showList[target]})
    }

    render() {
        return (<Main>
            <Content >
                <ChoicesDiv style={{left:'-100px'}}>
                    <Question
                    answerValidate={this.validate}
                    choices={['Q1 เป็นไปได้ทั้ง |0> |1> |+> |->', 'Q1 Q2 และ Q3 เป็นอิสระต่อกัน', 'Q1 มีค่าสถานะตรงกับ Q2 แต่ตรงข้ามกับ Q3', 'Q1 Q2 และ Q3 มีค่าสถานะตรงข้ามกันทั้งหมด']}
                    solution={2}
                /></ChoicesDiv>
                <img src={this.state.show[0]} style={{ position: 'absolute', left: '900px', top: '105px' }} />
                <img src={this.state.show[0]} style={{ position: 'absolute', left: '900px', top: '255px' }} />
                <img src={this.state.show[1]} style={{ position: 'absolute', left: '900px', top: '405px' }} />
                <img src={entanglement} style={{ position: 'absolute', left: '890px', top: '85px' }} />
                <img src={entanglement} style={{ position: 'absolute', left: '890px', top: '235px' }} />
                <img src={leftArrow} onClick={() => this.handleClick(-1)} style={{ position: 'absolute', left: '770px', top: '280px', cursor: 'pointer' }} />
                <img src={rightArrow} onClick={() => this.handleClick(1)} style={{ position: 'absolute', left: '1070px', top: '280px', cursor: 'pointer' }} />
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
        return (<Main style={{background:`url(${backgroundUnit})`}}>
            <Content>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={Dragon} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} alt="Dragon"/>
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
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                    <img src={Qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} alt="Qubie"/>
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
            <Content style={{background:`url(${backgroundUnit})`}} >
                    {   item < 4 && 
                        <ChapterBox next={this.props.next} button={false} chapter="2" title="คิวบิต" textColor="#84017F" boxColor="#EDACE6" buttonColor="#C052DB" text="เริ่มต้น"/>
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
                        <ChapterBox next={this.props.next} button chapter="2" title="คิวบิต" textColor="#84017F" boxColor="#EDACE6" buttonColor="#C052DB" text="เสร็จสิ้น"/>
                    }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10 }
