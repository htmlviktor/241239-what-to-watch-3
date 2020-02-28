import React from 'react';

const VideoControls = ({handlePlay}) => {
  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100" />
          <div className="player__toggler" style={{
            left: `30%`
          }}>Toggler</div>
        </div>
        <div className="player__time-value">1:30:29</div>
      </div>

      <div className="player__controls-row">
        <button
          onClick={handlePlay}
          type="button"
          className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </button>
      </div>
      <div onClick={handlePlay} className="player__name">Transpotting</div>

      <button type="button" className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen" />
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  );
};

export default VideoControls;
