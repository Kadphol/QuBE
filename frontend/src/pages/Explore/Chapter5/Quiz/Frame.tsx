import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Bar } from 'react-chartjs-2'
import Question from '@components/Question'
import backgroundUnit from '@assets/explore/chapter5/backgroundUnit.png'
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import ChapterBox from '@components/ChapterBox'
import starFrame from '@assets/explore/chapter1/quiz/starFrame.png';
import nextButton from '@assets/explore/chapter1/quiz/nextButton.png';
import princess from '@assets/explore/chapter5/princess.png'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import king from '@assets/explore/chapter5/king.png'
import kingIcon from '@assets/explore/chapter5/kingIcon.png'
import dragon from '@assets/explore/Dragon.png';
import dragonIcon from '@assets/explore/dragonIcon.png';
import cage from '@assets/explore/chapter5/cage.png'

import item1 from '@assets/explore/chapter5/quiz/item1.png'
import item2 from '@assets/explore/chapter5/quiz/item2.png'
import item3 from '@assets/explore/chapter5/quiz/item3.png'
import item4 from '@assets/explore/chapter5/quiz/item4.png'
import item5 from '@assets/explore/chapter5/quiz/item5.png'
import item6 from '@assets/explore/chapter5/quiz/item6.png'
import item7 from '@assets/explore/chapter5/quiz/item7.png'
import item8 from '@assets/explore/chapter5/quiz/item8.png'
import item9 from '@assets/explore/chapter5/quiz/item9.png'
import h from '@assets/explore/chapter5/quiz/h.png'
import b0 from '@assets/explore/chapter5/quiz/bv0.png'
import b1 from '@assets/explore/chapter5/quiz/bv1.png'
import bu from '@assets/explore/chapter5/quiz/bunknown.png'
import q0 from '@assets/explore/chapter5/quiz/qv0.png'
import qp from '@assets/explore/chapter5/quiz/qv+.png'
import item15 from '@assets/explore/chapter5/quiz/item15.png'
import item20 from '@assets/explore/chapter5/quiz/item20.png'
import item21 from '@assets/explore/chapter5/quiz/item21.png'
import item22 from '@assets/explore/chapter5/quiz/item22.png'
import arrow from '@assets/explore/chapter5/quiz/arrow.png'


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
            from {transform: translateX(-500px)}
            50% {transform: translateX(0px)}
            `} 1.5s ease-out forwards;
            `
        return (<Main>
            <Content>
                <Fly>
                    <Slide>
                        <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(280px)}
            50% {transform: translateX(0px)}
            `} 1.5s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(500px)}
            50% {transform: translateX(0px)}
            `} 1.5s ease-out forwards;
            `
        return (<Main>
            <Content>
                <Slide2>
                    <img src={king} style={{ position: 'absolute', left: '700px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                </Slide2>
                <Fly>
                    <Slide>
                        <img src={dragon} style={{ position: 'absolute', left: '120px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}


class F2 extends React.Component {
    render() {

        return (
            <Main>
                <Content>
                    <img src={king} style={{ position: 'absolute', left: '700px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    <Fly>
                        <img src={dragon} style={{ position: 'absolute', left: '120px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Fly>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-480px)}
            50% {transform: translateX(0px)}
            `} 1.5s ease-out forwards;
            `
        let Slide2 = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-100px)}
            50% {transform: translateX(0px)}
            `} 1.5s ease-out forwards;
            `
        return (<Main>
            <Content>
                <Slide2>
                    <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                </Slide2>
                <Fly>
                    <Slide>
                        <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide>
                    <Slide>
                        <img src={dragon} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        let Flip = styled.div`
            transform-origin: 750px center;
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.5s ease-out forwards;
            `
        return (
            <Main>
                <Content>
                    <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                        <Flip>
                            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                        </Flip>
                    </Fly>
                </Content>
            </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                    <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                        <img src={dragon} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px' }} />
                    </Fly>
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
                        choices={['ใช้วัสดุและอุปกรณ์ที่ทันสมัยทำให้วงจรทำงานเร็วขึ้น',
                            'ใช้คุณสมบัติ Superposition ในการประมวลผลหลายสถานะในเวลาเดียวกัน',
                            'เป็นการทำงานพร้อมกันหลายเครื่องช่วยกันประมวลผล',
                            'คิวบิตสามารถเคลื่อนที่ได้เร็วกว่าบิตแบบดั้งเดิม']}
                        solution={1}
                    /></ChoicesDiv>
                </Content>
            </Main>);
    }
}

class F7 extends React.Component<any> {
    state = {
        attemp: 0,
        data: {
            labels: ['4', '8', '16', '32'],
            datasets: [
                {
                    backgroundColor: 'gray',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [4, 9, 16, 33],
                    label: 'Linear'

                },
                {
                    backgroundColor: 'red',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [1, 2, 4, 6],
                    label: `Grover`
                }
            ]
        }
    }
    linear = [4, 9, 16, 33]
    grover = [1, 2, 4, 6]
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    validate = () => {
        let { data, attemp } = this.state
        //console.log(data.datasets[0].data, data.datasets[1].data)
        let valid = JSON.stringify(data.datasets[0].data) === JSON.stringify([4, 8, 16, 32]) &&
            JSON.stringify(data.datasets[1].data) === JSON.stringify([2, 2, 4, 5])
        if (valid) {
            this.correct.play()
            if (attemp < 4) { this.props.increaseStar() }
            this.props.justClear()
        }
    }
    handleClick = (type, i, adj) => {
        let { data, attemp } = this.state
        let temp = type === 0 ? this.linear : this.grover
        this.click.play()
        if (adj === 1) {
            temp[i] += 1
            if (temp[i] > 35) temp[i] = 35
            data.datasets[type].data = [temp[0], temp[1], temp[2], temp[3]]
        }
        if (adj === -1) {
            temp[i] -= 1
            if (temp[i] < 0) temp[i] = 0
            data.datasets[type].data = [temp[0], temp[1], temp[2], temp[3]]
        }
        this.setState({ data: data, attemp: attemp + 1 })
        this.validate()
    }
    tuner = (data, left, top, type, i) => {
        return (<React.Fragment>
            <p style={{
                position: 'absolute', left: left + 55, top: top - 10,
                color: 'black', fontSize: '40px', fontFamily: 'Kanit'
            }}>{data}</p>
            <img src={arrow} onClick={() => this.handleClick(type, i, -1)}
                style={{ position: 'absolute', left: left, top: top, height: '40px', transform: 'rotate(90deg)', cursor: 'pointer' }} />
            <img src={arrow} onClick={() => this.handleClick(type, i, 1)}
                style={{ position: 'absolute', left: left + 100, top: top, height: '40px', transform: 'rotate(270deg)', cursor: 'pointer' }} />
            <div style={{ background: 'rgb(255,255,255,0.5)', position: 'absolute', left: '620px', top: '100px', }}></div>
        </React.Fragment>)
    }
    render() {
        let linear = this.state.data.datasets[0].data
        let grover = this.state.data.datasets[1].data
        return (
            <Main>
                <Content>

                    <img src={item7} style={{ position: 'absolute', left: 240, top: 70, height: '40px' }} />
                    <img src={item8} style={{ position: 'absolute', left: 405, top: 70, height: '40px' }} />

                    {this.tuner(linear[0], 260, 150, 0, 0)}
                    {this.tuner(linear[1], 260, 250, 0, 1)}
                    {this.tuner(linear[2], 260, 350, 0, 2)}
                    {this.tuner(linear[3], 260, 450, 0, 3)}
                    {this.tuner(grover[0], 430, 150, 1, 0)}
                    {this.tuner(grover[1], 430, 250, 1, 1)}
                    {this.tuner(grover[2], 430, 350, 1, 2)}
                    {this.tuner(grover[3], 430, 450, 1, 3)}

                    <img src={item1} style={{ position: 'absolute', left: 160, top: 120, height: '80px' }} />
                    <img src={item1} style={{ position: 'absolute', left: 160, top: 220, height: '80px' }} />
                    <img src={item1} style={{ position: 'absolute', left: 160, top: 320, height: '80px' }} />
                    <img src={item1} style={{ position: 'absolute', left: 160, top: 420, height: '80px' }} />
                    <p style={{
                        position: 'absolute', color: 'white', left: 190, top: 140,
                        fontSize: '35px', fontFamily: 'Kanit'
                    }}>4</p>
                    <p style={{
                        position: 'absolute', color: 'white', left: 190, top: 240,
                        fontSize: '35px', fontFamily: 'Kanit'
                    }}>8</p>
                    <p style={{
                        position: 'absolute', color: 'white', left: 185, top: 340,
                        fontSize: '35px', fontFamily: 'Kanit'
                    }}>16</p>
                    <p style={{
                        position: 'absolute', color: 'white', left: 180, top: 440,
                        fontSize: '35px', fontFamily: 'Kanit'
                    }}>32</p>

                    <div style={{ background: 'rgb(255,255,255,0.5)', position: 'absolute', left: '620px', top: '100px', }}>
                        <Bar
                            data={this.state.data}
                            width={500}
                            height={400}
                            options={{
                                responsive: false,
                                maintainAspectRatio: false,
                                title: {
                                    display: false
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        barPercentage: 1
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 35
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </Content>
            </Main>);
    }
}

class F8 extends React.Component<any> {
    state = {
        count: 0,
        count2: 0,
        open: false,
        perfect: true,
        highest: 'สุ่ม',
        answer: -1,
        finish: -1,
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
            datasets: [
                {
                    backgroundColor: 'red',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        }
    }
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    dataCollection = [  [0, 0, 0, 0, 0, 1, 0, 0], 
                        [0, 0, 1, 0, 0, 1, 0, 0], 
                        [0, 0, 1, 0, 0, 1, 1, 0], 
                        [0, 0, 2, 0, 0, 1, 1, 0], 
                        [0, 0, 3, 0, 0, 1, 1, 0]]
    open = () => {
        this.click.play()
        this.setState({ open: true, count: this.state.count + 1, finish: -1 })
        setTimeout(() => {
            this.setState({ open: false })
        }, 1000)
    }
    check = () => {
        let { count, count2, data } = this.state
        if (count === 3) {
            this.correct.play()
            if (count2 === 0) this.setState({ answer: 6, highest:'6' })
            else if (count2 === 1) this.setState({ answer: 3, highest:'สุ่ม' })
            else if (count2 === 2) this.setState({ answer: 7, highest:'สุ่ม' })
            else if (count2 === 3) this.setState({ answer: 3, highest:'3' })
            else if (count2 === 4) this.setState({ answer: 3, highest:'3' })
            data.datasets[0].data = this.dataCollection[count2]
            this.setState({ finish: count2, count2: count2 + 1, data: data })
        }
        else {
            this.wrong.play()
            this.setState({ perfect: false })
        }
        this.setState({ count: 0 })
    }
    answerCheck = (answer) => {
        if(answer!=='3'){
            this.wrong.play()
            this.setState({ perfect: false })
        }
        else {
            this.correct.play()
            if(this.state.perfect) this.props.increaseStar()
            this.props.justClear()
        }
    }
    render() {
        return (
            <Main>
                <Content>
                    <img src={this.state.open ? item4 : item3}
                        style={{ position: 'absolute', left: '600px', top: '300px', height: '150px' }} />
                    <img src={(this.state.open || this.state.finish === 2) ? item4 : item3}
                        style={{ position: 'absolute', left: '450px', top: '300px', height: '150px' }} />
                    <img src={(this.state.open || this.state.finish === 0) ? item4 : item3}
                        style={{ position: 'absolute', left: '300px', top: '300px', height: '150px' }} />
                    <img src={this.state.open ? item4 : item3}
                        style={{ position: 'absolute', left: '150px', top: '300px', height: '150px' }} />
                    <img src={this.state.open ? item4 : item3}
                        style={{ position: 'absolute', left: '600px', top: '120px', height: '150px' }} />
                    <img src={(this.state.open || this.state.finish === 1 || this.state.finish === 3 || this.state.finish === 4) ? item4 : item3}
                        style={{ position: 'absolute', left: '450px', top: '120px', height: '150px' }} />
                    <img src={this.state.open ? item4 : item3}
                        style={{ position: 'absolute', left: '300px', top: '120px', height: '150px' }} />
                    <img src={this.state.open ? item4 : item3}
                        style={{ position: 'absolute', left: '150px', top: '120px', height: '150px' }} />
                    <Fly>
                        <img src={dragon} style={{
                            position: 'absolute', top: '140px', height: '120px',
                            left: this.state.open ? '150px' : '-1000px',
                            opacity: '50%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '140px', height: '120px',
                            left: this.state.open ? '300px' : '-1000px',
                            opacity: '60%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '140px', height: '120px',
                            left: (this.state.open || this.state.finish === 1 || this.state.finish === 3 || this.state.finish === 4) ? '450px' : '-1000px',
                            opacity: '70%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '140px', height: '120px',
                            left: this.state.open ? '600px' : '-1000px',
                            opacity: '50%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '320px', height: '120px',
                            left: this.state.open ? '150px' : '-1000px',
                            opacity: '60%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '320px', height: '120px',
                            left: (this.state.open || this.state.finish === 0) ? '300px' : '-1000px',
                            opacity: '70%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '320px', height: '120px',
                            left: (this.state.open || this.state.finish === 2) ? '450px' : '-1000px',
                            opacity: '60%'
                        }} />
                        <img src={dragon} style={{
                            position: 'absolute', top: '320px', height: '120px',
                            left: this.state.open ? '600px' : '-1000px',
                            opacity: '40%'
                        }} />
                    </Fly>
                    <div onClick={() => this.open()}
                        style={{
                            backgroundColor: '#A54141', borderRadius: '5%', color: 'white', fontFamily: 'Kanit', lineHeight: '50px',
                            position: 'absolute', left: '240px', top: '500px', height: '50px', width: '160px', cursor: 'pointer'
                        }}>
                        ตรวจสอบประตู: {this.state.count}</div>
                    <div onClick={() => this.check()}
                        style={{
                            backgroundColor: '#A54141', borderRadius: '5%', color: 'white', fontFamily: 'Kanit', lineHeight: '50px',
                            position: 'absolute', left: '450px', top: '500px', height: '50px', width: '160px', cursor: 'pointer'
                        }}>หาคำตอบ</div>
                    {
                        this.state.count2 >= 5 &&
                        <div style={{position: 'absolute', left: '220px', top: '480px', height: '90px', width: '200px'}}/>
                    }
                    <div onClick={() => this.answerCheck(this.state.highest)}
                        style={{
                            backgroundColor: '#A54141', borderRadius: '5%', color: 'white', fontFamily: 'Kanit', lineHeight: '50px',
                            position: 'absolute', left: '900px', top: '500px', height: '50px', width: '160px', cursor: 'pointer'
                        }}>สรุปคำตอบ: {this.state.highest}</div>

                    <div style={{ background: 'rgb(255,255,255,0.5)', position: 'absolute', left: '800px', top: '200px', }}>
                        <Bar
                            data={this.state.data}
                            width={400}
                            height={250}
                            options={{
                                responsive: false,
                                maintainAspectRatio: false,
                                title: {
                                    display: false
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        barPercentage: 0.5
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 5
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </Content>
            </Main>);
    }
}

class F9 extends React.Component<any> {
    render() {
        let Lay = styled.div`
            transform-origin: center 400px;
            animation: ${keyframes`
            from {transform: translateX(0px) rotate(0deg)}
            20% {transform: translateX(-10px) rotate(0deg)}
            25% {transform: translateX(10px) rotate(0deg)}
            30% {transform: translateX(-10px) rotate(0deg)}
            35% {transform: translateX(0px) rotate(0deg)}
            60% {transform: translateX(0px) rotate(0deg)}
            to {transform: translateX(0px) rotate(90deg)}
            `} 1.5s ease-out forwards;
            `
        let Fade = styled.div`
        animation: ${keyframes`
        from {opacity:100%}
        70% {opacity:100%}
        to {opacity:0%}
        `} 3s ease-out forwards;
        `
        return (
            <Main>
                <Content>
                    <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Fly>
                    <Fade>
                        <Lay>
                            <img src={dragon} style={{ position: 'absolute', left: '500px', top: '120px', height: '400px' }} />
                        </Lay>
                    </Fade>
                </Content>
            </Main>);
    }
}

class F10 extends React.Component<any> {
    render() {
        return (
            <Main>
                <Content>
                    <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                    <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Fly>
                </Content>
            </Main>);
    }
}

class F11 extends React.Component<any> {
    render() {
        let Slide1 = styled.div`
        animation: ${keyframes`
        from {transform: translateX(0px)}
        50% {transform: translateX(300px)}
        to {transform: translateX(100px)}
        `} 1.5s 0.5s ease-out forwards;
        `
        let Slide2 = styled.div`
        animation: ${keyframes`
        from {transform: translateX(0px)}
        to {transform: translateX(-200px)}
        `} 1s 2.5s ease-out forwards;
        `
        let Fade = styled.div`
        animation: ${keyframes`
        from {opacity:100%}
        67% {opacity:100%}
        to {opacity:0%}
        `} 3s ease-out forwards;
        `
        return (
            <Main>
                <Content>
                    <Content>
                        <Slide2>
                            <img src={king} style={{ position: 'absolute', left: '800px', top: '120px', height: '400px' }} />
                        </Slide2>
                        <Fade>
                            <img src={cage} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                        </Fade>
                        <Slide1>
                            <Fly>
                                <img src={princess} style={{ position: 'absolute', left: '100px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                            </Fly>
                        </Slide1>
                    </Content>
                </Content>
            </Main>);
    }
}

class F12 extends React.Component<any> {
    render() {
        return (
            <Main>
                <Content>
                    <Fly>
                        <img src={king} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                        <img src={princess} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                    </Fly>
                </Content>
            </Main>);
    }
}

class F13 extends React.Component<any> {
    render() {
        let Flip = styled.div`
            transform-origin: 400px center;
            animation: ${keyframes`
            from {transform: scaleX(1)}
            to {transform: scaleX(-1)}
            `} 0.5s ease-out forwards;
            `
        return (
            <Main>
                <Content>
                    <Fly>
                        <img src={king} style={{ position: 'absolute', left: '600px', top: '120px', height: '400px' }} />
                        <Flip>
                            <img src={princess} style={{ position: 'absolute', left: '200px', top: '120px', height: '400px', transform: 'scaleX(-1)' }} />
                        </Flip>
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
                    <ChapterBox next={this.props.next} button={false} chapter="5" title="อัลกอริทึม" textColor="#B11B1B" boxColor="lightgrey" buttonColor="#B11B1B" text="เริ่มต้น" />
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
                    <ChapterBox next={this.props.next} button chapter="5" title="อัลกอริทึม" textColor="#B11B1B" boxColor="lightgrey" buttonColor="#B11B1B" text="เสร็จสิ้น" />
                }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F99, F100 }
