import React from 'react';
import styled, { keyframes } from 'styled-components';
import Question from '@components/Question'
import backgroundUnit from '@assets/explore/chapter4/backgroundUnit.png'
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import ChapterBox from '@components/ChapterBox'
import qubie from '@assets/explore/Qubie.png';
import qubieIcon from '@assets/explore/qubieIcon.png';
import dragon from '@assets/explore/Dragon.png';
import dragonIcon from '@assets/explore/dragonIcon.png';
import starFrame from '@assets/explore/chapter1/quiz/starFrame.png';
import nextButton from '@assets/explore/chapter1/quiz/nextButton.png';

import item4 from '@assets/explore/chapter4/quiz/item4.png';
import item5 from '@assets/explore/chapter4/quiz/item5.png';
import item6 from '@assets/explore/chapter4/quiz/item6.png';
import qv0 from '@assets/explore/chapter4/quiz/qv0.png';
import qv1 from '@assets/explore/chapter4/quiz/qv1.png';
import qunknown from '@assets/explore/chapter4/quiz/qunknown.png';
import bv0 from '@assets/explore/chapter4/quiz/bv0.png';
import bv1 from '@assets/explore/chapter4/quiz/bv1.png';
import bunknown from '@assets/explore/chapter4/quiz/bunknown.png';
import item14 from '@assets/explore/chapter4/quiz/item14.png';
import item15 from '@assets/explore/chapter4/quiz/item15.png';
import item16 from '@assets/explore/chapter4/quiz/item16.png';
import x from '@assets/explore/chapter4/quiz/x.png';
import y from '@assets/explore/chapter4/quiz/y.png';
import z from '@assets/explore/chapter4/quiz/z.png';
import cx from '@assets/explore/chapter4/quiz/cx_Inuse.png';
import ccx from '@assets/explore/chapter4/quiz/ccx_Inuse.png';

const sfxStar = require('@assets/sound/sfx_star.mp3').default;
const sfxPing = require('@assets/sound/sfx_ping.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxClear = require('@assets/sound/sfx_clear.mp3').default;

const Main = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: absolute;
`

const Content = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: relative;
`
const BoxDiv = styled.div`
position: absolute;
width: 700px;
height: 400px;
left: 270px;
top: 163px;
img {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 173px;
}
`
const ChoicesDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`

const fade1 = keyframes`
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
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-700px)}
            to {transform: translateX(0px)}
            `} 1.25s ease-out forwards;
            `
        return (<Main>
            <Content style={{ background: `url(${backgroundUnit})` }}>
                <Fly>
                    <Slide>
                        <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height:'400px' }} alt="Qubie" />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (
            <Main>
                <Content style={{ background: `url(${backgroundUnit})`, overflowY: 'hidden' }}>
                    <Fly>
                        <img src={dragon} style={{ position: 'absolute', left: '400px', top: '420px', height:'400px' }} alt="Dragon" />
                    </Fly>
                </Content>
            </Main>);
    }
}


class F2 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateY(300px)}
            to {transform: translateY(0px)}
            `} 0.75s ease-out forwards;
            `
        return (
            <Main>
                <Content style={{ background: `url(${backgroundUnit})` }}>
                    <Fly>
                        <Slide>
                            <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px', height:'400px' }} alt="Dragon" />
                        </Slide>
                    </Fly>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Slide1 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-700px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-200px)}
            to {transform: translateX(0px)}
            `} 0.75s ease-out forwards;
            `
        return (
            <Main>
                <Content style={{ background: `url(${backgroundUnit})` }}>
                    <Fly>
                        <Slide1>
                            <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height:'400px' }} alt="Qubie" />
                        </Slide1>
                        <Slide2>
                            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px', height:'400px' }} alt="Dragon" />
                        </Slide2>
                    </Fly>
                </Content>
            </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (
            <Main>
                <Content style={{ background: `url(${backgroundUnit})` }}>
                    <Fly>
                        <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height:'400px' }} alt="Qubie" />
                        <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px', height:'400px' }} alt="Dragon" />
                    </Fly>
                </Content>
            </Main>);
    }
}

class F5 extends React.Component<any> {
    state = {
        state1: bunknown,
        state2: bunknown,
        state3: bunknown,
        attemp: 0
    }
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    handleClick = (pick, value) => {
        this.click.play()
        let { state1, state2, state3, attemp } = this.state
        let nextattemp = attemp + 1
        if (pick === 1) {
            state1 = value
            this.setState({ state1: value, attemp: nextattemp })
        }
        else if (pick === 2) {
            state2 = value
            this.setState({ state2: value, attemp: nextattemp })
        }
        else if (pick === 3) {
            state3 = value
            this.setState({ state3: value, attemp: nextattemp })
        }
        if ((pick === 1 && value === bv1) || (pick === 2 && value === bv1) || (pick === 3 && value === bv0)) this.correct.play()
        else this.wrong.play()
        let valid = state1 === bv1 && state2 === bv1 && state3 === bv0
        this.validate(valid, nextattemp)
    }
    validate = (valid, attemp) => {
        if (valid) {
            this.props.justClear()
            if (attemp <= 3) this.props.increaseStar()
        }
    }
    render() {
        return (
            <Main>
                <Content>
                    <img src={item14} style={{ position: 'absolute', left: '1020px', top: '270px', height: '250px' }} />
                    <img src={item15} style={{ position: 'absolute', left: '820px', top: '270px', height: '250px' }} />
                    <img src={item16} style={{ position: 'absolute', left: '920px', top: '70px', height: '190px' }} />

                    <div style={{
                        position: 'absolute', left: '150px', top: '175px',
                        height: '5px', width: '300px', backgroundColor: 'grey'
                    }} />

                    <div style={{
                        position: 'absolute', left: '450px', top: '180px',
                        height: '5px', width: '100px', backgroundColor: 'grey'
                    }} />

                    <div style={{
                        position: 'absolute', left: '650px', top: '205px',
                        height: '5px', width: '100px', backgroundColor: 'grey'
                    }} />

                    <div style={{
                        position: 'absolute', left: '150px', top: '390px',
                        height: '5px', width: '120px', backgroundColor: 'grey'
                    }} />
                    <div style={{
                        position: 'absolute', left: '150px', top: '340px',
                        height: '5px', width: '120px', backgroundColor: 'grey'
                    }} />
                    <div style={{
                        position: 'absolute', left: '370px', top: '365px',
                        height: '5px', width: '145px', backgroundColor: 'grey'
                    }} />

                    <div style={{
                        position: 'absolute', left: '510px', top: '230px',
                        height: '140px', width: '5px', backgroundColor: 'grey'
                    }} />
                    <div style={{
                        position: 'absolute', left: '510px', top: '230px',
                        height: '5px', width: '120px', backgroundColor: 'grey'
                    }} />

                    <img src={item4} style={{ position: 'absolute', left: '250px', top: '290px', height: '150px' }} />
                    <img src={item5} style={{ position: 'absolute', left: '540px', top: '130px', height: '150px' }} />
                    <img src={item6} style={{ position: 'absolute', left: '250px', top: '100px', height: '150px' }} />
                    {/* <img src={item4} style={{ position: 'absolute', left: '400px', top: '300px', height: '200px' }} />
                <img src={item5} style={{ position: 'absolute', left: '400px', top: '300px', height: '200px' }} /> */}
                    <img src={bv0} style={{ position: 'absolute', left: '120px', top: '135px', height: '80px' }} />
                    <img src={bv1} style={{ position: 'absolute', left: '120px', top: '270px', height: '80px' }} />
                    <img src={bv0} style={{ position: 'absolute', left: '120px', top: '370px', height: '80px' }} />

                    <img src={this.state.state1} style={{ position: 'absolute', left: '420px', top: '125px', height: '80px' }} />
                    <img src={bv0} onClick={() => { this.handleClick(1, bv0) }} style={{ position: 'absolute', left: '415px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={bv1} onClick={() => { this.handleClick(1, bv1) }} style={{ position: 'absolute', left: '455px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state2} style={{ position: 'absolute', left: '730px', top: '160px', height: '80px' }} />
                    <img src={bv0} onClick={() => { this.handleClick(2, bv0) }} style={{ position: 'absolute', left: '725px', top: '245px', height: '50px', cursor: 'pointer' }} />
                    <img src={bv1} onClick={() => { this.handleClick(2, bv1) }} style={{ position: 'absolute', left: '765px', top: '245px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state3} style={{ position: 'absolute', left: '420px', top: '315px', height: '80px' }} />
                    <img src={bv0} onClick={() => { this.handleClick(3, bv0) }} style={{ position: 'absolute', left: '415px', top: '400px', height: '50px', cursor: 'pointer' }} />
                    <img src={bv1} onClick={() => { this.handleClick(3, bv1) }} style={{ position: 'absolute', left: '455px', top: '400px', height: '50px', cursor: 'pointer' }} />
                    {/* <img src={arrow} style={{ position: 'absolute', left: '677px', top: '280px', height: '50px', transform:'rotate(180deg)'}} />
                <img src={arrow} style={{ position: 'absolute', left: '677px', top: '430px', height: '50px' }} />
                 */}
                </Content>
            </Main>);
    }
}

class F6 extends React.Component<any> {
    state = { perfect: true }

    validate = (valid) => {
        if (valid) {
            this.props.justClear(this.props.index)
            if (this.state.perfect) this.props.increaseStar()
        }
        else this.setState({ perfect: false })
    }
    render() {
        return (
            <Main>
                <Content>
                    <ChoicesDiv><Question
                        answerValidate={this.validate}
                        choices={['|1> ผ่าน Hardamard gate', '|0> ผ่าน Pauli-X gate', '|+> ผ่าน Pauli-Y gate', '|-> ผ่าน Pauli-Z gate']}
                        solution={3}
                    /></ChoicesDiv>
                    <button onClick={() => this.props.justClear(this.props.index)}></button>
                </Content>
            </Main>);
    }
}

class F7 extends React.Component<any> {
    state = {
        state1: qunknown,
        state2: qunknown,
        state3: qunknown,
        state4: qunknown,
        state5: qunknown,
        state6: qunknown,
        attemp: 0
    }
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    handleClick = (pick, value) => {
        this.click.play()
        let { state1, state2, state3, state4, state5, state6, attemp } = this.state
        let nextattemp = attemp + 1
        if (pick === 1) {
            state1 = value
            this.setState({ state1: value, attemp: nextattemp })
        }
        else if (pick === 2) {
            state2 = value
            this.setState({ state2: value, attemp: nextattemp })
        }
        else if (pick === 3) {
            state3 = value
            this.setState({ state3: value, attemp: nextattemp })
        }
        else if (pick === 4) {
            state4 = value
            this.setState({ state4: value, attemp: nextattemp })
        }
        else if (pick === 5) {
            state5 = value
            this.setState({ state5: value, attemp: nextattemp })
        }
        else if (pick === 6) {
            state6 = value
            this.setState({ state6: value, attemp: nextattemp })
        }
        if ((pick === 1 && value === qv1) || (pick === 2 && value === qv1) || (pick === 3 && value === qv0)
            ||(pick === 4 && value === qv1) || (pick === 5 && value === qv1) || (pick === 6 && value === qv1) ) 
        {this.correct.play()}
        else this.wrong.play()
        let valid = state1 === qv1 && state2 === qv1 && state3 === qv0 
                    && state4 === qv1 && state5 === qv1 && state6 === qv1
        this.validate(valid, nextattemp)
    }
    validate = (valid, attemp) => {
        if (valid) {
            this.props.justClear()
            if (attemp <= 6) this.props.increaseStar()
        }
    }
    render() {
        return (
            <Main>
                <Content>   
                    <div style={{
                        position: 'absolute', left: '300px', top: '175px',
                        height: '5px', width: '620px', backgroundColor: 'grey'
                    }} />

                    <div style={{
                        position: 'absolute', left: '300px', top: '295px',
                        height: '5px', width: '620px', backgroundColor: 'grey'
                    }} />
                    <div style={{
                        position: 'absolute', left: '300px', top: '415px',
                        height: '5px', width: '620px', backgroundColor: 'grey'
                    }} />
                    <div style={{
                        position: 'absolute', left: '789px', top: '175px',
                        height: '240px', width: '2px', backgroundColor: '#f5ca2e'
                    }} />
                    <div style={{
                        position: 'absolute', left: '782px', top: '290px',
                        height: '15px', width: '15px', borderRadius:'50%',backgroundColor: '#f5ca2e'
                    }} />
                    <div style={{
                        position: 'absolute', left: '782px', top: '170px',
                        height: '15px', width: '15px', borderRadius:'50%',backgroundColor: '#f5ca2e'
                    }} />
                    <img src={x} style={{ position: 'absolute', left: '450px', top: '135px', height: '80px' }} />
                    <img src={y} style={{ position: 'absolute', left: '450px', top: '255px', height: '80px' }} />
                    <img src={z} style={{ position: 'absolute', left: '450px', top: '375px', height: '80px' }} />
                    <img src={ccx} style={{ position: 'absolute', left: '750px', top: '375px', height: '80px' }} />

                    <img src={qv0} style={{ position: 'absolute', left: '270px', top: '140px', height: '80px' }} />
                    <img src={qv0} style={{ position: 'absolute', left: '270px', top: '260px', height: '80px' }} />
                    <img src={qv0} style={{ position: 'absolute', left: '270px', top: '380px', height: '80px' }} />

                    <img src={this.state.state1} style={{ position: 'absolute', left: '600px', top: '140px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(1, qv0) }} style={{ position: 'absolute', left: '595px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(1, qv1) }} style={{ position: 'absolute', left: '640px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state2} style={{ position: 'absolute', left: '600px', top: '260px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(2, qv0) }} style={{ position: 'absolute', left: '595px', top: '330px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(2, qv1) }} style={{ position: 'absolute', left: '640px', top: '330px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state3} style={{ position: 'absolute', left: '600px', top: '380px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(3, qv0) }} style={{ position: 'absolute', left: '595px', top: '450px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(3, qv1) }} style={{ position: 'absolute', left: '640px', top: '450px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state4} style={{ position: 'absolute', left: '900px', top: '140px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(4, qv0) }} style={{ position: 'absolute', left: '895px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(4, qv1) }} style={{ position: 'absolute', left: '940px', top: '210px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state5} style={{ position: 'absolute', left: '900px', top: '260px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(5, qv0) }} style={{ position: 'absolute', left: '895px', top: '330px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(5, qv1) }} style={{ position: 'absolute', left: '940px', top: '330px', height: '50px', cursor: 'pointer' }} />
                    <img src={this.state.state6} style={{ position: 'absolute', left: '900px', top: '380px', height: '80px' }} />
                    <img src={qv0} onClick={() => { this.handleClick(6, qv0) }} style={{ position: 'absolute', left: '895px', top: '450px', height: '50px', cursor: 'pointer' }} />
                    <img src={qv1} onClick={() => { this.handleClick(6, qv1) }} style={{ position: 'absolute', left: '940px', top: '450px', height: '50px', cursor: 'pointer' }} />
                </Content>
            </Main>);
    }
}

class F8 extends React.Component {
    render() {
        return (<Main style={{ background: `url(${backgroundUnit})` }}>
            <Content>
                <Fly>
                    <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px', height:'400px' }} alt="Qubie" />
                    <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px', height:'400px' }} alt="Dragon" />
                </Fly>
            </Content>
        </Main>);
    }
}

class F9 extends React.Component {
    render() {
        let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.75s 0.5s ease-out forwards;
            `
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 1.5s ease-out forwards;
            `
        return (<Main style={{ background: `url(${backgroundUnit})` }}>
            <Content>
                <Fly>
                    <Slide>
                        <Flip>
                            <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px', height:'400px' }} alt="Dragon" />
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F10 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 1.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{ background: `url(${backgroundUnit})` }}>
                <Fly>
                    <Slide>
                        <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px', height:'400px' }} alt="Qubie" />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F99 extends React.Component<any> {

    state = { count: 0 }

    sfxStar = new Audio(sfxStar)
    sfxWrong = new Audio(sfxWrong)

    render() {

        let FadeIn1 = styled.div`
        animation: ${fade1} 0.25s forwards ;
        `

        return (<Main>
            <Content >
                <BoxDiv style={{ backgroundImage: `url(${starFrame})` }}>
                    {
                        this.props.prevStar >= 1 &&
                        <img src={star} style={{ left: '189px' }} />
                    }
                    {
                        this.props.prevStar >= 2 &&
                        <img src={star} style={{ left: '312px' }} />
                    }
                    {
                        this.props.prevStar >= 3 &&
                        <img src={star} style={{ left: '435px' }} />
                    }
                    {
                        this.props.star == 1 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '189px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star == 2 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '312px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star == 3 && this.props.star > this.props.prevStar &&
                        <FadeIn1>
                            <img src={star} style={{ left: '435px' }} />
                            <audio src={sfxPing} autoPlay />
                        </FadeIn1>
                    }
                    {
                        this.props.star === this.props.prevStar &&
                        <audio src={sfxWrong} autoPlay />
                    }
                    <img onClick={this.props.next}
                        style={{ position: 'absolute', top: '284px', left: '280px', width: '130px', height: '40px', cursor: 'pointer' }}
                        src={nextButton} />
                </BoxDiv>
            </Content>
        </Main>);
    }
}

class F100 extends React.Component<any> {

    click = new Audio(sfxClick)
    clear = new Audio(sfxClear)

    state = { item: 0 }

    componentDidMount = () => {
        this.clear.volume = 0.4
        this.clear.play()
        setInterval(() => {
            this.setState({ item: this.state.item + 1 })
        }, 1000)
    }

    render() {

        let { item } = this.state

        return (<Main>
            <Content >
                {item < 4 &&
                    <ChapterBox next={this.props.next} button={false} chapter="4" title="เกต" textColor="#005D8B" boxColor="skyblue" buttonColor="#005D8B" text="เริ่มต้น" />
                }
                <img src={noStar} style={{ position: 'absolute', top: '400px', left: '459px' }} />
                <img src={noStar} style={{ position: 'absolute', top: '400px', left: '582px' }} />
                <img src={noStar} style={{ position: 'absolute', top: '400px', left: '705px' }} />
                {item >= 1 && item < 4 &&
                    <img src={this.props.star >= 1 ? star : noStar} style={{ position: 'absolute', top: '400px', left: '459px' }} />
                }
                {item >= 2 && item < 4 &&
                    <img src={this.props.star >= 2 ? star : noStar} style={{ position: 'absolute', top: '400px', left: '582px' }} />
                }
                {item >= 3 && item < 4 &&
                    <img src={this.props.star >= 3 ? star : noStar} style={{ position: 'absolute', top: '400px', left: '705px' }} />
                }
                {item >= 4 &&
                    <ChapterBox next={this.props.next} button chapter="4" title="เกต" textColor="#005D8B" boxColor="skyblue" buttonColor="#005D8B" text="เสร็จสิ้น" />
                }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F99, F100 }
