import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadFavorite} from "../../api/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {getMyFilmsList} from '../../store/films-data/selectors';

const MyList = ({myFilmsList, onLoadMyFilmsListData}) => {
  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  const [isMyFilmsListDataLoaded, setIsMyFilmsListDataLoaded] = useState(false);

  useEffect(() => {
    if (!isMyFilmsListDataLoaded) {
      onLoadMyFilmsListData();
      setIsMyFilmsListDataLoaded(true);
    }
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
  myFilmsList: PropTypes.array.isRequired,
  onLoadMyFilmsListData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myFilmsList: getMyFilmsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMyFilmsListData() {
    dispatch(loadFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
