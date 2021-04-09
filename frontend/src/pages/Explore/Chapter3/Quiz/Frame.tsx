import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundUnit from '@assets/explore/chapter3/backgroundUnit.png'
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import ChapterBox from '@components/ChapterBox'
import qubie from '@assets/explore/Qubie.png';
import qubieIcon from '@assets/explore/qubieIcon.png';
import dragon from '@assets/explore/Dragon.png';
import dragonIcon from '@assets/explore/dragonIcon.png';

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

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (
        <Main>
            <Content>
                
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
                        <ChapterBox next={this.props.next} button={false} chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เริ่มต้น"/>
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
                        <ChapterBox next={this.props.next} button chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เสร็จสิ้น"/>
                    }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F100 }
