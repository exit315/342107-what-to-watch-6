import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const MovieItemCard = (props) => {
  const {id, name, src} = props;
  const [activeCard, setActiveCard] = useState(0);

  const handleFilmFocus = (() => {});

  return (
    <article className="small-movie-card catalog__movies-card" id={id} key={`${name}-${id}`} onMouseOver={handleFilmFocus}>
      <div className="small-movie-card__image">
        <img src={src} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

export default MovieItemCard;
