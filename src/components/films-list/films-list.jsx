import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterFilmsByGenre} from '../../utils/utils';
import {GenreType} from '../../utils/const';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FilmsList = (props) => {
  const {films, genre} = props;

  const renderFilteredFilmsList = () => {
    switch (genre) {
      case GenreType.ALL:
        return films;
      case genre:
        let filteredFilms = filterFilmsByGenre(films, genre);
        return filteredFilms;
      default:
        return films;
    }
  };

  const curentFilms = renderFilteredFilmsList();

  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__movies-list">
      {curentFilms.map((film) => <MovieItemCard
        key={`${film.name}-${film.id}`}
        id={film.id}
        name={film.name}
        src={film.preview_image}
        previewVideoLink={film.preview_video_link}
        handleActiveCardChange={handleActiveCardChange}
        activeCard={activeCard}
        genre={genre}
      />)}
    </div>
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
