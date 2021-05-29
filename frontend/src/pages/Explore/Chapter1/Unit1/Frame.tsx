import React from 'react';
import styled, { keyframes } from 'styled-components';
import Beck from '@assets/explore/chapter1/Beck.png'
import BackgroundClose from '@assets/explore/chapter1/BackgroundClose.png'
import item1 from '@assets/explore/chapter1/unit1/item1.png'
import item2 from '@assets/explore/chapter1/unit1/item2.png'
import item3 from '@assets/explore/chapter1/unit1/item3.png'
import item4 from '@assets/explore/chapter1/unit1/item4.png'
import item5 from '@assets/explore/chapter1/unit1/item5.png'
import item6 from '@assets/explore/chapter1/unit1/item6.png'
import item1alt from '@assets/explore/chapter1/unit1/item1alt.png'
import item2alt from '@assets/explore/chapter1/unit1/item2alt.png'
import item3alt from '@assets/explore/chapter1/unit1/item3alt.png'
import item4alt from '@assets/explore/chapter1/unit1/item4alt.png'
import item5alt from '@assets/explore/chapter1/unit1/item5alt.png'
import item6alt from '@assets/explore/chapter1/unit1/item6alt.png'
import item7 from '@assets/explore/chapter1/unit1/item7.png'
import item8 from '@assets/explore/chapter1/unit1/item8.png'
import item9 from '@assets/explore/chapter1/unit1/item9.png'
import item10 from '@assets/explore/chapter1/unit1/item10.png'
import item11 from '@assets/explore/chapter1/unit1/item11.png'
import item12 from '@assets/explore/chapter1/unit1/item12.png'
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default
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

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${BackgroundClose})` }}>
                <Fly>
                    <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck" />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component<any> {

    state = { clicked: [false, false, false, false, false, false] }
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)

    handleClick = (item) => {
        let { clicked } = this.state
        clicked[item] = true
        this.setState({ clicked: clicked })
        if (item == 1 || item == 2 || item == 5) this.correct.play()
        else this.wrong.play()
        if (clicked[1] && clicked[2] && clicked[5]) this.props.next()
    }

    render() {
        let { clicked } = this.state
        let style = { position: 'absolute', cursor: 'pointer', width: '200px', height: '200px' } as React.CSSProperties
        return (<Main>
            <Content>
                <img src={clicked[0] ? item1alt : item1} style={{ ...style, left: '221px', top: '60px' }} onClick={() => this.handleClick(0)} />
                <img src={clicked[1] ? item2alt : item2} style={{ ...style, left: '512px', top: '60px' }} onClick={() => this.handleClick(1)} />
                <img src={clicked[2] ? item3alt : item3} style={{ ...style, left: '793px', top: '60px' }} onClick={() => this.handleClick(2)} />
                <img src={clicked[3] ? item4alt : item4} style={{ ...style, left: '221px', top: '305px' }} onClick={() => this.handleClick(3)} />
                <img src={clicked[4] ? item5alt : item5} style={{ ...style, left: '512px', top: '305px' }} onClick={() => this.handleClick(4)} />
                <img src={clicked[5] ? item6alt : item6} style={{ ...style, left: '793px', top: '305px' }} onClick={() => this.handleClick(5)} />
            </Content>
        </Main>);
    }
}

class F2 extends React.Component<any> {

    state = { clicked: [true, true, true, true, true, true] }

    render() {
        let { clicked } = this.state
        let style = { position: 'absolute', cursor: 'pointer', width: '200px', height: '200px' } as React.CSSProperties
        return (<Main>
            <Content>
                <img src={clicked[0] ? item1alt : item1} style={{ ...style, left: '221px', top: '60px' }} />
                <img src={clicked[1] ? item2alt : item2} style={{ ...style, left: '512px', top: '60px' }} />
                <img src={clicked[2] ? item3alt : item3} style={{ ...style, left: '793px', top: '60px' }} />
                <img src={clicked[3] ? item4alt : item4} style={{ ...style, left: '221px', top: '305px' }} />
                <img src={clicked[4] ? item5alt : item5} style={{ ...style, left: '512px', top: '305px' }} />
                <img src={clicked[5] ? item6alt : item6} style={{ ...style, left: '793px', top: '305px' }} />
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let style = { position: 'absolute', width: '300px', height: '300px', top: '130px' } as React.CSSProperties
        return (<Main>
            <Content>
                <img src={item7} style={{ ...style, left: '278px', }} />
                <img src={item8} style={{ ...style, left: '720px', }} />
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        let SlideIn = styled.div`
        animation: ${slideFromLeft} 0.5s ease-out forwards ;
        `
        let FadeOut = styled.div`
        animation: ${fade} 0.5s reverse forwards ;
        `
        return (<Main>
            <Content>
                <SlideIn>
                    <img src={item7} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '480px' }} />
                </SlideIn>
                <FadeOut>
                    <img src={item8} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '720px' }} />
                </FadeOut>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        let FadeIn = styled.div`
        animation: ${fade} 0.5s forwards ;
        `
        return (<Main>
            <Content>
                <img src={item7} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '480px' }} />
                <FadeIn>
                    <img src={item9} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '130px' }} />
                    <img src={item10} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '830px' }} />
                </FadeIn>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        let SlideOut = styled.div`
        animation: ${slideFromLeft} 0.5s ease-out reverse forwards ;
        `
        let FadeIn = styled.div`
        animation: ${fade} 0.5s forwards ;
        `
        let FadeOut = styled.div`
        animation: ${fade} 0.5s reverse forwards ;
        `
        return (<Main>
            <Content>
                <SlideOut>
                    <img src={item7} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '480px' }} />
                </SlideOut>
                <FadeIn>
                    <img src={item8} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '720px' }} />
                </FadeIn>
                <FadeOut>
                    <img src={item9} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '130px' }} />
                    <img src={item10} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '830px' }} />
                </FadeOut>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        let SlideIn = styled.div`
        animation: ${slideFromRight} 0.5s ease-out forwards ;
        `
        let FadeOut = styled.div`
        animation: ${fade} 0.5s reverse forwards ;
        `
        return (<Main>
            <Content>
                <SlideIn>
                    <img src={item8} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '480px' }} />
                </SlideIn>
                <FadeOut>
                    <img src={item7} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '278px' }} />
                </FadeOut>
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        let FadeIn = styled.div`
        animation: ${fade} 0.5s forwards ;
        `
        return (<Main>
            <Content>
                <img src={item8} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '480px' }} />
                <FadeIn>
                    <img src={item11} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '130px' }} />
                    <img src={item12} style={{ position: 'absolute', width: '300px', height: '300px', top: '130px', left: '830px' }} />
                </FadeIn>
            </Content>
        </Main>);
    }
}

class F9 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ backgroundImage: `url(${BackgroundClose})` }}>
                <Fly>
                    <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="beck" />
                </Fly>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9 }