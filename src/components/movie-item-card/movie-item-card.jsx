import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

const MovieItemCard = (props) => {
  const {id, name, src, handleActiveCardChange, previewVideoLink, activeCard} = props;

  const onFilmHover = (e) => {
    setTimeout(handleActiveCardChange, 1000, e.currentTarget.id);
  };

  const onFilmUnhover = () => {
    handleActiveCardChange(null);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      id={id}
      key={`${name}-${id}`}
      onMouseEnter={onFilmHover}
      onMouseLeave={onFilmUnhover}>
      <div className="small-movie-card__image">
        {parseInt(activeCard, 10) === id ?
          <VideoPlayer previewVideoLink={previewVideoLink} defaultIsPlaying={true} defaultIsMuted={true}/> :
          <img src={src} alt={name} width="280" height="175"/>}
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
  id: PropTypes.number,
  handleActiveCardChange: PropTypes.func,
  previewVideoLink: PropTypes.string,
  activeCard: PropTypes.string
};

export default MovieItemCard;
