import React, {PureComponent} from 'react';
import ReactPlayer from "react-player";
import VideoControls from "./video-controls";
import PropTypes from 'prop-types';

const style = {
  'zIndex': 5,
  'backgroundColor': `black`
};

class VideoPlayerMain extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.ref = this.ref.bind(this);
  }

  handlePlay() {
    this.setState(({isPlaying}) => ({isPlaying: !isPlaying}));
  }

  ref(player) {
    this.player = player;
  }

  render() {
    const {film: {preview}} = this.props;
    return (
      <div
        className="player"
        style={style}>
        <ReactPlayer
          ref={this.ref}
          playing={this.state.isPlaying}
          width='100%'
          height='100%'
          className="player__video"
          url={preview}/>
        <button type="button" className="player__exit">Exit</button>

        <VideoControls handlePlay={this.handlePlay}/>
      </div>
    );
  }
}


VideoPlayerMain.propTypes = {
  film: PropTypes.object
};


export default VideoPlayerMain;
