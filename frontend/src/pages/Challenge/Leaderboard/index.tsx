import React from 'react';
import styled from 'styled-components';
import instance from '@config/axiosconfig';
import Person from './person';
import { Iuser } from '@/type.modal';
import { ReactComponent as Qubie } from '@svg/Qubie-intro.svg';
import { ReactComponent as Beck } from '@svg/Beck.svg';
import scene from '@assets/challenge/leaderboard.png';
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
background-color: beige;
width: 50%;
height: 95%;
margin: auto;
margin-top: 10px;
border: solid black;
`

const Filter = styled.div`
width: 500px;
height: 10%;
margin: 10px auto;
padding: 7.5px;
position: relative;

button {
  float: left;
  margin-left: 10px;
}

button:disabled {
  font-family: 'Kanit',sans-serif;
  font-size: medium;
  background-color: #8B90E3;
  border-color: #A29BFE;
  color: white;
}
`

const Character = styled.div`
  * {
  position: absolute;
    height: 250px;
    width: 250px;
    bottom: 120px;
  }
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

class Leaderboard extends React.Component<{user:Iuser}, IState> {

  state = {
    global: true,
    data: [{} as IPerson],
    facebookData: [{} as IPerson],
    self: {} as IPerson,
    facebookSelf: {} as IPerson,
    back: false
  };

  click = new Audio(sfxClick);

  switch = (global) => this.setState({ global: global }) ;

  componentDidMount = () => {
    instance.get('http://localhost/getuser')
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
        <Board>
          <Filter>
            <button className="btn btn-primary" disabled={this.state.global} 
            onMouseDown={()=>this.click.play()}
            onClick={()=>this.switch(true)}>ทั้งหมด</button>
            {this.props.user.type==='Facebook' &&
            <button className="btn btn-primary" disabled={!this.state.global} 
            onMouseDown={()=>this.click.play()}
            onClick={()=>this.switch(false)}>เพื่อน</button>}
          </Filter>
          {this.state.global
            ? <Person data={this.state.data} self={this.state.self} />
            : <Person data={this.state.facebookData} self={this.state.facebookSelf} />
          }
        </Board>
        <Character>
          <Qubie style={{ left: "0" }} className="svg-qubie-intro" />
          <Beck style={{ right: "20px" }} className="svg-qubie-intro" />
        </Character>
        <Back path="/challenge"/>
      </Main>
    );
  }
}

export default Leaderboard;