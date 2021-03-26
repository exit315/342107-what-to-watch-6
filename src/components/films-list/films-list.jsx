import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FILM_COUNT_PER_STEP, INITIAL_FILM_COUNT, GENRE_TYPE_ALL} from '../../utils/const';
import {filterFilmsByGenre} from '../../utils/utils';
import {getFilms, getGenre} from '../../store/films-data/selectors';
import MovieItemCard from '../movie-item-card/movie-item-card';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

const FilmsList = ({films, genre}) => {
  const [filmCount, setFilmCount] = useState(FILM_COUNT_PER_STEP);
  const handleFilmCountChange = (evt) => {
    evt.preventDefault();
    setFilmCount(filmCount + FILM_COUNT_PER_STEP);
  };

  const renderFilteredFilmsList = () => {
    switch (genre) {
      case GENRE_TYPE_ALL:
        return films;
      case genre:
        let filteredFilms = filterFilmsByGenre(films, genre);
        if (filmCount !== FILM_COUNT_PER_STEP) {
          setFilmCount(FILM_COUNT_PER_STEP);
        }
        return filteredFilms;
      default:
        return films;
    }
  };

  const curentFilms = renderFilteredFilmsList().slice(INITIAL_FILM_COUNT, filmCount);

  return (
    <>
      <div className="catalog__movies-list">
        {curentFilms.map((film) => <MovieItemCard
          key={`${film.name}-${film.id}`}
          id={film.id}
          name={film.name}
          src={film.preview_image}
          previewVideoLink={film.preview_video_link}
        />)}
      </div>

      <ShowMoreBtn handleFilmCountChange={handleFilmCountChange} filmCount={filmCount} showBtn={curentFilms.length >= filmCount}/>
    </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(FilmsList);
