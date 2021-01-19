import React, { Fragment } from 'react';
import Quiz from '../../components/Quiz'
import Leaderboard from '../../components/Leaderboard'
import { userContext } from '../../context/userContext';
import styled from 'styled-components'
import scene1 from '../../assets/challenge/scene1.jpg'
import scene2 from '../../assets/challenge/scene2.png'

const Wrapper = styled.div`
  margin: 50px 100px 50px;
  border: solid grey;
  height: 720px;
  width: 1240px;
  margin: auto;
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
  height: 100%;
  width: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid violet;

  &:hover {
    flex: 100rem;
    opacity: 100%;
  }

  button {
    left: 50%;
    top: 50%;
    position: absolute;
    font-size: 40px;
    transform: translate(-50%,-50%);
  }
`

const Column1 = styled(Column)`
  background-image: url(${scene1});
  float: left;
`

const Column2 = styled(Column)`
  background-image: url(${scene2});
  float: right;
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
<<<<<<< HEAD
          <Column1>
              <button className="btn btn-primary" onClick={()=>this.switch(1)}>เริ่มท้าทาย</button>
          </Column1>
          <Column2>
              <button className="btn btn-primary" onClick={()=>this.switch(2)}>อันดับคะแนน</button>
          </Column2>
=======
          <Column>
              <img id="img" src={scene1}/>
              <button className="btn btn-primary" id="button"  onClick={()=>this.switch(1)}>เริ่มท้าทาย</button>
          </Column>
          <Column>
            <img id="img2" src={scene2}/>
              <button className="btn btn-primary" id="button2" onClick={()=>this.switch(2)}>อันดับคะแนน</button>
          </Column>
>>>>>>> a5e4fe3194b0e24b226f6b82957107016eb789ba
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