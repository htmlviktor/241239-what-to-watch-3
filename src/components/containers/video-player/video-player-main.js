import React, {PureComponent} from 'react';
import ReactPlayer from "react-player";
import VideoControls from "./video-controls";
import PropTypes from 'prop-types';
import {ActionCreator} from "../../../reducer/reducer";
import {connect} from 'react-redux';

const style = {
  'zIndex': 5,
  'backgroundColor': `black`
};

class VideoPlayerMain extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      progress: 0,
      duration: 0,
      isShowControls: true
    };

    this.onPlayClick = this.onPlayClick.bind(this);
    this.onAllScreenClick = this.onAllScreenClick.bind(this);
    this._escPress = this._escPress.bind(this);
    this.ref = this.ref.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._escPress);
    document.body.style.overflow = `hidden`;
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._escPress);
    document.body.style.overflowY = `scroll`;
  }

  _escPress(evt) {
    evt.keyCode === 27 && this._handleShowControls();
  };

  onPlayClick() {
    this._handlePlay();
  }

  onAllScreenClick() {
    this._handleHideControls();
  }

  ref(player) {
    this.player = player;
  }

  _handlePlay() {
    this.setState(({isPlaying}) => ({isPlaying: !isPlaying}));
  }

  _handleProgress(playedSeconds) {
    this.setState({progress: playedSeconds});
  }

  _handleDuration(duration) {
    this.setState({duration});
  }

  _handleHideControls() {
    this.setState({isShowControls: false});
  }

  _handleShowControls() {
    this.setState({isShowControls: true});
  }

  render() {
    const {currentFilmPlay: {preview}, onExitButtonClick, currentFilmPlay} = this.props;
    return (
      <div
        className="player"
        style={style}>
        <ReactPlayer
          onProgress={({playedSeconds}) => this._handleProgress(playedSeconds)}
          onDuration={(duration) => this._handleDuration(duration)}
          progressInterval={1000}
          ref={this.ref}
          playing={this.state.isPlaying}
          width='100%'
          height='100%'
          className="player__video"
          url={preview}/>
        {
          this.state.isShowControls && <button
            onClick={() => onExitButtonClick(currentFilmPlay)}
            type="button"
            className="player__exit">Exit</button>
        }

        {
          this.state.isShowControls && <VideoControls
            onAllScreenClick={this.onAllScreenClick}
            onPlayClick={this.onPlayClick}
            duration={this.state.duration}
            progress={this.state.progress}
            isPlaying={this.state.isPlaying}
          />
        }
      </div>
    );
  }
}


VideoPlayerMain.propTypes = {
  currentFilmPlay: PropTypes.object,
  onExitButtonClick: PropTypes.func
};

const mapStateToProps = ({currentFilmPlay}) => ({currentFilmPlay});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick: (film) => dispatch(ActionCreator.changeIsPlaying(film))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerMain);
