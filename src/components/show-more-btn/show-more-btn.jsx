import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreBtn = (props) => {
  const {handleFilmCountChange, filmCount} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleFilmCountChange}>Show more</button>
    </div>
  );
};

// ShowMoreBtn.propTypes = {
//   previewVideoLink: PropTypes.string.isRequired,
//   defaultIsPlaying: PropTypes.bool.isRequired,
//   defaultIsMuted: PropTypes.bool.isRequired,
// };

export default ShowMoreBtn;
