import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FILMS_LIKE_THIS} from '../../utils/const';
import {getFilms, getGenre} from '../../store/films-data/selectors';
import MovieItemCard from '../movie-item-card/movie-item-card';

const FilmsLikeThis = ({films, currentFilm}) => {
  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

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
            previewVideoLink={film.preview_video_link}
            handleActiveCardChange={handleActiveCardChange}
            activeCard={activeCard}
          />) :
          filmsList.slice(0, FILMS_LIKE_THIS).map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.preview_image}
            previewVideoLink={film.preview_video_link}
            handleActiveCardChange={handleActiveCardChange}
            activeCard={activeCard}
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
  genre: getGenre(state),
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(FilmsLikeThis);
