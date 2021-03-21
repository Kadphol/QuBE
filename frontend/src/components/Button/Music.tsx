import React from 'react';
import soundon from '../../assets/sound/soundOn.png';
import soundoff from '../../assets/sound/soundOff.png';

class Music extends React.Component<{ url: string }>{

  state = {
    play: false
  }
  audio = new Audio(this.props.url);

  componentDidMount() {
    this.setState({ play: true })
    this.audio.volume = 0.15
    this.audio.play()
  }

  componentWillUnmount() {
    this.setState({ play: false })
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
        <img style={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
        }} src={this.state.play ? soundon : soundoff} onClick={this.togglePlay} alt="Music" />
      </div>
    );
  }
}

export default Music;