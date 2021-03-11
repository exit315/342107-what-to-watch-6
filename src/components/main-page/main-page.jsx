import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPromoFilm} from "../../api/api-actions";
import PromoFilm from '../promo-film/promo-film';
import GenreTabs from '../genre-tabs/genre-tabs';
import Footer from '../footer/footer';
import FilmsList from '../films-list/films-list';
import LoadingScreen from '../loading-screen/loading-screen';

const MainPage = (props) => {
  const {promoFilm, films, genre, onLoadPromoFilmData, isPromoFilmDataLoaded} = props;

  useEffect(() => {
    if (!isPromoFilmDataLoaded) {
      onLoadPromoFilmData();
    }
  }, [isPromoFilmDataLoaded]);

  if (!isPromoFilmDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div>
      <PromoFilm />

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
  films: PropTypes.array,
  genre: PropTypes.string,
  onLoadPromoFilmData: PropTypes.func,
  isPromoFilmDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre,
  isPromoFilmDataLoaded: state.isPromoFilmDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromoFilmData() {
    dispatch(fetchPromoFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
