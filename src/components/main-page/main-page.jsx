import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import GenreTabs from '../genre-tabs/genre-tabs';
import Footer from '../footer/footer';
import FilmsList from '../films-list/films-list';

const MainPage = (props) => {
  const {promoFilm, films, genre} = props;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.background_image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
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
                <button className="btn btn--list movie-card__button" type="button">
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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs />

          <FilmsList
            films={films} genre={genre}
          />
        </section>

        <Footer />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  promoFilm: PropTypes.object,
  films: PropTypes.array,
  genre: PropTypes.string,
  userEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  genre: state.genre,
  userEmail: state.userEmail
});

export default connect(mapStateToProps, null)(MainPage);
