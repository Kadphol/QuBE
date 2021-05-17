import React from 'react';
import { Redirect } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import dragonIcon from '@assets/challenge/dragonBlackIcon.png';
import dragon from '@assets/challenge/dragonBlack.png';
import DialogBox from '@components/DialogBox';
import Header from './header';
import axios from '@config/axiosconfig';
import background from '@assets/challenge/backgroundQuiz.png';
import { Iuser } from '@src/type.modal';
import Music from '@components/Button/Music';
import {C1,C2,C3,C4,C5,C6,C7,C8,C9,C10} from './ComposerGenerator'
import { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 } from './QuestionGenerator'
import ENDPOINT from '@config/endpoint'


const src = require('@assets/sound/bgm6.mp3').default
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default

const Main = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background-image: url(${background});
`

const ObjectDiv = styled.div`
  position: absolute;
  width: 1040px; 
  height: 415px;
  left: 100px;
  top: 130px;
  display: block;
  overflow: hidden;
`

const HeaderDiv = styled.div`  
  width: 100%;
  height: 120px;
  display: flex;
  position: absolute;
`

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

class Play extends React.Component <{user:Iuser,setUser:any}> {

  state = {
    page: 0,
    pass: false,
    score: 0,
    totalScore: 0,
    penalty: 0,
    nextbutton: false
  };

  correct = new Audio(sfxCorrect)
  wrong = new Audio(sfxWrong)
  Composers = [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10]
  Questions = [ Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 ]

  
  RandomComposer = this.Composers[Math.floor(Math.random()*this.Composers.length)]
  RandomQuestion= this.Questions[Math.floor(Math.random()*this.Questions.length)]
  RandomComposer2 = this.Composers[Math.floor(Math.random()*this.Composers.length)]
  RandomQuestion2 = this.Questions[Math.floor(Math.random()*this.Questions.length)]

  componentDidMount = () => {
    while(this.RandomComposer2===this.RandomComposer) this.RandomComposer2 = this.Composers[Math.floor(Math.random()*this.Composers.length)]
    while(this.RandomQuestion2===this.RandomQuestion) this.RandomQuestion2 = this.Questions[Math.floor(Math.random()*this.Composers.length)]
  }

  answerCheck = (valid) => {
    if (valid && !this.state.pass) {
      this.setState({ pass: true, totalScore: this.state.totalScore + this.state.score, nextbutton: true })
    }
    else {
      this.setState({ penalty: this.state.penalty + 200 })
    }
  }

  next = () => {
    this.setState({ page: this.state.page + 1, penalty: 0, pass: false, nextbutton: false })
  }

  handleScore = score => this.setState({ score: score })

  updateScore = () => {
    if(this.state.totalScore>this.props.user.highscore!){
    axios.put(`${ENDPOINT.URL}/updateInfo`, { score: this.state.totalScore })
    this.props.setUser(()=>({...this.props.user,highscore: this.state.totalScore}))
    }
    // relocation instead of next() for pop-up post survey
    // window.location.href = '/challenge'
    this.next()
  }

  render() {
    return (
      <Main>
        <HeaderDiv style={{
  backgroundColor: 'rgb(255,255,255,0.25)'}}/>
        <HeaderDiv>
          <div style={{
            right:'10px',
            width: '200px',
            height: '125px',
            paddingTop: '20px',
            position: 'absolute',
            fontFamily: 'Kanit',
          }}>
            <p style={{ margin: 'auto', fontSize: '40px' }}>
              {this.state.totalScore}
            </p>
            <p style={{ marginTop: '-15px', fontSize: '20px' }}>
              {"คะแนนสะสม"}
            </p>
          </div>
        </HeaderDiv>
        {
          this.state.page === 0 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={false} page={this.state.page}/>
            </HeaderDiv>
            <ObjectDiv>
              <Fly>
              <img src={dragon} style={{position:'static',margin:'30px auto',height:'350px',width:'350px'}}/> 
              </Fly>
            </ObjectDiv>
           <DialogBox showIcon img={dragonIcon} next={this.next} 
           message="โฮ่! เจ้ากล้ามากนะ ที่มาทำร้ายลูกน้องที่น่ารักของข้าแล้วยังกล้าบุกมาถึงถิ่นของข้าแบบนี้ เห็นทีข้าจะต้องทดสอบความสามารถของเจ้าดูเสียหน่อยแล้ว"/>
          </React.Fragment>
        }
        {
          this.state.page === 1 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} page={this.state.page} />
            </HeaderDiv>
            <this.RandomQuestion next={this.next} pass={this.state.pass} answerCheck={this.answerCheck} />
          </React.Fragment>
        }
        {
          this.state.page === 2 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} page={this.state.page} />
            </HeaderDiv>
            <this.RandomQuestion2 next={this.next} pass={this.state.pass} answerCheck={this.answerCheck} />
          </React.Fragment>
        }
        {
          this.state.page === 3 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} page={this.state.page} />
            </HeaderDiv>
            <this.RandomComposer next={this.next} pass={this.state.pass} answerCheck={this.answerCheck} />
          </React.Fragment>
        }
        {
          this.state.page === 4 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} page={this.state.page} />
            </HeaderDiv>
            <this.RandomComposer2 next={this.next} pass={this.state.pass} answerCheck={this.answerCheck} />
          </React.Fragment>
        }
        {
          this.state.page === 5 &&
          <React.Fragment>

            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={false} page={this.state.page} />
            </HeaderDiv>
            <ObjectDiv>
              <Fly>
              <img src={dragon} style={{position:'static',margin:'30px auto',height:'350px',width:'350px'}}/> 
              </Fly>
            </ObjectDiv>
           <DialogBox showIcon img={dragonIcon} next={this.updateScore} 
           message={"ทำได้ไม่เลวนี่ ความสามารถของเจ้าทำคะแนนไปทั้งหมด ".concat(this.state.totalScore.toString()).concat(" คะแนน ยังมีผู้กล้าอีกมากที่เก่งกว่าเจ้า ถ้าคิดว่าเจ้ายังมีของดีมากกว่านี้ก็ลองเข้ามาใหม่ดู")}/>
          </React.Fragment>
        }
        {this.state.page === 6 &&
        <Redirect to="/challenge"/>}
        <Music url={src} />
      </Main>
    );
  }
}

export default Play;