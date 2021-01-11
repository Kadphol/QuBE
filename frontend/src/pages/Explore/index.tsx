import React from 'react';

import Music from '../../components/sound/Music'
import Progressbar from '../../components/Progressbar';
import DialogBox from '../../components/DialogBox';
import MenuMap from './MenuMap';
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
        <userContext.Consumer>
          {
            (user) => <MenuMap {...user}/>
          }
        </userContext.Consumer>
        <DialogBox />
        <Music url="https://www.mboxdrive.com/bgm.mp3"/>
      </div>
    );
  }
}

export default Explore;