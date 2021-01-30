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
import star from '../../../../assets/explore/chapter1/quiz/star.png'
import starFrame from '../../../../assets/explore/chapter1/quiz/starFrame.png'
import Question from '../../../../components/Question'

const ObjectDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 450px;
  left: 100px;
  top: 100px;
  display: block;
  overflow: hidden;
`

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

const StarDiv = styled.div`
position: absolute;
width: 700px;
height: 400px;
left: 270px;
top: 163px;
background-image: url(${starFrame});
cursor: pointer;
img {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 173px;
}
`

class F0 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            

    render() {
        return (<Main>
            <Content >
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['true','false','false']}
                solution={0}
               /></ObjectDiv>
            </Content>
        </Main>);
    }
}

class F1 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            

    render() {
        return (<Main>
            <Content >
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['false','false','true']}
                solution={2}
               /></ObjectDiv>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component<any> {
    
    state = {perfect:true}

    validate = (valid) => {
           if(valid) {
               if(this.state.perfect) this.props.increaseStar() 
               this.props.showDialog(this.props.index)
           } 
           else this.setState({perfect:false})
    }            

    render() {
        return (<Main>
            <Content >
               <ObjectDiv><Question
                answerValidate={this.validate}
                choices={['false','true','false']}
                solution={1}
               /></ObjectDiv>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component<any> {

    render() {
        return (<Main>
            <Content >
                <StarDiv onClick={this.props.next}>
                    {this.props.star>=1&&<img src={star} style={{left:'189px'}}/>}
                    {this.props.star>=2&&<img src={star} style={{left:'312px'}}/>}
                    {this.props.star>=3&&<img src={star} style={{left:'435px'}}/>}
                </StarDiv>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3}