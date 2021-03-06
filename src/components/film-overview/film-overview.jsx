import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {getTextRating} from '../../utils/utils';

const FilmOverview = ({currentFilm}) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{currentFilm.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextRating(currentFilm.rating.toFixed(1))}</span>
          <span className="movie-rating__count">{currentFilm.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {currentFilm.description}
        <p className="movie-card__director"><strong>Director: {currentFilm.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {currentFilm.starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  currentFilm: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(FilmOverview);
