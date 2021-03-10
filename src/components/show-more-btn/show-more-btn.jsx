import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreBtn = (props) => {
  const {handleFilmCountChange} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleFilmCountChange}>Show more</button>
    </div>
  );
};

ShowMoreBtn.propTypes = {
  handleFilmCountChange: PropTypes.func.isRequired,
};

export default ShowMoreBtn;
