import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FilmsList = (props) => {
  const {films} = props;

  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieItemCard
        key={`${film.name}-${film.id}`}
        id={film.id}
        name={film.name}
        src={film.previewImage}
        previewVideoLink={film.previewVideoLink}
        handleActiveCardChange={handleActiveCardChange}
        activeCard={activeCard}
      />)}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array
};

export default FilmsList;
