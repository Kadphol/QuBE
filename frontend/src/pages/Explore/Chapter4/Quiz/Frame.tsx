import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundUnit from '@assets/explore/chapter4/backgroundUnit.png'
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import ChapterBox from '@components/ChapterBox'
import qubie from '@assets/explore/Qubie.png';
import qubieIcon from '@assets/explore/qubieIcon.png';
import dragon from '@assets/explore/Dragon.png';
import dragonIcon from '@assets/explore/dragonIcon.png';
import starFrame from '@assets/explore/chapter1/quiz/starFrame.png';
import nextButton from '@assets/explore/chapter1/quiz/nextButton.png';

const sfxStar = require('@assets/sound/sfx_star.mp3').default;
const sfxPing = require('@assets/sound/sfx_ping.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxClear = require('@assets/sound/sfx_clear.mp3').default;

const Main = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: absolute;
`

const Content = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: relative;
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
const ChoicesDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`

const fade1 = keyframes`
0% {opacity: 0%}
100% {opacity: 100%}
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
            `} 1.25s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                        <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px'}} alt="Qubie"/>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (
        <Main>
            <Content style={{background:`url(${backgroundUnit})`,overflowY:'hidden'}}>
                <Fly>
            <img src={dragon} style={{ position: 'absolute', left: '400px', top: '420px' }} alt="Dragon"/>
                </Fly>
            </Content>
        </Main>);
    }
}


class F2 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateY(300px)}
            to {transform: translateY(0px)}
            `} 0.75s ease-out forwards;
            `
        return (
        <Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                    <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Dragon"/>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-700px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-200px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (
        <Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
            <Slide1>
            <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} alt="Qubie"/>
            </Slide1>
            <Slide2>
            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px' }} alt="Dragon"/>
            </Slide2>
                </Fly>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
        <Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
            <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} alt="Qubie"/>
            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px' }} alt="Dragon"/>
                </Fly>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component<any> {
    render() {
        return (
        <Main>
            <Content>
            <button onClick={()=>this.props.justClear(this.props.index)}></button>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component<any> {
    render() {
        return (
        <Main>
            <Content>
            <button onClick={()=>this.props.justClear(this.props.index)}></button>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component<any> {
    render() {
        return (
        <Main>
            <Content>
            <button onClick={()=>this.props.justClear(this.props.index)}></button>
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        return (<Main style={{background:`url(${backgroundUnit})`}}>
            <Content>
                <Fly>
                <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} alt="Qubie"/>
                <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px' }} alt="Dragon"/>
                </Fly>
            </Content>
        </Main>);
    }
}

class F9 extends React.Component {
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
                        <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Dragon"/>
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F10 extends React.Component {
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
                    <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Qubie"/>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F99 extends React.Component<any> {

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

class F100 extends React.Component<any> {

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
                        <ChapterBox next={this.props.next} button={false} chapter="4" title="เกต" textColor="#005D8B" boxColor="skyblue" buttonColor="#005D8B" text="เริ่มต้น"/>
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
                        <ChapterBox next={this.props.next} button chapter="4" title="เกต" textColor="#005D8B" boxColor="skyblue" buttonColor="#005D8B" text="เสร็จสิ้น"/>
                    }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F99, F100 }
