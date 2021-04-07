import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchFavorite} from "../../api/api-actions";
import {getMyFilmsList} from '../../store/films-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import MovieItemCard from '../movie-item-card/movie-item-card';
import Header from '../header/header';
import Footer from '../footer/footer';

const MyList = ({myFilmsList, onLoadMyFilmsListData}) => {
  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  const [isMyFilmsListDataLoaded, setIsMyFilmsListDataLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!isMyFilmsListDataLoaded && isMounted) {
      onLoadMyFilmsListData();
      setIsMyFilmsListDataLoaded(true);
    }

    return () => {
      isMounted = false;
    };
  }, [myFilmsList]);

  if (!isMyFilmsListDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <Header title={`My List`} isUserBlockShown={true}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {myFilmsList.map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            name={film.name} id={film.id}
            src={film.preview_image}
            previewVideoLink={film.preview_video_link}
            handleActiveCardChange={handleActiveCardChange}
            activeCard={activeCard}
          />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  myFilmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMyFilmsListData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myFilmsList: getMyFilmsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMyFilmsListData() {
    dispatch(fetchFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
