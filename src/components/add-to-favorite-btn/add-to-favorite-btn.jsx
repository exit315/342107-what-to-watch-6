import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeFavorite} from "../../api/api-actions";
import {loadFavorite} from "../../api/api-actions";
import {getMyFilmsList} from '../../store/films-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const AddToFavoriteBtn = ({currentFilm, onFavoriteClick, myFilmsList, onLoadMyFilmsListData}) => {
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

  const isInMyFilmsList = myFilmsList.findIndex((el) => el.id === currentFilm.id);

  const handleFavoriteClick = () => {
    onFavoriteClick({
      id: currentFilm.id,
      status: +(!currentFilm.is_favorite),
    });
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick} key={currentFilm.id}>
      {isInMyFilmsList === -1 ? <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#add"></use>
      </svg> : <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#in-list"></use>
      </svg>}
      <span>My list</span>
    </button>
  );
};

AddToFavoriteBtn.propTypes = {
  currentFilm: PropTypes.object.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  myFilmsList: PropTypes.array.isRequired,
  onLoadMyFilmsListData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myFilmsList: getMyFilmsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(changeFavorite(id, status));
  },
  onLoadMyFilmsListData() {
    dispatch(loadFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteBtn);
