import React from 'react';
import styled from 'styled-components'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Main = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  font-family: 'Kanit',sans-serif;
  font-size: medium;
  display: flex;
`

const TimerDiv = styled.div`
    margin: 10px 20px;
`

interface IProps {
    play: boolean;
    penalty: number;
    page: number;
    handleScore:(number)=>void;
}

class Quiz extends React.Component <IProps>{

    state = {
        remainingTime: 0,
        remainingScore: 0,
        penalty: 0,
        justWrong: false,
    };

    render() {
        return (
            <Main>
                <TimerDiv>
<CountdownCircleTimer
                    size={100}
                    isPlaying={this.props.play}
                    duration={60}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                    ]}
                >
                    {({ remainingTime }) => {
                        if(this.state.remainingTime!==remainingTime) {
                            let score = 100+(15*remainingTime!)-this.props.penalty
                            score = score<100?100:score;
                            this.props.handleScore(score)
                            this.setState({remainingTime:remainingTime,remainingScore:score,justWrong:this.state.penalty!==this.props.penalty,penalty:this.props.penalty})
                        }
                        return(remainingTime!.toString().concat(' วินาที'))}}
                </CountdownCircleTimer>
                </TimerDiv>
                
                <div style={{
            left:'125px',
            width: '200px',
            height: '125px',
            paddingTop: '20px',
            position: 'absolute',
            fontFamily: 'Kanit',
          }}>
                    
                <div style={{margin:'auto', fontSize: '40px', color:this.state.justWrong?"red":"black"}}>
                {this.state.remainingScore}
                </div>
                <div style={{marginTop: '-15px',fontSize: '20px'}}>
                {"คะแนน"}
                </div>
                {   
                    this.props.page <=4
                    ? <div style={{marginTop: '-60px',marginLeft:'400px',fontSize: '35px',width:'200px'}}>
                    {"ข้อที่ "}{this.props.page}{"/4"}
                    </div>
                    : null
                }
                
                </div>
            </Main>
        );
    }
}

export default Quiz;