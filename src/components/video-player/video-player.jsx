import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({previewVideoLink, defaultIsPlaying, defaultIsMuted}) => {

  return (
    <Fragment>
      <video src={previewVideoLink} width="280" height="175" muted={defaultIsMuted} autoPlay={defaultIsPlaying}></video>
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  defaultIsPlaying: PropTypes.bool.isRequired,
  defaultIsMuted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
