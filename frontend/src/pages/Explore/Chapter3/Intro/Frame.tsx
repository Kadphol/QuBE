import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import far from '@assets/explore/chapter3/backgroundFar.png';
import close from '@assets/explore/chapter3/backgroundClose.png';
import ChapterBox from '@components/ChapterBox'
import maxIcon from '@assets/explore/chapter3/maxIcon.png';
import max from '@assets/explore/chapter3/max.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'

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
                <ChapterBox button next={this.props.next} chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เริ่มต้น" />
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
            33% {transform: scaleX(-1)}
            66% {transform: scaleX(1)}
            100% {transform: scaleX(-1)}
            `} 1s 1s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <Slide>
                        <Flip>
                            <img src={qubie} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px' }} />
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
        let Fade = styled.div`
            animation: ${keyframes`
            from {opacity:0%}
            to {opacity:100%}
            `} 3s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <Slide1>
                        <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide1>
                    <Fade>
                        <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                    </Fade>
                </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (<Main style={{ backgroundImage: `url(${close})` }}>
            <Content>
                <Fly>
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', }} />
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (<Main style={{ backgroundImage: `url(${close})` }}>
            <Content>
                <Fly>
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F9 extends React.Component {
    render() {
        let Flip = styled.div`
        animation: ${keyframes`
        from {transform: scaleX(1) translateX(0)}
        to {transform: scaleX(-1) translateX(-300px)}
        `} 1s 1s ease-out forwards;
        `
        let Fade = styled.div`
            animation: ${keyframes`
            from {opacity:100%}
            to {opacity:0%}
            `} 0.75s 2s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px' }} />
                        <Fade>
                            <Flip>
                            <img src={max} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                            </Flip>
                        </Fade>
                </Fly>
            </Content>
        </Main>);
    }
}

class F10 extends React.Component {
    render() {
        let Flip = styled.div`
        transform-origin: center center;
            animation: ${keyframes`
            from {transform: scaleX(1)}
            50% {transform: scaleX(-1)}
            100% {transform: scaleX(1)}}
            `} 0.75s 1s ease-out forwards;
            `
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-200px)}
            20% {transform: translateX(0px)}
            40% {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 5s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10 }