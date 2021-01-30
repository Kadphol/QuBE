import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Beck from '../../../../assets/explore/chapter1/Beck.png'
import BackgroundClose from '../../../../assets/explore/chapter1/BackgroundClose.png'
import item1 from '../../../../assets/explore/chapter1/quiz/item1.png'
import item2 from '../../../../assets/explore/chapter1/quiz/item2.png'
import item3 from '../../../../assets/explore/chapter1/unit1/item3.png'
import item4 from '../../../../assets/explore/chapter1/unit1/item4.png'
import item5 from '../../../../assets/explore/chapter1/unit1/item5.png'
import item6 from '../../../../assets/explore/chapter1/unit1/item6.png'
import item1alt from '../../../../assets/explore/chapter1/unit1/item1alt.png'
import item2alt from '../../../../assets/explore/chapter1/unit1/item2alt.png'
import item3alt from '../../../../assets/explore/chapter1/unit1/item3alt.png'
import item4alt from '../../../../assets/explore/chapter1/unit1/item4alt.png'
import item5alt from '../../../../assets/explore/chapter1/unit1/item5alt.png'
import item6alt from '../../../../assets/explore/chapter1/unit1/item6alt.png'
import item7 from '../../../../assets/explore/chapter1/unit1/item7.png'
import item8 from '../../../../assets/explore/chapter1/unit1/item8.png'
import item9 from '../../../../assets/explore/chapter1/unit1/item9.png'
import item10 from '../../../../assets/explore/chapter1/unit1/item10.png'
import item11 from '../../../../assets/explore/chapter1/unit1/item11.png'
import item12 from '../../../../assets/explore/chapter1/unit1/item12.png'

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

class F1 extends React.Component<any> {
    render() {
        return (<Main>
            <Content >
                <img src={item1} style={{ position: 'absolute', left: '270px', top: '163px' }} onClick={this.props.next}/>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main>
            <Content >
                <img src={item2} style={{ position: 'absolute', left: '455px', top: '106px' }} />
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
            <Content style={{backgroundImage:`url(${BackgroundClose})`}}>
                <img src={Beck} style={{ position: 'absolute', left: '400px', top: '120px' }} />
            </Content>
        </Main>);
    }
}

export { F1, F2, F3, F4, F5, F6, F7, F8, F9 }