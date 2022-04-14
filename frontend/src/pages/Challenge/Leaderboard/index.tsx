import React from 'react';
import axios from '@config/axiosconfig';
import Person from './person';
import { Iuser } from '@src/type.modal';
import Qubie from '@assets/explore/Qubie.png'
import beck from '@assets/explore/chapter1/Beck.png'
import styled, { keyframes } from 'styled-components';
import scene from '@assets/challenge/leaderboard.png';
import board1 from '@assets/challenge/Board-all.png';
import board2 from '@assets/challenge/Board-facebook.png';
import Back from '@components/Button/back';

const sfxClick = require('@assets/sound/sfx_click.mp3').default;

const Main = styled.div`
background-image: url(${scene});
background-size: cover;
width: 100%;
height: 100%;
margin: auto;
padding: 10px;
position: relative;
`

const Board = styled.div`
background: url(${board1});
width: 50%;
height: 95%;
margin: auto;
margin-top: 10px;
border-radius: 20px;
`

const Filter = styled.div`
width: 500px;
height: 10%;
margin-left: -30px;
padding-top: 10px;
position: relative;

.button {
  float: left;
  margin-left: 50px;
  width: 100px;
  font-family: Kanit;
  font-style: normal;
  font-size: 20px;
  line-height: 40px;
  color: black;
  cursor: pointer;
}
`
const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

interface IPerson {
  index: number;
  name: string;
  image: string;
  score: number;
}

interface IState {
  global?: boolean,
  data?: IPerson[];
  facebookData?: IPerson[];
  self?: IPerson;
  facebookSelf?: IPerson;
  back: boolean
}

class Leaderboard extends React.Component<{ user: Iuser }, IState> {

  state = {
    global: true,
    data: [{} as IPerson],
    facebookData: [{} as IPerson],
    self: {} as IPerson,
    facebookSelf: {} as IPerson,
    back: false
  };

  click = new Audio(sfxClick);

  switch = (global) => this.setState({ global: global });

  componentDidMount = () => {
    axios.get('/getuser')
      .then(res => {
        let sorted = res.data.sort((a, b) => (a.info.highscore > b.info.highscore) ? -1 : ((b.info.highscore > a.info.highscore) ? 1 : 0));
        let docs = Array();
        let facebookDocs = Array();
        sorted.forEach((person, index) => {
          let doc = {
            index: index + 1,
            name: person.name,
            image: person.image,
            score: person.info.highscore
          }
          docs.push(doc)
        })
        let self = docs.find(person => person.name === this.props.user.name)!
        this.setState({ data: docs, self: self })

        const FB = (person) => person.type === 'Facebook'
        let facebookSorted = sorted.filter(FB)
        facebookSorted.forEach((person, index) => {
          let facebookDoc = {
            index: index + 1,
            name: person.name,
            image: person.image,
            score: person.info.highscore
          }
          facebookDocs.push(facebookDoc)
        })
        let facebookSelf = facebookDocs.find(person => person.name === this.props.user.name)!
        this.setState({ facebookData: facebookDocs, facebookSelf: facebookSelf })
      })
  }

  render() {
    return (
      <Main>
        <Board style={{ background: `url(${this.state.global ? board1 : board2})` }}>
          <Filter>
            <div className="button"
              onMouseDown={() => this.click.play()}
              onClick={() => this.switch(true)}>ทั้งหมด</div>
            {this.props.user.type === 'Facebook' &&
              <div className="button"
                onMouseDown={() => this.click.play()}
                onClick={() => this.switch(false)}>Facebook</div>}
          </Filter>
          {this.state.global
            ? <Person data={this.state.data} self={this.state.self} />
            : <Person data={this.state.facebookData} self={this.state.facebookSelf} />
          }
        </Board>
          <Fly>
            <img src={Qubie} style={{ position: 'absolute', bottom:'50px', left: '15px', height: '280px' }} alt="Qubie"/>
            <img src={beck} style={{ position: 'absolute', bottom:'50px', right: '15px', height: '280px' }} alt="Beck"/>
          </Fly>
        <Back path="/challenge" />
      </Main>
    );
  }
}

export default Leaderboard;