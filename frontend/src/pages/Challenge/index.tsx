import React, { Fragment } from 'react';
import Quiz from '../../components/Quiz'
import Leaderboard from '../../components/Leaderboard'
import { userContext } from '../../context/userContext';
import styled from 'styled-components'
import scene1 from '../../assets/challenge/scene2.jpg'
import scene2 from '../../assets/challenge/scene3.png'

const Wrapper = styled.div`
  margin: 50px 100px 50px;
  border: solid grey;
  height: 75vh;
  display:flex;
  position: relative;
`

const Back = styled.div`
  display:flex;
  position: absolute;
  right: 10px;
  bottom: 10px;
`

var Column = styled.div`
  flex: 50rem;
  opacity: 70%;
  position:relative;
  transition: flex 0.5s;
  overflow: hidden;
  &:hover {
    flex: 100rem;
    opacity: 100%;
  }

  #img {
    float: left;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
  #img2 {
    float: right;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
  #button {
    top: 40%;
    left: 40%;
    position: absolute;
    font-size: 40px;
  }
  #button2 {
    top: 40%;
    left: 30%;
    position: absolute;
    font-size: 40px;
  }
`


class Challenge extends React.Component {

  state = {
    select: 0
  }

  switch = (id) => {
    this.setState({select:id})
  }

  render() {
    return (
        <Wrapper>
          {this.state.select==0?
          <Fragment>
          <Column>
              <img id="img" src={scene1}/>
              <button className="btn btn-primary" id="button"  onClick={()=>this.switch(1)}>เริ่มท้าทาย</button>
          </Column>
          <Column>
            <img id="img2" src={scene2}/>
              <button className="btn btn-primary" id="button2" onClick={()=>this.switch(2)}>อันดับคะแนน</button>
          </Column>
          </Fragment>
          :
          this.state.select==1
          ? <Quiz/>
          : <userContext.Consumer>
              {user=><Leaderboard {...user}/>}
            </userContext.Consumer>
          }
          <Back>
          {this.state.select!==0
          ?<button className="btn btn-primary" onClick={()=>this.switch(0)}>Back</button>
          :null
          }
          </Back>
        </Wrapper>
    );
  }
}

export default Challenge;