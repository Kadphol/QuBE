import React from 'react';
import styled, { keyframes } from 'styled-components';
import Beck from '@assets/explore/chapter1/beck.png'
import Qubie from '@assets/explore/Qubie.png'   
import far from '@assets/explore/chapter1/backgroundFar.png';
import close from '@assets/explore/chapter1/backgroundClose.png';
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
            <Content >
                <ChapterBox button next={this.props.next} chapter="1" title="พื้นฐาน" textColor="green" boxColor="lightgreen" buttonColor="#52DB89" text="เริ่มต้น" />
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
            <Content style={{ backgroundImage: `url(${far})` }}>
                <Slide>
                    <Fly>
                        <img src={Qubie} style={{ position: 'absolute', left: '500px', top: '320px', height: '200px' }} />
                    </Fly>
                </Slide>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(120px)}
            50% {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(400px)}
            50% {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${far})` }}>
                <Fly>
                    <Slide1>
                    <img src={Qubie} style={{ position: 'absolute', left: '380px', top: '320px', height: '200px' }} />
                    </Slide1>
                    <Slide2>
                    <img src={Beck} style={{ position: 'absolute', left: '620px', top: '320px', height: '200px' }} />
                    </Slide2>
                </Fly>
            </Content>
        </Main>);
    }
} class F3 extends React.Component {
    render() {
        return (<Main style={{ backgroundImage: `url(${close})` }}>
            <Content>
                <Fly>
                <img src={Beck} style={{ position: 'absolute', left: '600px', top: '160px',height: '320px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '160px',height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
} class F4 extends React.Component {
    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: ScaleX(1)}
            to {transform: ScaleX(-1)}
            `} 0.5s 1.5s ease-out forwards;
            `
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 2s ease-out forwards;
            `
        return (<Main style={{ backgroundImage: `url(${close})` }}>
            <Content>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={Beck} style={{ position: 'absolute', left: '600px', top: '160px',height: '320px' }} />
                        </Flip>
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '160px',height: '400px' }} />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
} class F5 extends React.Component {
    render() {
        return (<Main style={{ backgroundImage: `url(${close})` }}>
            <Content>
                <img src={Beck} style={{ position: 'absolute', left: '600px', top: '160px',height: '320px' }} />
                <img src={Qubie} style={{ position: 'absolute', left: '200px', top: '160px',height: '400px' }} />
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5 }