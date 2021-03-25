import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import AddToFavoriteBtn from '../add-to-favorite-btn/add-to-favorite-btn';
import {getPromoFilm} from '../../store/films-data/selectors';

const PromoFilm = ({promoFilm}) => {
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

              <AddToFavoriteBtn currentFilm={promoFilm}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

export default connect(mapStateToProps, null)(PromoFilm);
