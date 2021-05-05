import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import far from '@assets/explore/chapter5/backgroundFar.png';
import close from '@assets/explore/chapter5/backgroundClose.png';
import ChapterBox from '@components/ChapterBox'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import princess from '@assets/explore/chapter5/princess.png'
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
                <ChapterBox button next={this.props.next} chapter="5" title="อัลกอริทึม" textColor="#B11B1B" boxColor="lightgrey" buttonColor="#B11B1B" text="เริ่มต้น" />
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
            `} 1.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                <Slide>
                    <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Fly>
                    <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 1s 1s ease-out forwards;
            `
            let Flash = styled.div`
            animation: ${keyframes`
            from {filter: brightness(none) invert(0)}
            to {filter: brightness(0) invert(1)}
            `} 2s 2s ease-out forwards;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Flash>
                    <Fly>
                        <Flip>
                            <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                        </Flip>
                </Fly>
                </Flash>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
            let Flash = styled.div`
            animation: ${keyframes`
            from {filter: brightness(none) invert(0)}
            to {filter: brightness(0) invert(1)}
            `} 2s ease-out reverse;
            `
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                <Flash>
                    <Fly>
                            <img src={princess} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                    </Fly>
                </Flash>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${close})` }}>
                    <Fly>
                            <img src={princess} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                    </Fly>
            </Content>
        </Main>);
    }
}
export { F0, F1, F2, F3, F4, F5 }