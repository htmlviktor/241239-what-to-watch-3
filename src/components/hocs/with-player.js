import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
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
      if (this._videoPlayer.current) {
        this._videoPlayer.current.addEventListener(`canplay`, () => {
          this._videoPlayer.current.play();
        });
      }
    }

    _stopPlay() {
      this._videoPlayer.current.currentTime = 0;
      this._videoPlayer.current.load();
    }

    _pausePlay() {
      this._videoPlayer.current.pause();
    }

    render() {
      return <Component
        {...this.props}
        refs={this._videoPlayer}
        onStartPlay={this._startPlay}
        onStopPlay={this._stopPlay}
        onPausePlay={this._pausePlay}
      />;
    }
  };

  WithPlayer.propTypes = {
    isPlay: PropTypes.bool
  };

  return WithPlayer;
};

export default withPlayer;
