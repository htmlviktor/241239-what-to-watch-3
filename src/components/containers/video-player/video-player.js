import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from "react-player";

const VideoPlayerPreview = ({preview}) => {
  return <ReactPlayer width='100%'
    height='100%'
    className="player__video"
    url={preview}
    playing
    muted/>;
};

VideoPlayerPreview.propTypes = {
  preview: PropTypes.string.isRequired
};

export default VideoPlayerPreview;
