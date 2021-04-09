import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dialog from '@components/DialogBox'
import backgroundClose from '@assets/explore/chapter5/backgroundClose.png'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import princess from '@assets/explore/chapter5/princess.png'

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

class F0 extends React.Component {
    render() {
        return (
        <Main>
            <Content>

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

export { F0, F1, F2, F3, F4, F5, F6, F7 }