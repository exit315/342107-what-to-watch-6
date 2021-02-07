import React from 'react';
import PropTypes from 'prop-types';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const LIKELY_MOVIE_CARDS_COUNT = 4;

const FilmsLikeThis = (props) => {
  const {movieName, movieId} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {new Array(LIKELY_MOVIE_CARDS_COUNT).fill(<MovieItemCard key={movieId} movieName={movieName}/>)}
      </div>
    </section>
  );
};

FilmsLikeThis.propTypes = {
  movieName: PropTypes.string,
  movieId: PropTypes.number
};

export default FilmsLikeThis;
