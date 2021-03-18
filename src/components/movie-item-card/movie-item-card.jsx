import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../preview-player/preview-player';
import {AppRoute} from '../../utils/const';

const MovieItemCard = (props) => {
  const {id, name, src, previewVideoLink} = props;
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
          <VideoPlayer previewVideoLink={previewVideoLink} defaultIsPlaying={true} defaultIsMuted={true}/> :
          <img src={src} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">{name}</Link>
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
