import React from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = (props) => {
  const {film: {preview, img}, refs} = props;
  return (
    <video
      className="player__video"
      ref={refs}
      muted={true}
      poster={img}
      src={preview}/>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  film: PropTypes.object,
  preview: PropTypes.string,
  img: PropTypes.string,
  isPlay: PropTypes.bool,
  refs: PropTypes.object
};
