import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import VideoPlayer from '../preview-player/preview-player';

const MovieItemCard = ({id, name, src, previewVideoLink}) => {
  const videoPlayerRef = useRef();

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let timer = null;

    videoPlayerRef.current.onmouseenter = (evt) => {
      timer = setTimeout(() => {
        if (isMounted) {
          setActiveCard(id);
        }
      }, 1000, evt.currentTarget.id);
    };

    videoPlayerRef.current.onmouseleave = () => {
      clearTimeout(timer);
      setActiveCard(null);
    };

    return () => {
      isMounted = false;
      timer = null;
      videoPlayerRef.current.onmouseenter = null;
      videoPlayerRef.current.onmouseleave = null;
    };
  }, []);

  return (
    <article className="small-movie-card catalog__movies-card"
      id={id}
      key={`${name}-${id}`}
      ref={videoPlayerRef}>
      <div className="small-movie-card__image">
        {parseInt(activeCard, 10) === id ?
          <VideoPlayer previewVideoLink={previewVideoLink} defaultIsPlaying={true} defaultIsMuted={false}/> :
          <img src={src} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieItemCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default MovieItemCard;
