import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadFavorite} from "../../api/api-actions";
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const MyList = (props) => {
  const {myFilmsList, onLoadMyFilmsListData, isMyFilmsListDataLoaded} = props;

  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  useEffect(() => {
    if (!isMyFilmsListDataLoaded) {
      onLoadMyFilmsListData();
    }
  }, [isMyFilmsListDataLoaded]);

  return (
    <div className="user-page">
      <Header title={`My List`}/>

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
  myFilmsList: PropTypes.array,
  onLoadMyFilmsListData: PropTypes.func.isRequired,
  isMyFilmsListDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  myFilmsList: state.myFilmsList,
  isMyFilmsListDataLoaded: state.isMyFilmsListDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMyFilmsListData() {
    dispatch(loadFavorite());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
