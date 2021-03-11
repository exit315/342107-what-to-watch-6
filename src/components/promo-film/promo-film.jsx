import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';

const PromoFilm = (props) => {
  const {promoFilm} = props;

  // const [favorite, setFavorite] = useState(promoFilm.is_favorite);
  // const handleChangeFavorite = () => {
  //   setFavorite(!favorite);
  // };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.background_image} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.poster_image} alt={promoFilm.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  promoFilm: PropTypes.object,
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
});

export default connect(mapStateToProps, null)(PromoFilm);
