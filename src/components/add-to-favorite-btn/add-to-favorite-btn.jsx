import React from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {changeFavorite} from "../../api/api-actions";
import {loadFavorite} from "../../api/api-actions";
import {getMyFilmsList} from '../../store/films-data/selectors';
import {getIsFormDisabled} from '../../store/user-interaction/selectors';

const AddToFavoriteBtn = ({currentFilm, onFavoriteClick, isFormDisabled}) => {
  const currentmyFilmsList = useSelector(getMyFilmsList);

  const isInMyFilmsList = currentmyFilmsList.findIndex((el) => el.id === currentFilm.id);

  const handleFavoriteClick = () => {
    onFavoriteClick({
      id: currentFilm.id,
      status: +(!currentFilm.is_favorite),
    });
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick} key={currentFilm.id} disabled={isFormDisabled}>
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
  isFormDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFormDisabled: getIsFormDisabled(state),
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
