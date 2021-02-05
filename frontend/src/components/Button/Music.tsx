import React from 'react';
import soundon from '../../assets/sound/soundOn.png';
import soundoff from '../../assets/sound/soundOff.png';
import './Music.scoped.css'

class Music extends React.Component <{url:string}>{

    state = {
      play: false
    }
    audio = new Audio(this.props.url);
  
    componentDidMount() {
        this.setState({ play: true })
        this.audio.volume = 0.25
        this.audio.play()
    }
  
    componentWillUnmount() {
        this.setState({ play: false})
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
          <img className="Button" src={this.state.play ? soundon : soundoff} onClick={this.togglePlay} alt="Music"/>
        </div>
      );
    }
  }
  
  export default Music;