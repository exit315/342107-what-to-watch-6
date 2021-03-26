import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreBtn = ({handleFilmCountChange, showBtn}) => {
  if (!showBtn) {
    return false;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleFilmCountChange}>Show more</button>
    </div>
  );
};

ShowMoreBtn.propTypes = {
  handleFilmCountChange: PropTypes.func.isRequired,
  showBtn: PropTypes.bool.isRequired,
};

export default ShowMoreBtn;
