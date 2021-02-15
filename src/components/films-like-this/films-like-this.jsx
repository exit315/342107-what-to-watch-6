import React from 'react';
import PropTypes from 'prop-types';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FilmsLikeThis = (props) => {
  const {films} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {films.map((film) => <MovieItemCard
          key={`${film.name}-${film.id}`}
          id={film.id}
          name={film.name}
          link={`films/${film.id}`}
          posterImage={film.poster_image}
          previewImage={film.preview_image}
          backgroundImage={film.background_image}
        />)}
      </div>
    </section>
  );
};

FilmsLikeThis.propTypes = {
  films: PropTypes.array
};

export default FilmsLikeThis;
