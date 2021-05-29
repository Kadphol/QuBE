import React from 'react';
import styled, { keyframes } from 'styled-components';
import {Bar} from 'react-chartjs-2'
import backgroundClose from '@assets/explore/chapter3/backgroundClose.png'
import Dialog from '@components/DialogBox'
import maxIcon from '@assets/explore/chapter3/maxIcon.png';
import max from '@assets/explore/chapter3/max.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'
import item0 from '@assets/explore/chapter3/unit3/item0.png'
import item1 from '@assets/explore/chapter3/unit3/item1.png'
import item2 from '@assets/explore/chapter3/unit3/item2.png'
import item3 from '@assets/explore/chapter3/unit3/item3.png'
import item4 from '@assets/explore/chapter3/unit3/item4.png'
import item5 from '@assets/explore/chapter3/unit3/item5.png'
import item7 from '@assets/explore/chapter3/unit3/item7.png'
import item8 from '@assets/explore/chapter3/unit3/item8.png'
import item9 from '@assets/explore/chapter3/unit3/item9.png'
import item10 from '@assets/explore/chapter3/unit3/item10.png'
import item11 from '@assets/explore/chapter3/unit3/item11.png'
import arrow from '@assets/explore/chapter3/unit3/arrow.png'

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
const slideToRight = keyframes`
0% {transform: translateX(0px)}
100% {transform: translateX(200px)}
`

const fade = keyframes`
0% {opacity: 0%}
100% {opacity: 100%}
`
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

class F1 extends React.Component {
    render() {
        const Fade = styled.div`
        animation: ${keyframes`
        from {opacity:0%}
        70% {opacity:0%}
        to {opacity:100%}
        `} 2s ease-out forwards
        `
        return (
            <Main>
                <Content>
                    <img src={item10} style={{ position: 'absolute', left: '400px', top: '180px', height: '120px' }} />
                    <img src={item11} style={{ position: 'absolute', left: '400px', top: '350px', height: '120px' }} />
                    <Fade>
                    <img src={item8} style={{ position: 'absolute', left: '700px', top: '180px', height: '120px' }} />
                    <img src={item8} style={{ position: 'absolute', left: '700px', top: '350px', height: '120px' }} />
                    </Fade>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    state = {
        count: 0,
        data: {
            labels: ['00'],
            datasets: [
                    {
                        backgroundColor: 'orange',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [0, 0, 0, 0]
                    }
                ]
        }
    }
    componentDidMount = () => {
        const labelSet = [['00'],['00','01'],['00','01','10'],['00','01','10','11']]
        setInterval(()=>{
            let {data,count} = this.state
            let newcount = count===3?3:count+1
            data.labels = labelSet[newcount]
            this.setState({data:data,count:newcount})
        },1000)
    }
    render() {
        return (
            <Main>
                <Content>
                    <img src={this.state.count<2?item0:item1} style={{ position: 'absolute', left: '420px', top: '180px', height: '120px' }} />
                    <img src={this.state.count%2===0?item0:item1} style={{ position: 'absolute', left: '420px', top: '350px', height: '120px' }} />
                    <img src={item10} style={{ position: 'absolute', left: '120px', top: '180px', height: '120px' }} />
                    <img src={item11} style={{ position: 'absolute', left: '120px', top: '350px', height: '120px' }} />
                    <div style={{ background:'rgb(255,255,255,0.5)',position: 'absolute', left: '630px', top: '200px',}}>
            <Bar
                            data={this.state.data}
                            width={500}
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

class F3 extends React.Component<any,any> {
    state = {
        count: 0,
        shot: 5,
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
        }
    }
    click = new Audio(sfxClick)
    shotChange = (shot) => {
        this.setState({shot:shot})
    }
    run = () => {
        let {shot,data} = this.state
        data.datasets[0].data = [0,shot,0,0]
        this.setState({data:data,count:this.state.count+1})
    }
    render() {
        return (
            <Main>
                <Content>
                    <img src={item2} style={{ position: 'absolute', left: '170px', top: '180px', height: '120px' }} />
                    <img src={item4} style={{ position: 'absolute', left: '170px', top: '330px', height: '120px' }} />
                    <button style={{ position: 'absolute', left: '460px', top: '475px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
                <div style={{position:'absolute',left:'150px',top:'470px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
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
                    <div style={{ background:'rgb(255,255,255,0.5)',position: 'absolute', left: '630px', top: '200px',}}>
            <Bar
                            data={this.state.data}
                            width={500}
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
                {
                this.state.count>=3 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={maxIcon} message={"หลังจากทำการวัดมาหลายครั้ง จะเห็นว่าคิวบิต |0> วัดผลลัพธ์ได้ 0 ตลอดนะครั่บ"} />
                </div>
            }
            </Main>);
    }
}

class F4 extends React.Component<any,any> {
    state = {
        count: 0,
        shot: 5,
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
        }
    }
    click = new Audio(sfxClick)
    shotChange = (shot) => {
        this.setState({shot:shot})
    }
    
    run = () => {
        let {shot,data} = this.state
        let avg = Math.floor(shot/4)
        let remain = shot-(avg*4)
        data.datasets[0].data = Array(4).fill(avg)
        var i
        for(i=0;i<remain;i++){
        let rand = (Math.floor(Math.random()*100))%4
        console.log(data.datasets[0].data,rand)
        data.datasets[0].data[rand]+=1
        }
        this.setState({data:data,count:this.state.count+1})
    }
    render() {
        return (
            <Main>
                <Content>
                    <img src={item3} style={{ position: 'absolute', left: '170px', top: '180px', height: '120px' }} />
                    <img src={item5} style={{ position: 'absolute', left: '170px', top: '330px', height: '120px' }} />
                    <button style={{ position: 'absolute', left: '460px', top: '475px'}} className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
                <div style={{position:'absolute',left:'150px',top:'470px',borderRadius:'10px',border:'solid 1px #A29BFE',padding:'5px 5px 5px',background:'rgb(255,255,255,0.7)'}}>
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
                    <div style={{ background:'rgb(255,255,255,0.5)',position: 'absolute', left: '630px', top: '200px',}}>
            <Bar
                            data={this.state.data}
                            width={500}
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
                {
                this.state.count==3 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={()=>this.setState({count:this.state.count+1})} img={qubieIcon} message={"อืมม ผลลัพธ์จากการวัดเป็นไปได้ทุกรูปแบบอย่างเท่า ๆ กันเลย"} />
                </div>
            }
            {
                this.state.count>=4 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={maxIcon} 
                message={`ถูกต้องแล้วครั่บ เนื่องจากคิวบิตทั้งสองมีสถานะ Superposition ทั้งคู่ ทำให้คิวบิตแต่ละตัวมีโอกาสเป็นไปได้ทั้ง |0> และ |1> นั่นเองครั่บ`} />
                </div>
            }
            </Main>);
    }
}

export { F0, F1, F2, F3, F4 }