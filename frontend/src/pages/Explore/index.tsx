import React from 'react';
import { Stage, Container, Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import Music from '../../components/sound/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import './Explore.css';
import { userContext } from '../../context/userContext';

import map from '../../assets/explore/map1.png';



class Explore extends React.Component {

  render() {
    return (
      <div className="explore">
        <userContext.Consumer>
          {
            (user) => <Progressbar {...user}/>
          }
        </userContext.Consumer>
        <Stage options={{ height: 720, width: 1240 , backgroundColor: 0x52DB89}}>
          <Container>
            <Sprite texture={PIXI.Texture.from(map)} {...this.props} />
          </Container>
        </Stage>
        <DialogBox />
        <Music url="https://www.mboxdrive.com/bgm.mp3"/>
      </div>
    );
  }
}

export default Explore;