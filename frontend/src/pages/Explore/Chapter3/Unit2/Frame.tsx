import React from 'react';
import {Bar} from 'react-chartjs-2';
import styled, { keyframes } from 'styled-components';
import backgroundClose from '@assets/explore/chapter3/backgroundClose.png'
import Dialog from '@components/DialogBox'
import maxIcon from '@assets/explore/chapter3/maxIcon.png';
import max from '@assets/explore/chapter3/max.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import item0 from '@assets/explore/chapter3/unit2/item0.png'
import item1 from '@assets/explore/chapter3/unit2/item1.png'
import item2 from '@assets/explore/chapter3/unit2/item2.png'
import item3 from '@assets/explore/chapter3/unit2/item3.png'
import item4 from '@assets/explore/chapter3/unit2/item4.png'
import item5 from '@assets/explore/chapter3/unit2/item5.png'
import item15 from '@assets/explore/chapter3/unit2/item15.png'
import arrow from '@assets/explore/chapter3/unit2/arrow.png'

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
const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class F0 extends React.Component {
    render() {
        return (<Main>
            <Content style={{ background: `url(${backgroundClose})` }}>
                <Fly>
                <img src={max} style={{ position: 'absolute', left: '400px', top: '100px' }} />
                </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component<any,any> {
    state = {
        count: 0,
        newdata: [[1,0],[2,0],[3,0],[4,0]],
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
            }
    }
    run = ():void => {
        let { data , count, newdata } = this.state
        data.datasets[0].data = newdata[count]
        this.setState({data:data,count:count+1})
    }
    click = new Audio(sfxClick)
    render() {
        return (
        <Main>
            <Content>
            {
            this.state.count >=1 &&   
            <img src={item0} style={{ position: 'absolute', left: '520px', top: '250px', height:'150px'}} />
            }
            <img src={item2} style={{ position: 'absolute', left: '120px', top: '250px', height:'150px'}} />
            <button style={{ position: 'absolute', left: '360px', top: '450px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
            <div style={{ background:'rgb(255,255,255,0.5)', position: 'absolute', left: '800px', top: '230px',}}>
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
                                            max: 5
                                        }
                                    }]
                                }
                            }}
                        />
            </div>
            </Content>
            {
                this.state.count>=4 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={maxIcon} 
                message={"ในกรณีนี้ คิวบิตแรกมีสถานะเป็น |0> เสมอและคิวบิตที่สองมีสถานะเป็น |1> เสมอ ผลลัพธ์จากการวัดคิวบิตคู่นี้จึงเป็น |01> เท่านั้นครั่บ"} />
                </div>
            }
        </Main>);
    }
}

class F2 extends React.Component<any,any> {
    state = {
        count: 0,
        newdata: [[1,0],[1,1],[1,2],[2,2]],
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
            }
    }
    run = ():void => {
        let { data , count, newdata } = this.state
        data.labels = ['0','1']
        data.datasets[0].data = newdata[count]
        this.setState({data:data,count:count+1})
    }
    click = new Audio(sfxClick)
    render() {
        return (
        <Main>
            <Content>
            {
                (this.state.count === 1 || this.state.count === 4) &&
                <img src={item0} style={{ position: 'absolute', left: '520px', top: '250px', height:'150px'}} />
            }
            {
                (this.state.count === 2 || this.state.count === 3) &&
                <img src={item1} style={{ position: 'absolute', left: '520px', top: '250px', height:'150px'}} />
            }
            <img src={item3} style={{ position: 'absolute', left: '120px', top: '250px', height:'150px'}} />
            <button style={{ position: 'absolute', left: '360px', top: '450px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
            <div style={{ background:'rgb(255,255,255,0.5)', position: 'absolute', left: '800px', top: '250px',}}>
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
                                            max: 5
                                        }
                                    }]
                                }
                            }}
                        />
            </div>
            </Content>
            {
                this.state.count>=4 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={qubieIcon} message={"อ๊ะ! พอทำการวัดคิวบิตตัวนี้ ผลลัพธ์มีโอกาสเป็นไปได้ทั้ง 0 และ 1 อย่างเท่า ๆ กัน"} />
                </div>
            }
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateY(-150px)}
            to {transform: translateY(0px)}
            `} 0.75s 1s ease-out forwards;
            `
        let Fade = styled.div`
        animation: ${keyframes`
        from {opacity:0%}
        70% {opacity:0%}
        to {opacity:100%}
        `} 2s ease-out forwards;
        `
        return (
        <Main>
            <Content>
            <img src={item3} style={{ position: 'absolute', left: '420px', top: '150px', height:'150px'}} />
            <Slide>
                <Fade>
            <img src={item15} style={{ position: 'absolute', left: '350px', top: '300px', height:'200px'}} />
                </Fade>
            </Slide>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    state = {shot:5}
    shotChange = (shot) => {
        this.setState({shot:shot})
    }
    run = () => {
    }
    click = new Audio(sfxClick)
    render() {
        let Slide = styled.div`
            animation: ${keyframes`
            from {transform: translateX(-160px)}
            50% {transform: translateX(-160px)}
            to {transform: translateX(0px)}
            `} 2s ease-out forwards;
            `
        let Fade = styled.div`
        animation: ${keyframes`
        from {opacity:0%}
        50% {opacity:0%}
        to {opacity:100%}
        `} 2s ease-out forwards;
        `
        return (
        <Main>
            <Content>
            <img src={item3} style={{ position: 'absolute', left: '400px', top: '250px', height:'150px'}} />
                <Slide>
                <button style={{ position: 'absolute', left: '670px', top: '435px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
                </Slide>
                <Fade>
            <div style={{position:'absolute',left:'360px',top:'430px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
                            <button className="btn btn-primary btn-shot" id="buttonPanel" disabled style={{width:'100px'}}>จำนวนช็อต</button>
                            <div className="radioPanel">
                            {/* <label className="shot">จำนวนช็อต</label> */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="inlineRadioOptions"/>
                                    <span className="checkmark"></span>
                                    <label className="form-check-label" >{1}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" checked={this.state.shot === 5} name="inlineRadioOptions"/>
                                    <label className="form-check-label"  >{5}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="inlineRadioOptions" />
                                    <label className="form-check-label">{10}</label>
                                </div>
                            </div>
                        </div>
                </Fade>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    state = {
        count: 0,
        shot: 5,
        state: 0,
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
    shotChange = (shot) => {
        this.setState({shot:shot})
    }
    run = () => {
        let {state,data,shot} = this.state
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
        this.setState({data:data})
    }
    click = new Audio(sfxClick)
    render() {
        return (
        <Main>
            <Content>
            <img src={this.state.state===0?item2:this.state.state===1?item4:this.state.state===2?item3:item5}
             style={{ position: 'absolute', left: '240px', top: '250px', height:'150px'}} />
                <button style={{ position: 'absolute', left: '510px', top: '435px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
            <div style={{position:'absolute',left:'200px',top:'430px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
                            <button className="btn btn-primary btn-shot" id="buttonPanel" disabled style={{width:'100px'}}>จำนวนช็อต</button>
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
            <img src={arrow} style={{ position: 'absolute', left: '120px', top: '280px', height:'100px', cursor:'pointer'}} 
                onClick={()=>this.setState({state:this.state.state===0?3:this.state.state-1})}  />
            <img src={arrow} style={{ position: 'absolute', left: '650px', top: '280px', height:'100px', transform:'scaleX(-1)',cursor:'pointer'}} 
                onClick={()=>this.setState({state:this.state.state===3?0:this.state.state+1})}  />
            <div style={{ background:'rgb(255,255,255,0.5)', position: 'absolute', left: '800px', top: '250px',}}>
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

export { F0, F1, F2, F3, F4, F5}