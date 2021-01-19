import React from 'react';
import styled from 'styled-components'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Main = styled.div`
  position: relative;
  width: 50%;
  margin: 15px 20px;
  height: auto;
  font-family: 'Kanit',sans-serif;
  font-size: medium;
  display: flex;
`
interface IProps {
    play: boolean;
    penalty: number;
    handleScore:(number)=>void;
}

class Quiz extends React.Component <IProps>{

    state = {
        remainingTime: 0,
        remainingScore: 0,
    };

    render() {
        return (
            <Main>
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
                            let score = 1300+(20*remainingTime!)-this.props.penalty
                            score = score<0?0:score;
                            this.props.handleScore(score)
                            this.setState({remainingTime:remainingTime,remainingScore:score})
                        }
                        return(remainingTime!.toString().concat(' วินาที'))}}
                </CountdownCircleTimer>
                <div>
                    
                <div style={{margin:'15px 20px 0px', fontSize: '40px'}}>
                {this.state.remainingScore}
                </div>
                <div style={{marginTop: '-15px',fontSize: '20px'}}>
                {"คะแนน"}
                </div>
                </div>
            </Main>
        );
    }
}

export default Quiz;