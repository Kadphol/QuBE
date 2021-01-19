import React from 'react';
import styled from 'styled-components'
import { ReactComponent as Dragon } from '../../svf/Dragon.svg'
import DialogBox from '../DialogBox'
import Composer from '../Composer'
import Choice from './choice'
import Header from './header'
import axios from '../../axiosconfig'

const Main = styled.div`
  position: relative;
  width: 100%;
  border: solid orange;
  overflow-x: hidden
`

const ObjectDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  margin-top: 125px;
  background-color: beige;
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

class Quiz extends React.Component {

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
    else if (this.state.item === 2 && answer === '1') {
      this.setState({ pass: true, totalScore: this.state.totalScore + this.state.score, nextbutton: true })
    }
    else this.setState({ penalty: this.state.penalty + 500 })
  }

  next = () => this.setState({ item: this.state.item + 1, penalty: 0, pass: false, nextbutton: false })

  handleScore = score => this.setState({ score: score })

  updateScore = () => {
    axios.put('http://localhost/updateInfo', { score: this.state.totalScore })
    window.location.reload();
  }

  render() {
    return (
      <Main>
        <HeaderDiv>
          <div style={{
            position: 'relative',
            fontFamily: 'Kanit',
          }}>
            <p style={{ margin: '30px 1100px 0px', fontSize: '40px' }}>
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
            <PlainDiv>
              {"คำถามมีทั้งหมด 2 ข้อ ข้อละ 2500 คะแนน"}
              <br />
              {"มีเวลาข้อละ 60 วินาที คะแนนจะลดลงตามเวลาที่ใช้"}
              <br />
              {"หากตอบผิดจะโดนหัก 500 คะแนนในข้อนั้น"}
              <br />
              <button className="btn btn-primary" onClick={this.next}>เข้าใจแล้ว</button>
            </PlainDiv>
          </React.Fragment>
        }
        {
          this.state.item === 1 &&
          <React.Fragment>

            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} />
            </HeaderDiv>
            <ObjectDiv>
              <Composer quiz={true} answerCheck={this.answerCheck} />
            </ObjectDiv>
            <DialogBox />
          </React.Fragment>
        }
        {
          this.state.item === 2 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={!this.state.pass} />
            </HeaderDiv>
            <ObjectDiv>
              <Choice answerCheck={this.answerCheck} />
            </ObjectDiv>
            <DialogBox />
          </React.Fragment>
        }
        {
          this.state.item === 3 &&
          <React.Fragment>
            <HeaderDiv>
              <Header handleScore={this.handleScore} penalty={this.state.penalty} play={false} />
            </HeaderDiv>
            <PlainDiv>
              {"เสร็จสิ้นการท้าทาย"}
              <br />
              {"คุณได้รับ "}
              {this.state.totalScore}
              {" คะแนน"}
              <br />
              <button className="btn btn-primary" onClick={this.updateScore}>ตกลง</button>
            </PlainDiv>
          </React.Fragment>
        }
        {this.state.nextbutton &&
          <div style={{ position: 'absolute', left: '540px', bottom: '150px', fontFamily: 'Kanit' }}>
            <button className="btn btn-primary" onClick={this.next}> ถูกต้อง กดเพื่อไปต่อ </button>
          </div>}
      </Main>
    );
  }
}

export default Quiz;