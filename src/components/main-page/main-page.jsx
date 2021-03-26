import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPromoFilm} from "../../api/api-actions";
import {getFilms, getGenre, getIsPromoFilmDataLoaded} from '../../store/films-data/selectors';
import PromoFilm from '../promo-film/promo-film';
import GenreTabs from '../genre-tabs/genre-tabs';
import Footer from '../footer/footer';
import FilmsList from '../films-list/films-list';
import LoadingScreen from '../loading-screen/loading-screen';

const MainPage = ({films, genre, onLoadPromoFilmData, isPromoFilmDataLoaded}) => {
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
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onLoadPromoFilmData: PropTypes.func.isRequired,
  isPromoFilmDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
  isPromoFilmDataLoaded: getIsPromoFilmDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromoFilmData() {
    dispatch(fetchPromoFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
