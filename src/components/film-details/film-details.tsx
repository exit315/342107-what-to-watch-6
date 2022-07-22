import React from 'react';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import {getRunTime} from '../../utils/utils';
import {FilmItemType} from '../../types/films-data-types';

type Props = RouteComponentProps & {
  currentFilm: FilmItemType
}

const FilmDetails:React.FC<Props> = ({currentFilm}) => {
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
            <span className="movie-card__details-value">{getRunTime(currentFilm.run_time)}</span>
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

export default withRouter(FilmDetails);
