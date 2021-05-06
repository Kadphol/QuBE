import React from 'react';
import styled, { keyframes } from 'styled-components';
import {Bar} from 'react-chartjs-2'
import Dialog from '@components/DialogBox'
import backgroundClose from '@assets/explore/chapter5/backgroundClose.png'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import princess from '@assets/explore/chapter5/princess.png'
import item1 from '@assets/explore/chapter5/unit2/item1.png'
import item2 from '@assets/explore/chapter5/unit2/item2.png'
import item3 from '@assets/explore/chapter5/unit2/item3.png'
import item4 from '@assets/explore/chapter5/unit2/item4.png'
import item7 from '@assets/explore/chapter5/unit2/item7.png'
import item8 from '@assets/explore/chapter5/unit2/item8.png'
import item10 from '@assets/explore/chapter5/unit2/item10.png'
import item11 from '@assets/explore/chapter5/unit2/item11.png'

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

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

const sfxClick = require('@assets/sound/sfx_click.mp3').default;
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default;
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default;

class F0 extends React.Component {
    render() {
        return (
        <Main>
            <Content style={{ backgroundImage: `url(${backgroundClose})` }}>
                    <Fly>
                        <img src={princess} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                    </Fly>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        const Fade = styled.div`
        animation: ${keyframes`
        from, 50% {opacity: 100%}
        to {opacity: 0%}
        `} 3s ease-out forwards
    `
        return (
        <Main>
            <Content>
            
                <img src={item8} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
                <img src={item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
                <img src={item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
                <img src={item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
                <img src={item3} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
                <Fade>
                <img src={item7} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
                <img src={item1} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
                </Fade>
                <Fly>
                    <img src={princess} style={{ position: 'absolute', left: '900px', top: '250px', height: '250px' }} />
                </Fly>
                <div style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
                position: 'absolute', left: '440px', top: '500px', height: '50px', width:'160px' }}>ตรวจสอบประตู: 0</div> 
                <div style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
                position: 'absolute', left: '650px', top: '500px', height: '50px', width:'160px' }}>สรุปคำตอบ</div> 
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    state = {open:true}
    componentDidMount = () => {
        setTimeout(()=>{
            this.setState({open:false})
        },2500)
    }
    render() {
        const Slide = styled.div`
        animation: ${keyframes`
        from, 50% {transform:translateX(0px); opacity: 100%}
        to {transform:translateX(-100px); opacity: 0%}
        `} 2s ease-out forwards
    `
    const Slide1 = styled.div`
        animation: ${keyframes`
        from {transform:translateX(0px)}
        50% {transform:translateX(300px)}
        to {transform:translateX(0px)}
        `} 2s 2.5s ease-out forwards
    `
    const Slide2 = styled.div`
        animation: ${keyframes`
        from {transform:translateX(0px)}
        50% {transform:translateX(100px)}
        to {transform:translateX(0px)}
        `} 2s 2.5s ease-out forwards
    `
    const Slide3 = styled.div`
        animation: ${keyframes`
        from {transform:translateX(0px)}
        50% {transform:translateX(-100px)}
        to {transform:translateX(0px)}
        `} 2s 2.5s ease-out forwards
    `
    const Slide4 = styled.div`
        animation: ${keyframes`
        from {transform:translateX(0px)}
        50% {transform:translateX(-300px)}
        to {transform:translateX(0px)}
        `} 2s 2.5s ease-out forwards
    `
        return (
        <Main>
            <Content>
            <img src={item8} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
            <Slide1>
            <img src={item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
            </Slide1>
            <Slide2>
            <img src={item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
            </Slide2>
            <Slide3>
            <img src={item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
            </Slide3>
            <Slide4>
            <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
            </Slide4>
            <Slide>
                 <Fly>
                     {
                         this.state.open == true &&
                        <img src={princess} style={{ position: 'absolute', left: '900px', top: '250px', height: '250px' }} />
                     }
            </Fly>
            </Slide>
            <div style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
            position: 'absolute', left: '440px', top: '500px', height: '50px', width:'160px' }}>ตรวจสอบประตู: 0</div> 
            <div style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
            position: 'absolute', left: '650px', top: '500px', height: '50px', width:'160px' }}>สรุปคำตอบ</div> 
        </Content>
        </Main>);
    }
}

class F3 extends React.Component<any> {
    state = {count:0,
             open:false,
             finish:false}
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    open = () => {
        this.click.play()
        this.setState({open:true,count:this.state.count+1})
        setTimeout(()=>{
            this.setState({open:false})
        },1500)
    }
    check = () => {
        if(this.state.count==2){
            this.correct.play()
            this.setState({finish:true})
        }
        else {
            this.wrong.play()
            this.setState({finish:false})
        }
        this.setState({count:0})
        
    }
    render() {
        return (
        <Main>
            <Content>
            <img src={item8} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
            <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
            <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
            <img src={(this.state.open||this.state.finish)?item4:item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
            <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
            <Fly>
            <img src={princess} style={{ position: 'absolute', left: this.state.open?'250px':'-1000px', opacity: this.state.count===1?'40%':this.state.count===2?'25%':'20%', top: '250px', height: '250px' }} />
            <img src={princess} style={{ position: 'absolute', left: (this.state.open||this.state.finish)?'450px':'-1000px', opacity: this.state.count===0?'55%':this.state.count===2?'50%':'20%', top: '250px', height: '250px' }} />
            <img src={princess} style={{ position: 'absolute', left: this.state.open?'650px':'-1000px', opacity: this.state.count===1?'40%':this.state.count===2?'25%':'20%', top: '250px', height: '250px' }} />
            <img src={princess} style={{ position: 'absolute', left: this.state.open?'850px':'-1000px', opacity: this.state.count===1?'60%':this.state.count===2?'70%':'20%', top: '250px', height: '250px' }} />
            </Fly>
            <div onClick={()=>this.open()}
            style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
            position: 'absolute', left: '440px', top: '500px', height: '50px', width:'160px', cursor:'pointer'}}>
            ตรวจสอบประตู: {this.state.count}</div> 
            <div onClick={()=>this.check()}
            style={{ backgroundColor:'#A54141', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
            position: 'absolute', left: '650px', top: '500px', height: '50px', width:'160px', cursor:'pointer'}}>
            สรุปคำตอบ</div> 
            </Content>
            {
                this.state.finish &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                 <Dialog showNext next={()=>this.props.next()} img={princessIcon} 
                 message={`ดีมาก! เธอทำได้ถูกต้องตามหลักการของ Grover's algorithm แล้ว`} />
                 </div>   
            }
        </Main>);
    }
}

class F4 extends React.Component {
    state = {open:false}
    componentDidMount = () => {
        setTimeout(()=>{
            this.setState({open:true})
        },1500)
    }
    render() {
        return (
        <Main>
            <Content>
            <img src={item8} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
            <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
            <img src={item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
            <img src={!this.state.open?item4:item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
            <img src={item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
            <Fly>
            <img src={princess} style={{ position: 'absolute', left: '450px', opacity: !this.state.open?'50%':'0%', top: '250px', height: '250px' }} />
            <img src={princess} style={{ position: 'absolute', left: '850px', opacity: this.state.open?'100%':'0%', top: '250px', height: '250px' }} />
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
            <img src={item8} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
            <img src={item4} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
            <img src={item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
            <img src={item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
            <img src={item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
            <Fly>
            <img src={princess} style={{ position: 'absolute', left: '850px', top: '250px', height: '250px' }} />
            </Fly>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component<any> {
    state = {count:0,
        count2:0,
        open:false,
        answer:-1,
        finish:-1,
        data: {
            labels: ['1','2','3','4'],
            datasets: [
                    {
                        backgroundColor: 'red',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [0,0,0,0]
                    }
                ]
        }}
click = new Audio(sfxClick)
correct = new Audio(sfxCorrect)
wrong = new Audio(sfxWrong)
dataCollection = [[0,0,0,1],[0,0,0,2],[0,1,0,2],[1,1,0,2],[1,1,0,3]]
open = () => {
   this.click.play()
   this.setState({open:true,count:this.state.count+1,finish:-1})
   setTimeout(()=>{
       this.setState({open:false})
   },1000)
}
check = () => {
    let {count,count2,data} = this.state
   if(count===2){
       this.correct.play()
       if(count2===0||count2===1||count2===4) this.setState({answer:1})
       else if(count2===2) this.setState({answer:1})
       else if(count2===3) this.setState({answer:0})
       data.datasets[0].data = this.dataCollection[count2]
       this.setState({finish:count2,count2:count2+1,data:data})
   }
   else {
       this.wrong.play()
   }
   this.setState({count:0})
}
render() {
   return (
   <Main>
       <Content>
       <img src={item8} style={{ position: 'absolute', left: '300px', top: '100px', height: '50px' }} />
       <img src={(this.state.open||this.state.finish===0||this.state.finish===1||this.state.finish===4)?item4:item3} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
       <img src={this.state.open?item4:item3} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
       <img src={(this.state.open||this.state.finish===2)?item4:item3} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
       <img src={(this.state.open||this.state.finish===3)?item4:item3} style={{ position: 'absolute', left: '50px', top: '200px', height: '250px' }} />
       <Fly>
       <img src={princess} style={{ position: 'absolute', top: '250px', height: '250px',
       left: (this.state.open||this.state.finish===3)?'50px':'-1000px', 
       opacity: this.state.count===1?'40%':this.state.count===2?'25%':'100%' }} />
       <img src={princess} style={{ position: 'absolute', top: '250px', height: '250px',
       left: (this.state.open||this.state.finish===2)?'250px':'-1000px', 
       opacity: this.state.count===1?'55%':this.state.count===2?'50%':'100%' }} />
       <img src={princess} style={{ position: 'absolute', top: '250px', height: '250px',
       left: this.state.open?'450px':'-1000px', 
       opacity: this.state.count===1?'40%':this.state.count===2?'25%':'100%' }} />
       <img src={princess} style={{ position: 'absolute', top: '250px', height: '250px',
       left: (this.state.open||this.state.finish===0||this.state.finish===1||this.state.finish===4)?'650px':'-1000px', 
       opacity: this.state.count===1?'60%':this.state.count===2?'70%':'100%' }} />
       </Fly>
       <div onClick={()=>this.open()}
       style={{ backgroundColor:'gray', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
       position: 'absolute', left: '240px', top: '500px', height: '50px', width:'160px', cursor:'pointer'}}>
       ตรวจสอบประตู: {this.state.count}</div> 
       <div onClick={()=>this.check()}
       style={{ backgroundColor:'gray', borderRadius:'5%', color:'white', fontFamily:'Kanit', lineHeight:'50px',
       position: 'absolute', left: '450px', top: '500px', height: '50px', width:'160px', cursor:'pointer'}}>
       หาคำตอบ</div> 
       <div style={{ background:'rgb(255,255,255,0.5)', position: 'absolute', left: '920px', top: '200px',}}>
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
           this.state.count2 === 5 &&
           <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
            <Dialog showNext next={()=>this.props.next()} img={princessIcon} 
            message={`เยี่ยมไปเลย! เมื่อเราทำการสรุปผลหลายครั้งแล้วบันทึกเป็นสถิติ ผลลัพธ์ที่ได้มี
            ความแม่นยำสูงจริง ๆ ด้วย ถึงจะไม่เต็ม 100% ก็เถอะ`} />
            </div>   
       }
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6}