import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Bew from '@assets/explore/chapter2/bew.png'
import Qubie from '@assets/explore/Qubie.png'
import far from '@assets/explore/chapter2/backgroundFar.png';
import close from '@assets/explore/chapter2/backgroundClose.png';
import ChapterBox from '@components/ChapterBox'
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
                <ChapterBox button next={this.props.next} chapter="2" title="คิวบิต" textColor="#84017F" boxColor="#EDACE6" buttonColor="#C052DB" text="เริ่มต้น" />
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
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.5s 0.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{backgroundImage:`url(${far})`}}>
            <Fly>
                <Slide>
                    <Flip>
                    <img src={Qubie} style={{ position: 'absolute', left: '500px', top: '320px', height:'200px' }} />
                    </Flip>
                </Slide>
            </Fly>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(120px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(400px)}
            to {transform: translateX(0px)}
            `} 0.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{backgroundImage:`url(${far})`}}>
            <Fly>
                <Slide1>
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px', transform: 'scaleX(-1)'  }} />
                </Slide1>
                <Slide2>
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
                </Slide2>
            </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (<Main style={{backgroundImage:`url(${far})`}}>
            <Content>
            <Fly>
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px', }} />
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
            </Fly>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        let Move1 = styled.div`
            transform-origin: 50% 50%;
            animation: ${keyframes`
            from {transform: translate(0px,0px) scale(1,1) }
            to {transform: translate(150px,120px) scale(0.5,0.5) }
            `} 0.75s 2s forwards;
            `
        let Fade = styled.div`
        animation: ${keyframes`
        from {opacity: 100%; scale(1,1)}
        to {opacity: 0%; scale(0.5,0.5)}
        `} 0.75s 2.5s ease-out forwards;
        `
        return (<Main style={{backgroundImage:`url(${far})`}}>
            <Content>
                <Fly>
                <Fade>
                    <Move1>
                <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height:'200px'  }} />
                    </Move1>
                <Move1>
                <img src={Bew} style={{ position: 'absolute', left: '620px', top: '320px', height:'200px' }} />
                </Move1>
                </Fade>
                </Fly>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            <Fly>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
            </Fly>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            <Fly>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
            </Fly>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <Fly>
                <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        let Flip = styled.div`
            transform-origin: 50% 100%;
            animation: ${keyframes`
            from {transform: ScaleX(1) translate(0px)}
            to {transform: ScaleX(-1) translateX(-300px)}
            `} 0.5s 1.5s ease-out forwards;
            `
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 2s ease-out forwards;
            `
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
                <Fly>
                    <Slide>
                        <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                        <Flip>
                        <img src={Bew} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8}