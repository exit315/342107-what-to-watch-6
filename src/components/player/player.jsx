import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getRunTimeInPlayer} from '../../utils/utils';
import {getFilms} from '../../store/films-data/selectors';

const Player = ({films, match, onExitPlayerClick}) => {
  const currentFilm = films.find((el) => el.id === parseInt(match.params.id, 10));

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(``);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => {
      setVideoTime(getRunTimeInPlayer(videoRef.current.duration));
      setIsLoading(false);
      setIsPlaying(true);
    };

    videoRef.current.ontimeupdate = () => {
      setVideoTime(getRunTimeInPlayer(videoRef.current.duration - videoRef.current.currentTime));
    };

    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      videoRef.current.pause();
      videoRef.current.oncanplaythrough = null;
      videoRef.current.ontimeupdate = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
    };
  }, []);

  useEffect(() => {
    if (isPlaying && !isLoading) {
      videoRef.current.play();

      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const handleFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <div className="player">
      <video src={currentFilm.video_link} className="player__video" ref={videoRef}></video>

      <button type="button" className="player__exit" onClick={onExitPlayerClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time-value">{videoTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" disabled={isLoading} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <><svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span></> :
              <><svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span></>}
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  onExitPlayerClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(withRouter(Player));
