import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import far from '@assets/explore/chapter4/backgroundFar.png';
import close from '@assets/explore/chapter4/backgroundClose.png';
import ChapterBox from '@components/ChapterBox'
import gustIcon from '@assets/explore/chapter4/gustIcon.png';
import gust from '@assets/explore/chapter4/gust.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'

const sfxClick = require('@assets/sound/sfx_click.mp3').default

const Main = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: absolute;
overflowX: hidden;
`;

const Content = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: relative;
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
            <Content >
                <ChapterBox button next={this.props.next} chapter="4" title="เกต" textColor="#005D8B" boxColor="skyblue" buttonColor="#005D8B" text="เริ่มต้น" />
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {

    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-500px)}
            50% {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <Slide>
                            <img src={qubie} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px' }} />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {

    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            100% {transform: scaleX(-1)}
            `} 0.5s 0.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                        <Flip>
                            <img src={qubie} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px' }} />
                        </Flip>
                </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(120px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Jump = styled.div`
            animation: ${keyframes`
            from {transform: translate(700px,-200px)}
            33% {transform: translate(400px,0px)}
            66% {transform: translate(200px,-200px)}
            100% {transform: translate(0px,0px)}
            `} 0.4s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <Slide1>
                        <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide1>
                    <Jump>
                    <img src={gust} style={{ position: 'absolute', left: '600px', top: '60px', height: '400px' }} />
                    </Jump>
                </Fly>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (<Main >
            <Content style={{ backgroundImage: `url(${close})`}}>
                <Fly>
                <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', }} />
                <img src={gust} style={{ position: 'absolute', left: '600px', top: '60px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})`}}>
                <Fly>
                <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', }} />
                <img src={gust} style={{ position: 'absolute', left: '600px', top: '60px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})`}}>
                <Fly>
                <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', }} />
                <img src={gust} style={{ position: 'absolute', left: '600px', top: '60px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    
    render() {
        let Slide = styled.div`
        animation: ${keyframes`
        from {transform: translateX(0px)}
        to {transform: translateX(1200px)}
        `} 0.75s 2.5s ease-out forwards;
        `
    let Jump = styled.div`
        animation: ${keyframes`
        from {transform: translate(0px,0px)}
        33% {transform: translate(200px,-200px)}
        66% {transform: translate(400px,0px)}
        to {transform: translate(700px,-200px)}
        `} 0.5s 1.5s ease-out forwards;
        `
        let Flip = styled.div`
        animation: ${keyframes`
        from {transform: scaleX(1) translateX(0)}
        to {transform: scaleX(-1) translateX(-300px)}
        `} 0.5s 0.5s ease-out forwards;
        `
        return (<Main>
             <Content style={{ backgroundImage: `url(${close})`}}>
                <Fly>
                    <Slide>
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', }} />
                    </Slide>
                <Jump>
                    <Flip>
                    <img src={gust} style={{ position: 'absolute', left: '600px', top: '60px', height: '400px' }} />
                    </Flip>
                </Jump>
                </Fly>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7}