import React from 'react';
import styled, { keyframes } from 'styled-components';
import Question from '@components/Question'
import {Bar} from 'react-chartjs-2'
import backgroundUnit from '@assets/explore/chapter3/backgroundUnit.png'
import star from '@assets/explore/chapter1/quiz/star.png';
import noStar from '@assets/explore/chapter1/quiz/noStar.png';
import ChapterBox from '@components/ChapterBox'
import qubie from '@assets/explore/Qubie.png';
import qubieIcon from '@assets/explore/qubieIcon.png';
import dragon from '@assets/explore/Dragon.png';
import dragonIcon from '@assets/explore/dragonIcon.png';
import starFrame from '@assets/explore/chapter1/quiz/starFrame.png';
import nextButton from '@assets/explore/chapter1/quiz/nextButton.png';
import arrow from '@assets/explore/chapter3/quiz/arrow.png';
import item0 from '@assets/explore/chapter3/quiz/item0.png';
import item1 from '@assets/explore/chapter3/quiz/item1.png';
import item2 from '@assets/explore/chapter3/quiz/item2.png';
import item3 from '@assets/explore/chapter3/quiz/item3.png';
import item4 from '@assets/explore/chapter3/quiz/item4.png';
import item5 from '@assets/explore/chapter3/quiz/item5.png';
import item6 from '@assets/explore/chapter3/quiz/item6.png';
import item7 from '@assets/explore/chapter3/quiz/item7.png';
import item10 from '@assets/explore/chapter3/quiz/item10.png';
import item11 from '@assets/explore/chapter3/quiz/item11.png';

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

const ChoicesDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
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
            let Flip = styled.div`
            animation: ${keyframes`
            from {transform: scaleX(1)}
            50% {transform: scaleX(-1)}
            100% {transform: scaleX(1)}
            `} 0.75s 1.75s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px',transform:'scaleX(-1)' }} alt="Qubie"/>
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
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
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
            <Slide1>
            <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} alt="Qubie"/>
            </Slide1>
            <Slide2>
            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px', transform:'scaleX(-1)' }} alt="Dragon"/>
            </Slide2>
                </Fly>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
        <Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
            <img src={qubie} style={{ position: 'absolute', left: '200px', top: '120px' }} alt="Qubie"/>
            <img src={dragon} style={{ position: 'absolute', left: '600px', top: '120px' }} alt="Dragon"/>
                </Fly>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component<any> {
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
                    choices={['การใช้ตัวเลขทำให้เข้าใจได้ง่าย', 'ไม่สามารถสร้างมาตรวัดอื่น ๆ ได้', 'นำไปใช้ได้โดยคล้ายบิตแบบดั้งเดิม', 'ไม่มีเหตุผลเป็นพิเศษ']}
                    solution={2}
                /></ChoicesDiv>
                <button onClick={()=>this.props.justClear(this.props.index)}></button>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component<any> {
    state = {
        attemp: 0,
        shot: 5,
        state: 0,
        basis: 0,
        data: {
            labels: ['0','1'],
            datasets: [
                    {
                        backgroundColor: 'orange',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [0, 0]
                    }
                ]
        }}
        states = [item2,item3,item4,item5]
        basises = [item6,item7]
        correct = new Audio(sfxCorrect)
        wrong = new Audio(sfxWrong)
    shotChange = (shot) => {
        this.setState({shot:shot})
    }
    run = () => {
        let {state,basis,data,shot,attemp} = this.state
        if(basis==0){
            data.labels = ['0','1']
            if(state==0){
            data.datasets[0].data = [shot,0]
            }
            else if(state==1){
                data.datasets[0].data = [0,shot]
            }
            else {
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [a,b]: [b,a]
            }
        }
        if(basis==1){
            data.labels = ['+','-']
            if(state==2){
            data.datasets[0].data = [shot,0]
            }
            else if(state==3){
                data.datasets[0].data = [0,shot]
            }
            else {
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [a,b]: [b,a]
            }
        }
        this.setState({data:data,attemp:attemp+1})
        this.validate()
    }
    validate = () => {
        const valid = this.state.state === 2 && this.state.basis === 1 && this.state.shot === 10
        if(valid) {
            if(this.state.attemp<1) this.props.increaseStar()
            this.correct.play()
            this.props.justClear()
        }
        else this.wrong.play()
    }
    click = new Audio(sfxClick)
    render() {
        return (
        <Main>
            <Content>
            <img src={item10}
             style={{ position: 'absolute', left: '920px', top: '200px', height:'300px'}} />
            <img src={this.states[this.state.state]}
             style={{ position: 'absolute', left: '160px', top: '235px', height:'120px'}} />
             <img src={this.basises[this.state.basis]}
             style={{ position: 'absolute', left: '315px', top: '235px', height:'120px'}} />
                <button style={{ position: 'absolute', left: '400px', top: '455px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
            <div style={{position:'absolute',left:'100px',top:'450px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
                            <button className="btn btn-primary btn-shot" id="buttonPanel" disabled >จำนวนช็อต</button>
                            <div className="radioPanel">
                            {/* <label className="shot">จำนวนช็อต</label> */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={()=>this.shotChange(1)} name="inlineRadioOptions"/>
                                    <span className="checkmark"></span>
                                    <label className="form-check-label" >{1}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={()=>this.shotChange(5)} checked={this.state.shot === 5} name="inlineRadioOptions"/>
                                    <label className="form-check-label"  >{5}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={()=>this.shotChange(10)} name="inlineRadioOptions" />
                                    <label className="form-check-label">{10}</label>
                                </div>
                            </div>
                        </div>
            <img src={arrow} style={{ position: 'absolute', left: '183px', top: '160px', height:'70px',transform:'rotate(90deg)', cursor:'pointer'}} 
                onClick={()=>this.setState({state:this.state.state===3?0:this.state.state+1})}  />
            <img src={arrow} style={{ position: 'absolute', left: '183px', top: '360px', height:'70px', transform:'scaleX(-1) rotate(270deg)',cursor:'pointer'}} 
                onClick={()=>this.setState({state:this.state.state===0?3:this.state.state-1})}  />
                <img src={arrow} style={{ position: 'absolute', left: '380px', top: '160px', height:'70px',transform:'rotate(90deg)', cursor:'pointer'}} 
                onClick={()=>this.setState({basis:this.state.basis===0?1:this.state.basis+1})}  />
            <img src={arrow} style={{ position: 'absolute', left: '380px', top: '360px', height:'70px', transform:'scaleX(-1) rotate(270deg)',cursor:'pointer'}} 
                onClick={()=>this.setState({basis:this.state.basis===1?0:this.state.basis-1})}  />
            <div style={{ background:'rgb(255,255,255,0.5)', position: 'absolute', left: '570px', top: '230px',}}>
            <Bar
                            data={this.state.data}
                            width={300}
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
                                            max: 10
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

class F5 extends React.Component<any> {
        state = {
            attemp: 0,
            shot: 5,
            state: 0,
            state2: 0,
            data: {
                labels: ['00','01','10','11'],
                datasets: [
                        {
                            backgroundColor: 'orange',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: [0, 0, 0, 0]
                        }
                    ]
            }}
            states = [item2,item3,item4,item5]
            basises = [item6,item7]
            correct = new Audio(sfxCorrect)
            wrong = new Audio(sfxWrong)
        shotChange = (shot) => {
            this.setState({shot:shot})
        }
        run = () => {
            let {state,state2,data,shot,attemp} = this.state
            if(state==0 && state2==0){
                data.datasets[0].data = [shot,0,0,0]
            }
            else if(state==0 && state2==1){
                data.datasets[0].data = [0,shot,0,0]
            }
            else if(state==0){
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [a,b,0,0]: [b,a,0,0]
            }
            else if(state==1 && state2==0){
                data.datasets[0].data = [0,0,shot,0]
            }
            else if(state==1 && state2==1){
                data.datasets[0].data = [0,0,0,shot]
            }
            else if(state==1){
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [0,0,a,b]: [0,0,b,a]
            }
            else if(state2==0){
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [a,0,b,0]: [b,0,a,0]
            }
            else if(state2==1){
                let a = Math.floor(shot/2)
                let b = Math.ceil(shot/2)
                data.datasets[0].data = Math.random() >= 0.5 ? [0,a,0,b]: [0,b,0,a]
            }
            else {
                let avg = Math.floor(shot/4)
                let remain = shot-(avg*4)
                data.datasets[0].data = [avg,avg,avg,avg]
                for(let i=0;i<remain;i++){
                    data.datasets[0].data[Math.floor((Math.random()*100)%4)] += 1
                }   
            }
            this.setState({data:data,attemp:attemp+1})
            this.validate()
        }
        validate = () => {
            const valid =   (this.state.state === 2 || this.state.state === 3)  && 
                            this.state.state2 === 1 &&
                            this.state.shot === 10
            if(valid) {
                if(this.state.attemp<1) this.props.increaseStar()
                this.correct.play()
                this.props.justClear()
            }
            else this.wrong.play()
        }
        click = new Audio(sfxClick)
        render() {
            return (
            <Main>
                <Content>
                <img src={item11}
                 style={{ position: 'absolute', left: '620px', top: '70px', height:'230px'}} />
                <img src={this.states[this.state.state2]}
                 style={{ position: 'absolute', left: '197px', top: '325px', height:'90px'}} />
                 <img src={this.basises[0]}
                 style={{ position: 'absolute', left: '315px', top: '325px', height:'90px'}} />
                 <img src={this.states[this.state.state]}
                 style={{ position: 'absolute', left: '197px', top: '120px', height:'90px'}} />
                 <img src={this.basises[0]}
                 style={{ position: 'absolute', left: '315px', top: '120px', height:'90px'}} />
                    <button style={{ position: 'absolute', left: '400px', top: '485px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
                <div style={{position:'absolute',left:'100px',top:'480px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
                                <button className="btn btn-primary btn-shot" id="buttonPanel" disabled >จำนวนช็อต</button>
                                <div className="radioPanel">
                                {/* <label className="shot">จำนวนช็อต</label> */}
                                    <div className="form-check form-check-inline">
                                        <input type="radio" onChange={()=>this.shotChange(1)} name="inlineRadioOptions"/>
                                        <span className="checkmark"></span>
                                        <label className="form-check-label" >{1}</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" onChange={()=>this.shotChange(5)} checked={this.state.shot === 5} name="inlineRadioOptions"/>
                                        <label className="form-check-label"  >{5}</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" onChange={()=>this.shotChange(10)} name="inlineRadioOptions" />
                                        <label className="form-check-label">{10}</label>
                                    </div>
                                </div>
                            </div>
                    {/* first */}
                <img src={arrow} style={{ position: 'absolute', left: '220px', top: '80px', height:'40px',transform:'rotate(90deg)', cursor:'pointer'}} 
                    onClick={()=>this.setState({state:this.state.state===3?0:this.state.state+1})}  />
                <img src={arrow} style={{ position: 'absolute', left: '220px', top: '215px', height:'40px', transform:'scaleX(-1) rotate(270deg)',cursor:'pointer'}} 
                    onClick={()=>this.setState({state:this.state.state===0?3:this.state.state-1})}  />
                    
                {/* second */}
                <img src={arrow} style={{ position: 'absolute', left: '220px', top: '280px', height:'40px',transform:'rotate(90deg)', cursor:'pointer'}} 
                    onClick={()=>this.setState({state2:this.state.state2===3?0:this.state.state2+1})}  />
                <img src={arrow} style={{ position: 'absolute', left: '220px', top: '415px', height:'40px', transform:'scaleX(-1) rotate(270deg)',cursor:'pointer'}} 
                    onClick={()=>this.setState({state2:this.state.state2===0?3:this.state.state2-1})}  />
                    
                <div style={{ background:'rgb(255,255,255,1)', position: 'absolute', left: '620px', top: '330px',}}>
                <Bar
                                data={this.state.data}
                                width={430}
                                height={200}
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
                                                max: 10
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

class F6 extends React.Component {
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
        return (<Main style={{background:`url(${backgroundUnit})`}}>
            <Content>
                <Fly>
                    <Slide>
                        <Flip>
                        <img src={dragon} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Dragon"/>
                        </Flip>
                    </Slide>
                </Fly>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(0px)}
            to {transform: translateX(1000px)}
            `} 0.75s 1.5s ease-out forwards;
            `
        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                <Fly>
                    <Slide>
                    <img src={qubie} style={{ position: 'absolute', left: '400px', top: '120px' }} alt="Qubie"/>
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
            this.setState({ item: this.state.item+1 })
        }, 1000)
    }

    render() {

        let { item } = this.state

        return (<Main>
            <Content style={{background:`url(${backgroundUnit})`}}>
                    {   item < 4 && 
                        <ChapterBox next={this.props.next} button={false} chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เริ่มต้น"/>
                    }
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '459px' }} />
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '582px' }} />
                    <img src={noStar} style={{ position:'absolute', top: '400px', left: '705px' }} />
                    {   item >= 1 && item < 4 &&
                        <img src={this.props.star >= 1 ? star : noStar} style={{ position:'absolute', top: '400px', left: '459px' }} />
                    }
                    {   item >= 2 && item < 4 &&
                        <img src={this.props.star >= 2 ? star : noStar} style={{ position:'absolute', top: '400px', left: '582px' }} />
                    }
                    {   item >= 3 && item < 4 &&
                        <img src={this.props.star >= 3 ? star : noStar} style={{ position:'absolute', top: '400px', left: '705px' }} />
                    }
                    {   item >= 4 &&
                        <ChapterBox next={this.props.next} button chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เสร็จสิ้น"/>
                    }
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7, F99, F100 }
