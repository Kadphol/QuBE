import React from 'react';
import styled, { keyframes } from 'styled-components';
import Bew from '@assets/explore/chapter2/Bew.png'
import backgroundClose from '@assets/explore/chapter2/BackgroundClose.png'
import qv0 from '@assets/explore/chapter2/unit2/qv0.png'
import qv1 from '@assets/explore/chapter2/unit2/qv1.png'
import qvp from '@assets/explore/chapter2/unit2/qv+.png'
import qvm from '@assets/explore/chapter2/unit2/qv-.png'
import qvpi from '@assets/explore/chapter2/unit2/qv+i.png'
import qvmi from '@assets/explore/chapter2/unit2/qv-i.png'
import qunknown from '@assets/explore/chapter2/unit2/qunknown.png'
import dot from '@assets/explore/chapter2/unit2/dot.png'
import dot2 from '@assets/explore/chapter2/unit2/dot2.png'
import linear1 from '@assets/explore/chapter2/unit2/linear1.png'
import linear0 from '@assets/explore/chapter2/unit2/linear0.png'
import item1 from '@assets/explore/chapter2/unit2/item1.png'
import item2 from '@assets/explore/chapter2/unit2/item2.png'
import sphere1 from '@assets/explore/chapter2/unit2/sphere1.png'
import Dialog from '@components/DialogBox'
import qubie from '@assets/explore/qubieIcon.png';

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
const sfxClick = require('@assets/sound/sfx_click.mp3').default;

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

    state = {state:false}

    componentDidMount = () => {
        setInterval(()=>{
            this.setState({state:!this.state.state})
        },750)
    }

    render() {

        let show = this.state.state? qv0: qv1

        return (<Main>
            <Content>
                <img src={sphere1}  style={{position:'absolute',top:'100px',left:'299px'}}/>
                <img src={this.state.state?dot:dot2} style={{position:'absolute',top:'130px',left:'475px'}}/>
                <img src={!this.state.state?dot:dot2} style={{position:'absolute',top:'470px',left:'475px'}}/>
                <img src={show} style={{position:'absolute',top:'240px',left:'780px'}}/>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component<any> {

    state = {select:0,count:0}

    click = new Audio(sfxClick)

    handleClick = (pick) => {
        this.setState({select:pick,count:this.state.count+1})
        this.click.play()
    }

    render() {
        let {select} = this.state
        let show = select === 1 ? qvp : select === 2 ? qvmi : select === 3 ? qvm : select === 4 ? qvpi : qunknown
        return (<Main>
            <Content>
                <img src={sphere1}  style={{position:'absolute',top:'100px',left:'299px'}}/>
                <img src={select===1?dot:dot2} onClick={()=>this.handleClick(1)}style={{position:'absolute',top:'400px',left:'330px',cursor:'pointer'}}/>
                <img src={select===2?dot:dot2} onClick={()=>this.handleClick(2)}style={{position:'absolute',top:'285px',left:'385px',cursor:'pointer'}}/>
                <img src={select===3?dot:dot2} onClick={()=>this.handleClick(3)}style={{position:'absolute',top:'252px',left:'530px',cursor:'pointer'}}/>
                <img src={select===4?dot:dot2} onClick={()=>this.handleClick(4)}style={{position:'absolute',top:'314px',left:'650px',cursor:'pointer'}}/>
                <img src={show} style={{position:'absolute',top:'240px',left:'780px'}}/>
            </Content>
            {this.state.count>=4 &&
                <div style={{position:'relative',marginTop:'-720px',zIndex:3}}>
                <Dialog showNext next={this.props.next} img={qubie} message={"อ๊ะ มีคิวบิตสัญลักษณ์หน้าตาแปลก ๆ "} />
                </div>
            }
        </Main>);
    }
}

class F3 extends React.Component {

    render() {
        
        return (<Main>
            <Content>
                <img src={qvp} style={{ position: 'absolute', left: '450px', top: '300px' }}/>
                <img src={item1} style={{ position: 'absolute', left: '570px', top: '120px' }}/>
                <img src={item2} style={{ position: 'absolute', left: '640px', top: '155px' }}/>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component<any> {

    state = {state:0}

    componentDidMount = () => {
        setInterval(()=>{
            let target = this.state.state==1?0:this.state.state+0.5
            this.setState({state:target})
        },750)
    }

    render() {

        let show = this.state.state===0 ? qv0: this.state.state===0.5 ? qvp : qv1

        return (<Main>
            <Content>
                <img src={sphere1}  style={{position:'absolute',top:'100px',left:'199px'}}/>
                <img src={this.state.state===0?dot:dot2} style={{position:'absolute',top:'130px',left:'375px'}}/>
                <img src={this.state.state===0.5?dot:dot2} style={{position:'absolute',top:'400px',left:'230px'}}/>
                <img src={this.state.state===1?dot:dot2} style={{position:'absolute',top:'470px',left:'375px'}}/>
                <img src={this.state.state!==1?linear0:linear1} style={{position:'absolute',opacity:'60%',top:'100px',left:'900px'}}/>
                <img src={this.state.state!==0?linear1:linear0} style={{position:'absolute',opacity:'60%',top:'100px',left:'900px'}}/>
                <img src={show} style={{position:'absolute',top:'240px',left:'680px'}}/>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
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

export { F0, F1, F2, F3, F4, F5 }