import React from 'react';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {getFilmReviews} from '../../store/films-data/selectors';
import {FilmReviewItemType} from '../../types/films-data-types';
import {AppStateType} from '../../store/root-reducer';

type Props = RouteComponentProps & {
  filmReviews: FilmReviewItemType[]
}

const FilmReviews:React.FC<Props> = ({filmReviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {filmReviews.map((el) => <div className="review" key={el.id}>
          <blockquote className="review__quote">
            <p className="review__text">{el.comment}</p>

            <footer className="review__details">
              <cite className="review__author">{el.user.name}</cite>
              <time className="review__date" dateTime={dayjs(el.date).format(`YYYY-MM-DD`)}>{dayjs(el.date).format(`MMMM DD, YYYY`)}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{el.rating}</div>
        </div>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  filmReviews: getFilmReviews(state),
});

export default connect(mapStateToProps, null)(withRouter(FilmReviews));
