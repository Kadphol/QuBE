import React, { Fragment } from 'react';
import styled from 'styled-components'
import { userContext } from '../../context/userContext';
import instance from '../../axiosconfig'
import { Row } from 'react-bootstrap';
import Person from './person'
import { Iuser } from '../../type.modal'
import { ReactComponent as Qubie } from '../../svg/Qubie-intro.svg';
import { ReactComponent as Beg } from '../../svg/Beg.svg';

const Main = styled.div`
width: 100%;
height: 100%;
margin: auto;
padding: 10px;
position: relative;
`

const Board = styled.div`
width: 50%;
height: 95%;
margin: auto;
margin-top: 10px;
border: solid violet;
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

interface IState {
  global?: boolean,
  data?: {
    index: number;
    name: string;
    image: string;
    score: number;
  }[];
  facebookData?: {
    index: number;
    name: string;
    image: string;
    score: number;
  }[];
  self?: {
    index: number;
    name: string;
    image: string;
    score: number;
  }
}

class Leaderboard extends React.Component<Iuser, IState> {

  state = {
    global: true,
    data: [{
      index: 0,
      name: '',
      image: '',
      score: 0
    }],
    facebookData: [{
      index: 0,
      name: '',
      image: '',
      score: 0
    }],
    self: {
      index: 0,
      name: '',
      image: '',
      score: 0
    },
  };

  constructor(props) {
    super(props)
  }

  switch = () => { this.setState({ global: !this.state.global }) }

  componentDidMount = () => {
    instance.get('http://localhost/getuser')
      .then(res => {
        let sorted = res.data.sort((a, b) => (a.info.highscore > b.info.highscore) ? -1 : ((b.info.highscore > a.info.highscore) ? 1 : 0));
        let docs = Array()
        let facebookDocs = Array()
        sorted.forEach((person, index) => {
          let doc = {
            index: index + 1,
            name: person.name,
            image: person.image,
            score: person.info.highscore
          }
          docs.push(doc)
        })
        let self = docs.find(person => person.name === this.props.name)!
        this.setState({ data: docs, self: self })
        // let facebookSorted = sorted.filter(FB)
        // facebookSorted.forEach((person, index)=>{
        //   let facebookDoc = {
        //     index: index + 1,
        //     name: person.name,
        //     image: person.image,
        //     score: person.info.highscore
        //   }
        //   facebookDocs.push(facebookDoc)
        // })
        facebookDocs.push(self) // dummy
        this.setState({ data: docs, facebookData: facebookDocs, self: self })
      })
  }

  render() {
    return (
      <Main>
        <Board>
          
          <Filter>
          <button className="btn btn-primary" disabled={this.state.global} onClick={this.switch}>Global</button>
          <button className="btn btn-primary" disabled={!this.state.global} onClick={this.switch}>Friend</button>
        </Filter>
        {this.state.global
          ? <Person data={this.state.data} self={this.state.self} />
          : <Person data={this.state.facebookData} self={this.state.self} />
        }
        </Board>
        <Character>
          <Qubie style={{ left:"0" }} className="svg-qubie"/>
          <Beg style={{ right:"20px" }} className="svg-qubie"/>
        </Character>
      </Main>
    );
  }
}

export default Leaderboard;