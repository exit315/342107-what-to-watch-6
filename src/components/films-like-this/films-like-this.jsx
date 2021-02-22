import React from 'react';
import PropTypes from 'prop-types';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FILMS_LIKE_THIS = 4;
const FilmsLikeThis = (props) => {
  const {films, currentFilm} = props;

  const filmsList = films.filter((el) => {
    if (el.name === currentFilm.name) {
      return null;
    } else {
      return el.genre === currentFilm.genre;;
    }
  });
  
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {filmsList.length <= FILMS_LIKE_THIS ?
          filmsList.map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.previewImage}
          />) :
          filmsList.splice(4).map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.previewImage}
          />)
        }
      </div>
    </section>
  );
};

FilmsLikeThis.propTypes = {
  films: PropTypes.array
};

export default FilmsLikeThis;
