import React,{ useState } from 'react';
import soundon from '../../assets/sound/soundOn.png';
import soundoff from '../../assets/sound/soundOff.png';
import './Music.scoped.css'
const sfxClick = require('../../assets/sound/sfx_click.mp3').default

class Music extends React.Component <{url:string}> {
  state = {
    play: true
  }
  audio = new Audio(this.props.url)
  click = new Audio(sfxClick)

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: true }));
    this.audio.volume = 0.4
    this.audio.loop = true
    this.audio.play()
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    this.audio.pause()
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.play?soundon:soundoff} 
          style={{
            width: '50px',
            position: 'absolute',
            right: '20px',
            bottom: '15px',
            cursor: 'pointer'}}
          onMouseDown={()=>this.click.play()}
          onClick={this.togglePlay} />
      </div>
    );
  }
}

export default Music;