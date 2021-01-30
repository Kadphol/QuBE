import React from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import dragonIcon from '../../../assets/challenge/dragonIcon.png'
import { ReactComponent as Dragon } from '../../../svg/Dragon.svg'
import DialogBox from '../../../components/DialogBox'
import Composer from '../../../components/Composer'
import Header from './header'
import axios from '../../../axiosconfig'
import background from '../../../assets/explore/chapter1/BackgroundQuiz.png'
import {Iuser} from '../../../type.modal'
import Question from '../../../components/Question'

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

const PlainDiv = styled(ObjectDiv)`
  padding-top: 10%;
  font-family: 'Kanit',sans-serif;
  font-size: 40px;
  button {
    font-size: 30px;
  }
`

const HeaderDiv = styled.div`  
  width: 100%;
  height: 120px;
  display: flex;
  position: absolute;
`

class Play extends React.Component <{user:Iuser,setUser:any}> {

  state = {
    item: 0,
    pass: false,
    score: 0,
    totalScore: 0,
    penalty: 0,
    nextbutton: false
  };

  answerCheck = (answer) => {
    let solution = [0, 50, 50, 0]
    if (this.state.item === 1 && JSON.stringify(answer) === JSON.stringify(solution)) {
      this.setState({ pass: true, totalScore: this.state.totalScore + this.state.score, nextbutton: true })
    }
    else if (this.state.item === 2 && answer === true) {
      this.setState({ pass: true, totalScore: this.state.totalScore + this.state.score, nextbutton: true })
    }
    else this.setState({ penalty: this.state.penalty + 500 })
  }

  next = () => this.setState({ item: this.state.item + 1, penalty: 0, pass: false, nextbutton: false })

  handleScore = score => this.setState({ score: score })

  updateScore = () => {
    axios.put('http://localhost/updateInfo', { score: this.state.totalScore })
    this.props.setUser(()=>({...this.props.user,score: this.state.totalScore}))
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
          this.state.item === 0 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={false} />
            </HeaderDiv>
            <ObjectDiv>
            <Dragon style={{position:'static',margin:'30px auto',height:'350px',width:'350px'}}/> 
            </ObjectDiv>
           <DialogBox showIcon={false} img={dragonIcon} next={this.next} 
           message="คำถามมีด้วยกันทั้งหมด 2 ข้อ มีเวลาข้อละ 60 วินาที คะแนนจะลดลงตามเวลาที่ใช้ หากตอบผิดจะโดนหัก 500 คะแนนในข้อนั้น"/>
          </React.Fragment>
        }
        {
          this.state.item === 1 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} />
            </HeaderDiv>
            <ObjectDiv>
              <Composer column={6} quiz={true} answerCheck={this.answerCheck} />
            </ObjectDiv>
            {this.state.pass && <DialogBox img={dragonIcon} showNext={this.state.pass} next={this.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.state.pass && <DialogBox img={dragonIcon} showNext={this.state.pass} next={this.next}
            message="ไหนเจ้าลองต่อวงจรควอนตัม ให้ได้ผลลัพธ์เป็น 01 และ 10 อย่างละ 50% ดูซิ"/>
            }
          </React.Fragment>
        }
        {
          this.state.item === 2 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} />
            </HeaderDiv>
            <ObjectDiv>
              <Question 
                answerValidate={this.answerCheck}
                choices={["|01> และ |10>","|10> และ |11>","|00> และ |11>"]}
                solution={1} 
              />
            </ObjectDiv>
            {this.state.pass && <DialogBox img={dragonIcon} next={this.state.pass?this.next:null}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.state.pass && <DialogBox img={dragonIcon} next={this.state.pass?this.next:null}
            message="ไหนลองบอกผลลัพธ์ที่เป็นไปได้ หากเรานำคิวบิตที่มีค่าเท่ากับ |0> สองตัว ทำการต่อวงจรด้วย H-Gate ที่คิวบิตที่สอง และ X-Gate ที่คิวบิตที่หนึ่ง "/>
            }
          </React.Fragment>
        }
        {
          this.state.item === 3 &&
          <React.Fragment>

            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={false} />
            </HeaderDiv>
            <ObjectDiv>
            <Dragon style={{position:'static',margin:'30px auto',height:'350px',width:'350px'}}/> 
            </ObjectDiv>
           <DialogBox showIcon={false} img={dragonIcon} next={this.updateScore} 
           message={"เจ้าผ่านการทดสอบแล้ว ได้คะแนนทั้งหมด ".concat(this.state.totalScore.toString()).concat(" คะแนน")}/>
          </React.Fragment>
        }
        {this.state.item === 4 &&
        <Redirect to="/challenge"/>}
      </Main>
    );
  }
}

export default Play;