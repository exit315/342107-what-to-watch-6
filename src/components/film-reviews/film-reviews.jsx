import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import dayjs from 'dayjs';
import {getFilmReviews} from '../../store/films-data/selectors';

const FilmReviews = (props) => {
  const {filmReviews} = props;

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

FilmReviews.propTypes = {
  filmReviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filmReviews: getFilmReviews(state),
});

export {FilmReviews};
export default connect(mapStateToProps, null)(withRouter(FilmReviews));
