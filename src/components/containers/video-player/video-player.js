import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoPlayer = React.createRef();
    this._startPlay = this._startPlay.bind(this);
    this._stopPlay = this._stopPlay.bind(this);
  }


  componentDidMount() {
    this._switchVideo();
  }

  _switchVideo() {
    switch (this.props.isPlay) {
      case true:
        this._startPlay();
        break;
      case false:
        this._stopPlay();
        break;
      default: return;
    }
  }

  _startPlay() {
    this._videoPlayer.current.addEventListener(`canplay`, () => {
      this._videoPlayer.current.play();
    });
  }

  _stopPlay() {
    this._videoPlayer.current.currentTime = 0;
    this._videoPlayer.current.load();
  }

  _pausePlay() {
    this._videoPlayer.current.pause();
  }


  render() {
    const {film: {preview, img}} = this.props;
    return (
      <video
        className="player__video"
        ref={this._videoPlayer}
        muted={true}
        poster={img}
        src={preview}/>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object,
  preview: PropTypes.string,
  img: PropTypes.string,
  isPlay: PropTypes.bool
};
