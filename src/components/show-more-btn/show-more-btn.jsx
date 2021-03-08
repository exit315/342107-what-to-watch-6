import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const ShowMoreBtn = () => {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
};

// ShowMoreBtn.propTypes = {
//   previewVideoLink: PropTypes.string.isRequired,
//   defaultIsPlaying: PropTypes.bool.isRequired,
//   defaultIsMuted: PropTypes.bool.isRequired,
// };

export default ShowMoreBtn;
