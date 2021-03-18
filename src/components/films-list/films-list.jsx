import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterFilmsByGenre} from '../../utils/utils';
import {GenreType} from '../../utils/const';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {FILM_COUNT_PER_STEP, INITIAL_FILM_COUNT} from '../../utils/const';

const FilmsList = (props) => {
  const {films, genre} = props;

  const [filmCount, setFilmCount] = useState(FILM_COUNT_PER_STEP);
  const handleFilmCountChange = (evt) => {
    evt.preventDefault();
    setFilmCount(filmCount + FILM_COUNT_PER_STEP);
  };

  const renderFilteredFilmsList = () => {
    switch (genre) {
      case GenreType.ALL:
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

  const curentFilms = renderFilteredFilmsList();

  return (
    <>
      <div className="catalog__movies-list">
        {curentFilms.map((film) => <MovieItemCard
          key={`${film.name}-${film.id}`}
          id={film.id}
          name={film.name}
          src={film.preview_image}
          previewVideoLink={film.preview_video_link}
          genre={genre}
        />).splice(INITIAL_FILM_COUNT, filmCount)}
      </div>

      <ShowMoreBtn handleFilmCountChange={handleFilmCountChange} filmCount={filmCount} showBtn={curentFilms.length >= filmCount}/>
    </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array,
  genre: PropTypes.string,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);
