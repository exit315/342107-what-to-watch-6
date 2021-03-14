import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {changeFavorite} from "../../api/api-actions";
import Header from '../header/header';

const PromoFilm = (props) => {
  const {promoFilm, onFavoriteClick} = props;

  const handleFavoriteClick = () => {
    onFavoriteClick({
      id: promoFilm.id,
      status: +(!promoFilm.is_favorite),
    });
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.background_image} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header isUserBlockShown={true}/>

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
              <Link to={`/player/${promoFilm.id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick}>
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
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(changeFavorite(id, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);
