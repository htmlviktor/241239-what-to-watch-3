import React from 'react';


const VideoControls = (props) => {
  const {onPlayClick, isPlaying, progress, duration, onAllScreenClick} = props;
  const progressValue = progress * duration / 100;
  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress
            onClick={(e) => {
              console.log(e.target.parentNode.getBoundingClientRect());
              console.log(e.target.getBoundingClientRect());
            }}
            className="player__progress"
            value={progressValue} max="100" />
          <div
            className="player__toggler" style={{
              left: `${progressValue}%`
            }}>Toggler</div>
        </div>
        <div className="player__time-value">{duration}</div>
      </div>

      <div className="player__controls-row">
        <button
          onClick={onPlayClick}
          type="button"
          className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
          </svg>
          <span>Play</span>
        </button>
      </div>
      <div className="player__name">Transpotting</div>

      <button
        onClick={onAllScreenClick}
        type="button"
        className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen" />
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  );
};

export default VideoControls;
