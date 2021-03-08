import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FILMS_LIKE_THIS = 4;
const FilmsLikeThis = (props) => {
  const {films, currentFilm} = props;

  const filmsList = films.filter((el) => {
    if (el.name === currentFilm.name) {
      return null;
    } else {
      return el.genre === currentFilm.genre;
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
            src={film.preview_image}
          />) :
          filmsList.splice(FILMS_LIKE_THIS).map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.preview_image}
          />)
        }
      </div>
    </section>
  );
};

FilmsLikeThis.propTypes = {
  films: PropTypes.array.isRequired,
  currentFilm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

export {FilmsLikeThis};
export default connect(mapStateToProps, null)(FilmsLikeThis);
