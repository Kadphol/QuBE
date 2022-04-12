import React from 'react';
import styled, { keyframes } from 'styled-components';
import Beck from '@assets/explore/chapter1/beck.png'
import Qubie from '@assets/explore/Qubie.png'
import king from '@assets/challenge/king.png'
import step1 from '@assets/challenge/step1.png'
import step2 from '@assets/challenge/step2.png'
import step3 from '@assets/challenge/step3.png'
import step4 from '@assets/challenge/step4.png'
import step5 from '@assets/challenge/step5.png'
import far from '@assets/challenge/backgroundFar.png';

const sfxClick = require('@assets/sound/sfx_click.mp3').default

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

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class F0 extends React.Component<any> {

    click = new Audio(sfxClick)

    render() {
        return (<Main>
            <Content>
                    <Fly>
                        <img src={king} style={{ position: 'absolute', left: '400px', top: '150px', height: '400px' }} />
                    </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {

    render() {
        return (<Main>
            <Content>
                        <img src={step1} style={{ position: 'absolute', left: '180px', top: '50px', height: '500px' }} />
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={step2} style={{ position: 'absolute', left: '180px', top: '50px', height: '500px' }} />
            </Content>
        </Main>);
    }
} 

class F3 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={step3} style={{ position: 'absolute', left: '180px', top: '50px', height: '500px' }} />
            </Content>
        </Main>);
    }
} 

class F4 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={step4} style={{ position: 'absolute', left: '180px', top: '50px', height: '500px' }} />
            </Content>
        </Main>);
    }
} 

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={step5} style={{ position: 'absolute', left: '180px', top: '50px', height: '500px' }} />
            </Content>
        </Main>);
    }
} 


export { F0, F1, F2, F3, F4, F5}