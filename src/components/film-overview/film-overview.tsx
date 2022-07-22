import React from 'react';
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom';
import {getTextRating} from '../../utils/utils';
import {FilmItemType} from '../../types/films-data-types';

type Props = RouteComponentProps & {
  currentFilm: FilmItemType
}

const FilmOverview:React.FC<Props> = ({currentFilm}) => {
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

export default withRouter(FilmOverview);
