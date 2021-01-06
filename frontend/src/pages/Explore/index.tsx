import React from 'react';
import { Stage } from 'react-pixi-fiber';

import intro from '../../assets/intro.png';
import Music from '../../components/sound/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import './Explore.css';
import { userContext } from '../../context/userContext';



class Explore extends React.Component {

  render() {
    return (
      <div className="explore">
        <userContext.Consumer>
          {
            (user) => <Progressbar {...user}/>
          }
        </userContext.Consumer>
        {/*<img src={intro} alt="intro"/>*/}
        <Stage options={{ height: 720, width: 1240 , transparent: true}}>
          <DialogBox />
        </Stage>
        <Music url="https://www.mboxdrive.com/bgm.mp3"/>
      </div>
    );
  }
}

export default Explore;