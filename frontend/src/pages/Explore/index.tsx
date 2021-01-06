import React from 'react';
import intro from '../../assets/intro.png';
import Music from '../../components/sound/Music'
import Progressbar from '../../components/Progressbar';
// import DialogBox from '../../components/DialogBox';
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
        <img src={intro} alt="intro"/>
        {/* <DialogBox /> */}
        <Music url="https://www.mboxdrive.com/bgm.mp3"/>
      </div>
    );
  }
}

export default Explore;