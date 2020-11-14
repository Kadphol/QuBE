import React from 'react';
import intro from '../../assets/intro.png';
import Music from '../../components/sound/Music'

class Explore extends React.Component {
  render() {
    return (
      <div>
        <img src={intro} alt="intro"/>
        <Music url="https://www.mboxdrive.com/bgm.mp3"/>
      </div>
    );
  }
}

export default Explore;