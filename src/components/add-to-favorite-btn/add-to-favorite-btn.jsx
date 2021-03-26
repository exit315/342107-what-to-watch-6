import React from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {changeFavorite} from "../../api/api-actions";
import {loadFavorite} from "../../api/api-actions";
import {getMyFilmsList} from '../../store/films-data/selectors';
import {getIsFormDisabled} from '../../store/user-interaction/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute} from '../../utils/const';
import browserHistory from "../../browser-history";

const AddToFavoriteBtn = ({currentFilm, onFavoriteClick, isFormDisabled, authorizationStatus}) => {
  const currentMyFilmsList = useSelector(getMyFilmsList);

  const isInMyFilmsList = currentMyFilmsList.findIndex((el) => el.id === currentFilm.id);

  const handleFavoriteClick = () => {
    if (!authorizationStatus) {
      browserHistory.push(AppRoute.LOGIN);
    } else {
      onFavoriteClick({
        id: currentFilm.id,
        status: +(!currentFilm.is_favorite),
      });
    }
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
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFormDisabled: getIsFormDisabled(state),
  authorizationStatus: getAuthorizationStatus(state),
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
