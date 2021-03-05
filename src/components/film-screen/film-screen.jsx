import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter, Redirect} from 'react-router-dom';
import {TabType} from '../../utils/const.js';
import Header from '../header/header';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmsLikeThis from '../films-like-this/films-like-this';

const FilmScreen = (props) => {
  const {films, match} = props;
  const currentFilm = films.find((el) => el.id === parseInt(match.params.id, 10));

  const [activeTab, setActiveTab] = useState(TabType.OVERVIEW);

  const changeTabHandler = (tab) => {
    setActiveTab(tab);
  };

  const changeScreenHandler = (tab) => {
    switch (tab) {
      case TabType.OVERVIEW:
        return (
          <FilmOverview
            currentFilm={currentFilm}
          />
        );
      case TabType.DETAILS:
        return (
          <FilmDetails
            currentFilm={currentFilm}
          />
        );
      case TabType.REVIEWS:
        return (
          <FilmReviews
            currentFilm={currentFilm}
          />
        );
    }
    return <Redirect to="/" />;
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.background_image} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
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
                <Link to={`${currentFilm.id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs changeTabHandler={changeTabHandler} activeTab={activeTab}/>

              {changeScreenHandler(activeTab)}
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmsLikeThis films={films} currentFilm={currentFilm} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  films: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {FilmScreen};
export default connect(mapStateToProps, null)(withRouter(FilmScreen));
