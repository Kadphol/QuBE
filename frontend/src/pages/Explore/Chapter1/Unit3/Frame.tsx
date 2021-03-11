import React from 'react';
import styled, { keyframes } from 'styled-components';
import Beck from '@assets/explore/chapter1/Beck.png';
import BackgroundClose from '@assets/explore/chapter1/BackgroundClose.png';

import ccircuit from '@assets/explore/chapter1/unit3/complex_circuit.png';
import circuit0 from '@assets/explore/chapter1/unit3/circuit0.png';
import circuit1 from '@assets/explore/chapter1/unit3/circuit1.png';
import circuit2 from '@assets/explore/chapter1/unit3/circuit2.png';
import ccircuitEmpty from '@assets/explore/chapter1/unit3/complex_circuit_empty.png';
import ccircuitA from '@assets/explore/chapter1/unit3/complex_circuit_A.png';
import A from '@assets/explore/chapter1/unit3/A.png';
import fillA from '@assets/explore/chapter1/unit3/A_filled.png';
import B from '@assets/explore/chapter1/unit3/B.png';
import C from '@assets/explore/chapter1/unit3/C.png';
import line from '@assets/explore/chapter1/unit3/line.png';
import process from '@assets/explore/chapter1/unit3/process.png';

const sfxClick = require('@assets/sound/sfx_click.mp3').default;

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

const FadeIn = styled.div`
  animation: ${fade} 0.5s forwards;
`;

const FadeOut = styled.div`
  animation: ${fade} 0.5s reverse forwards;
`;

const SlideInLeft = styled.div`
  animation: ${slideFromLeft} 0.5s ease-out forwards;
`;

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${BackgroundClose})`}}>
                <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck"/>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {

    render() {
        return (
            <Main>
                <Content>
                    <img src={ccircuit} style={{ position: 'absolute', left: '150px', top: '120px' }} alt="complex circuit"/>
                </Content>
            </Main>
        );
    }
}

class F2 extends React.Component<{}, {current: number}> {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        };
    }

    componentDidMount() {
        setInterval((() => {
            this.setState({
                current: 1
            });
        }), 1500);
    }

    render() {
        const image = [circuit0, circuit1]
        return (
            <Main>
                <Content>
                    <FadeIn>
                        <img src={image[this.state.current]} style={{ position: 'absolute', left: '260px', top: '150px' }} alt="circuit with zero bit"/>
                    </FadeIn>
                </Content>
            </Main>
        );
    }
}

class F3 extends React.Component {
    render() {
        let button_style = { position: 'absolute', width: '60px', height: '60px', left: '400px' } as React.CSSProperties
        return (
            <Main>
                <Content>
                    <SlideInLeft>
                        <img src={A} style={{ ...button_style, top: '200px' }} alt="button A"/>
                        <img src={B} style={{ ...button_style, top: '280px' }} alt="button B"/>
                        <img src={C} style={{ ...button_style, top: '360px' }} alt="button C"/>
                        <img src={circuit2} style={{ position: 'absolute', left: '600px', top: '220px' }} alt="circuit"/>
                    </SlideInLeft>
                </Content>
            </Main>
        );
    }
}

class F4 extends React.Component {
    render() {
        let button_style = { position: 'absolute', width: '60px', height: '60px', left: '300px' } as React.CSSProperties
        return (
            <Main>
                <Content>
                    <img src={A} style={{ ...button_style, top: '200px' }} alt="button A"/>
                    <img src={B} style={{ ...button_style, top: '280px' }} alt="button B"/>
                    <img src={C} style={{ ...button_style, top: '360px' }} alt="button C"/>
                    <img src={line} style={{ position: 'absolute', left: '360px', top: '225px' }} alt="line"/>
                    <img src={ccircuitEmpty} style={{ position: 'absolute', left: '400px', top: '145px'}} alt="line"/>
                </Content>
            </Main>
        );
    }
}

class F5 extends React.Component<any> {
    state = {
        clicked : false
    }
    click = new Audio(sfxClick);
    handleClick() {
        this.setState({clicked: true});
        this.props.next();
    }
    render() {
        let button_style = { position: 'absolute', width: '60px', height: '60px', left: '300px' } as React.CSSProperties
        return (
            <Main>
                <Content>
                    <img 
                        src={this.state.clicked? fillA: A} 
                        style={{ ...button_style, top: '200px' }} 
                        onMouseDown={() => this.click.play()}
                        onClick={()=> this.handleClick()}
                        alt="button A"/>
                    <img src={B} style={{ ...button_style, top: '280px' }} alt="button B"/>
                    <img src={C} style={{ ...button_style, top: '360px' }} alt="button C"/>
                    <img src={line} style={{ position: 'absolute', left: '360px', top: '225px' }} alt="line"/>
                    <img src={this.state.clicked? ccircuitA:ccircuitEmpty} style={{ position: 'absolute', left: '400px', top: '145px'}} alt="line"/>
                </Content>
            </Main>
        );
    }
}

class F6 extends React.Component {
    render() {
        let button_style = { position: 'absolute', width: '60px', height: '60px', left: '300px' } as React.CSSProperties
        return (
            <Main>
                <Content>
                    <img 
                        src={fillA} 
                        style={{ ...button_style, top: '200px' }} 
                        alt="filled button A"/>
                    <img src={B} style={{ ...button_style, top: '280px' }} alt="button B"/>
                    <img src={C} style={{ ...button_style, top: '360px' }} alt="button C"/>
                    <img src={line} style={{ position: 'absolute', left: '360px', top: '225px' }} alt="line"/>
                    <img src={ccircuitA} style={{ position: 'absolute', left: '400px', top: '145px'}} alt="line"/>
                </Content>
            </Main>
        );
    }
}

class F7 extends React.Component {
    render() {
        let button_style = { position: 'absolute', width: '60px', height: '60px', left: '300px' } as React.CSSProperties
        return (
            <Main>
                <Content>
                    <FadeOut>
                        <img 
                            src={fillA} 
                            style={{ ...button_style, top: '200px' }} 
                            alt="filled button A"/>
                        <img src={B} style={{ ...button_style, top: '280px' }} alt="button B"/>
                        <img src={C} style={{ ...button_style, top: '360px' }} alt="button C"/>
                        <img src={line} style={{ position: 'absolute', left: '360px', top: '225px' }} alt="line"/>
                        <img src={ccircuitA} style={{ position: 'absolute', left: '400px', top: '145px'}} alt="line"/>
                    </FadeOut>
                </Content>
            </Main>
        );
    }
}

class F8 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <FadeIn>
                        <img src={process} style={{ position: 'absolute', left: '220px', top: '150px'}} alt="input process output"/>
                    </FadeIn>
                </Content>
            </Main>
        );
    }
}

class F9 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${BackgroundClose})`}}>
                <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck"/>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9}