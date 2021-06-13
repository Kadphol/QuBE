import React from 'react';
import styled, { keyframes } from 'styled-components';
import Bew from '@assets/explore/chapter2/Bew.png'
import backgroundClose from '@assets/explore/chapter2/BackgroundClose.png'
import q1 from '@assets/explore/chapter2/unit1/q1.png'
import q2 from '@assets/explore/chapter2/unit1/q2.png'
import q3 from '@assets/explore/chapter2/unit1/q3.png'
import qv0 from '@assets/explore/chapter2/unit1/qv0.png'
import qv1 from '@assets/explore/chapter2/unit1/qv1.png'
import bv0 from '@assets/explore/chapter2/unit1/bv0.png'
import bv1 from '@assets/explore/chapter2/unit1/bv1.png'
import dot from '@assets/explore/chapter2/unit1/dot.png'
import item1 from '@assets/explore/chapter2/unit1/item1.png'
import linear1 from '@assets/explore/chapter2/unit1/linear1.png'
import linear0 from '@assets/explore/chapter2/unit1/linear0.png'
import sphere1 from '@assets/explore/chapter2/unit1/sphere1.png'
import Question from '@components/Question'

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

const ChoicesDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

const slideFromLeft = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(200px)}
`
const fade = keyframes`
0% {opacity: 0%}
60% {opacity: 0%}
100% {opacity: 100%}
`

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
                <Fly>
                <img src={Bew} style={{ position: 'absolute', left: '400px', top: '100px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        let SlideIn = styled.div`
        -webkit-animation: ${slideFromLeft} 1s 1s ease-out normal forwards ;
            `
            let FadeIn = styled.div`
        -webkit-animation: ${fade} 2s ease-out normal;
            `
        return (<Main>
            <Content>
                <SlideIn>
                    <span style={{ position: 'absolute', top: '100px', left: '420px', fontSize: '250px', fontFamily: 'Kanit', fontWeight: 'bold', }}>Bit</span>
                </SlideIn>
                <FadeIn>
                    <span style={{ position: 'absolute', top: '100px', left: '300px', fontSize: '250px', fontFamily: 'Kanit', fontWeight: 'bold', color:'#84017F' }}>Qu</span>
                </FadeIn>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main>
            <Content>
                <img src={item1} style={{ position: 'absolute', left: '170px', top: '170px' }} />
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {

    state = { state: false }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ state: !this.state.state })
        }, 750)
    }

    render() {
        
        return (<Main>
            <Content>
                {   this.state.state &&
                <React.Fragment>
                    <img src={linear0} style={{position:'absolute',top:'100px',left:'400px'}}></img>
                    <img src={bv0} style={{position:'absolute',top:'340px',left:'670px', background: 'lightgreen'}}></img>
                    <img src={bv1} style={{position:'absolute',top:'120px',left:'670px'}}></img>
                </React.Fragment>
                }
                {   !this.state.state &&
                <React.Fragment>
                    <img src={linear1} style={{position:'absolute',top:'100px',left:'400px'}}></img>
                    <img src={bv0} style={{position:'absolute',top:'340px',left:'670px'}}></img>
                    <img src={bv1} style={{position:'absolute',top:'120px',left:'670px', background: 'lightgreen'}}></img>
                </React.Fragment>
                }
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    state = { state: 0 }

    componentDidMount = () => {
        setInterval(() => {
            if(this.state.state===2) this.setState({state:0})
            else this.setState({ state: this.state.state+1 })
        }, 750)
    }

    render() {
        
        return (<Main>
            <Content>
                <img src={sphere1} style={{position:'absolute',top:'100px',left:'450px',}}></img>
                {   this.state.state === 0 &&
                <React.Fragment>
                    <img src={dot} style={{position:'absolute',top:'200px',left:'720px'}}></img>
                    <img src={q1} style={{position:'absolute',top:'90px',left:'790px',borderRadius:'50%', background: 'lightgreen'}}></img>
                    <img src={q2} style={{position:'absolute',top:'320px',left:'320px',borderRadius:'50%',}}></img>
                    <img src={q3} style={{position:'absolute',top:'380px',left:'830px',borderRadius:'50%',}}></img>
                </React.Fragment>
                }
                {   this.state.state === 1 &&
                <React.Fragment>
                    <img src={dot} style={{position:'absolute',top:'350px',left:'520px'}}></img>
                    <img src={q1} style={{position:'absolute',top:'90px',left:'790px',borderRadius:'50%',}}></img>
                    <img src={q2} style={{position:'absolute',top:'320px',left:'320px',borderRadius:'50%', background: 'lightgreen'}}></img>
                    <img src={q3} style={{position:'absolute',top:'380px',left:'830px',borderRadius:'50%',}}></img>

                </React.Fragment>
                }
                {   this.state.state === 2 &&
                <React.Fragment>
                    <img src={dot} style={{position:'absolute',top:'400px',left:'760px'}}></img>
                    <img src={q1} style={{position:'absolute',top:'90px',left:'790px',borderRadius:'50%',}}></img>
                    <img src={q2} style={{position:'absolute',top:'320px',left:'320px',borderRadius:'50%',}}></img>
                    <img src={q3} style={{position:'absolute',top:'380px',left:'830px',borderRadius:'50%', background: 'lightgreen'}}></img>
                </React.Fragment>
                }
            </Content>
        </Main>);
    }
}

class F5 extends React.Component<any> {

    answerValidate = (valid) => { if (valid) this.props.next() }

    render() {
        return (<Main>
            <Content>
                <ChoicesDiv>
                    <Question
                        answerValidate={this.answerValidate}
                        choices={["2", "3", "360", "ไม่จำกัด"]}
                        solution={3} />
                </ChoicesDiv>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component<any> {

    answerValidate = (valid) => { if (valid) this.props.next() }

    render() {
        return (<Main>
            <Content>
                <ChoicesDiv>
                    <Question
                        answerValidate={this.answerValidate}
                        choices={["2", "3", "360", "ไม่จำกัด"]}
                        solution={3}
                        showSolution />
                </ChoicesDiv>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    state = { state: false }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ state: !this.state.state })
        }, 750)
    }

    render() {
        
        return (<Main>
            <Content>
                <img src={sphere1} style={{position:'absolute',top:'100px',left:'450px',}}></img>
                {   !this.state.state &&
                <React.Fragment>
                    <img src={dot} style={{position:'absolute',top:'130px',left:'626px'}}></img>
                    <img src={qv0} style={{position:'absolute',top:'50px',left:'790px',borderRadius:'50%', background: 'lightgreen'}}></img>
                    <img src={qv1} style={{position:'absolute',top:'430px',left:'790px',borderRadius:'50%',}}></img>
                </React.Fragment>
                }
                {   this.state.state &&
                <React.Fragment>
                    <img src={dot} style={{position:'absolute',top:'475px',left:'626px'}}></img>
                    <img src={qv0} style={{position:'absolute',top:'50px',left:'790px',borderRadius:'50%',}}></img>
                    <img src={qv1} style={{position:'absolute',top:'430px',left:'790px',borderRadius:'50%', background: 'lightgreen'}}></img>

                </React.Fragment>
                }
            </Content>
        </Main>);
    }
}

class F8 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
            <Fly>
                <img src={Bew} style={{ position: 'absolute', left: '400px', top: '100px' }} />
            </Fly>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8 }