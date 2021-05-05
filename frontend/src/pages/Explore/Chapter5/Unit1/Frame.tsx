import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dialog from '@components/DialogBox'
import backgroundClose from '@assets/explore/chapter5/backgroundClose.png'
import princessIcon from '@assets/explore/chapter5/princessIcon.png'
import princess from '@assets/explore/chapter5/princess.png'
import item1 from '@assets/explore/chapter5/unit1/item1.png'
import item2 from '@assets/explore/chapter5/unit1/item2.png'
import item7 from '@assets/explore/chapter5/unit1/item7.png'
import item10 from '@assets/explore/chapter5/unit1/item10.png'
import item11 from '@assets/explore/chapter5/unit1/item11.png'


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
        from, 50% {opacity: 0%}
        to {opacity: 100%}
        `} 3s ease-out forwards
    `
        return (
            <Main>
                <Content>
                <div style={{ position: 'absolute', backgroundColor:'gray',left: '600px', top: '325px', height: '10px', width:'300px' }} />
                <div style={{ position: 'absolute', backgroundColor:'gray',left: '250px', top: '220px', height: '10px', width:'300px' }} />
                <div style={{ position: 'absolute', backgroundColor:'gray',left: '250px', top: '420px', height: '10px', width:'300px' }} />

                <img src={item10} style={{ position: 'absolute', left: '400px', top: '120px', height: '400px' }} />
                <div style={{ position: 'absolute', left: '200px', top: '150px', height: '130px', width: '130px', borderRadius:'50%', 
                backgroundColor:'#e35845',color:'white',fontFamily:'Kanit', lineHeight:'130px',fontSize:'60px'}} > 1 </div>
                <div style={{ position: 'absolute', left: '200px', top: '350px', height: '130px', width: '130px', borderRadius:'50%', 
                backgroundColor:'#e35845',color:'white',fontFamily:'Kanit', lineHeight:'130px',fontSize:'60px'}} > 1 </div>
                <img src={item11} style={{ position: 'absolute', left: '792px', top: '210px', height: '250px' }} />
                <Fade>
                    <div style={{ position: 'absolute', left: '850px', top: '250px', height: '130px', width: '130px', borderRadius:'50%', 
                backgroundColor:'#e35845',color:'white',fontFamily:'Kanit', lineHeight:'130px',fontSize:'60px'}} > 2 </div>
                </Fade>
                </Content>
            </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (
            <Main>
                <Content>
                <img src={item7} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
                <img src={item1} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
                <img src={item1} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
                <Fly>
                    <img src={princess} style={{ position: 'absolute', left: '900px', top: '250px', height: '250px' }} />
                </Fly>
                </Content>
            </Main>);
    }
}

class F3 extends React.Component {
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
                <img src={item7} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
                <Slide1>
                <img src={item1} style={{ position: 'absolute', left: '250px', top: '200px', height: '250px' }} />
                </Slide1>
                <Slide2>
                <img src={item1} style={{ position: 'absolute', left: '450px', top: '200px', height: '250px' }} />
                </Slide2>
                <Slide3>
                <img src={item1} style={{ position: 'absolute', left: '650px', top: '200px', height: '250px' }} />
                </Slide3>
                <Slide4>
                <img src={this.state.open?item2:item1} style={{ position: 'absolute', left: '850px', top: '200px', height: '250px' }} />
                </Slide4>
                <Fly>
                    <Slide>
                        {
                        this.state.open &&
                        <img src={princess} style={{ position: 'absolute', left: '900px', top: '250px', height: '250px' }} />
                        }
                    </Slide>
                </Fly>
                </Content>
            </Main>);
    }
}

class F4 extends React.Component<any> {
    state = {count:0,
             open:[false,false,false,false],
             left: '-1000px'
            }
    position = ['250px','450px','650px','850px']
    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)
    handleClick = (i) => {
        let {open,count} = this.state
        this.click.play()
        open[i] = true
        if(count==3){
            this.correct.play()
            this.setState({left:this.position[i]})
        }
        else {this.wrong.play()}
        this.setState({open:open,count:count+1})
    }
    render() {
        return (
            <Main>
                <Content>
                <img src={item7} style={{ position: 'absolute', left: '500px', top: '100px', height: '50px' }} />
                <img src={this.state.open[3]?item2:item1} onClick={()=>this.handleClick(3)} 
                style={{ position: 'absolute', left: '850px', top: '200px', height: '250px', cursor:'pointer' }} />
                <img src={this.state.open[2]?item2:item1} onClick={()=>this.handleClick(2)} 
                style={{ position: 'absolute', left: '650px', top: '200px', height: '250px', cursor:'pointer' }} />
                <img src={this.state.open[1]?item2:item1} onClick={()=>this.handleClick(1)} 
                style={{ position: 'absolute', left: '450px', top: '200px', height: '250px', cursor:'pointer' }} />
                <img src={this.state.open[0]?item2:item1} onClick={()=>this.handleClick(0)} 
                style={{ position: 'absolute', left: '250px', top: '200px', height: '250px', cursor:'pointer' }} />
                <Fly>
                <img src={princess} style={{ position: 'absolute', left: this.state.left, top: '220px', height: '250px' }} />
                </Fly>
                </Content>
                {
                 this.state.count === 4 &&
                 <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                 <Dialog showNext next={()=>this.props.next()} img={princessIcon} 
                 message={`เยี่ยมไปเลยเธอหาฉันเจอแล้ว ! ถึงจะใช้เวลานานไปหน่อยก็เถอะ`} />
                 </div>   
                }
            </Main>);
    }
}

export { F0, F1, F2, F3, F4}