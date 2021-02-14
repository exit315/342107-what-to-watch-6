import React from 'react';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';

const FilmsList = (props) => {
const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieItemCard 
        key={`${film.name}-${film.id}`}
        id={film.id}
        name={film.name}
        src={film.preview_image}
      />)}
    </div>
  );
};

export default FilmsList;
