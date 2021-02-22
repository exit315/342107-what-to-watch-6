import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const FilmDetails = (props) => {
  const {currentFilm} = props;

  return (
    <React.Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{currentFilm.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {currentFilm.starring.join(`, `)}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{currentFilm.runtime}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{currentFilm.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{currentFilm.released}</span>
            </p>
          </div>
        </div>

    </React.Fragment>
  );
};

FilmDetails.propTypes = {
  currentFilm: PropTypes.object.isRequired
};

export default withRouter(FilmDetails);
