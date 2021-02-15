import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieItemCard = (props) => {
  const {id, name, src, handleActiveCardChange} = props;

  const onFilmHover = (e) => {
    handleActiveCardChange(e.currentTarget.id);
  }

  return (
    <article className="small-movie-card catalog__movies-card" id={id} key={`${name}-${id}`} onMouseEnter={onFilmHover}>
      <div className="small-movie-card__image">
        <img src={src} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieItemCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number
};

export default MovieItemCard;
