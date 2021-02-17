import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Bew from '../../../../assets/explore/chapter2/Bew.png'
import Qubie from '../../../../assets/explore/Qubie.png'
import far from '../../../../assets/explore/chapter2/BackgroundFar.png';
import close from '../../../../assets/explore/chapter2/BackgroundClose.png';
const sfxClick = require('../../../../assets/sound/sfx_click.mp3').default

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

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${far})`}}>
                <img src={Qubie} style={{ position: 'absolute', left: '500px', top: '320px', height:'200px' }} />
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${far})`}}>
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px'  }} />
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main style={{backgroundImage:`url(${far})`}}>
            <Content>
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px'  }} />
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (<Main style={{backgroundImage:`url(${far})`}}>
            <Content>
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px'  }} />
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7}