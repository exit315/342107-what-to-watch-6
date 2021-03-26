import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector, useDispatch} from 'react-redux';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../utils/const';
import {changeFavorite} from "../../api/api-actions";
import {loadFavorite} from "../../api/api-actions";
import {setIsErrorShown} from "../../store/action";
import {getMyFilmsList} from '../../store/films-data/selectors';
import {getIsFormDisabled, getIsErrorShown} from '../../store/user-interaction/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

const AddToFavoriteBtn = ({currentFilm, onFavoriteClick, isFormDisabled, authorizationStatus, isErrorShown}) => {
  const {shown, errorText} = isErrorShown;

  const dispatch = useDispatch();

  const currentMyFilmsList = useSelector(getMyFilmsList);
  const [messageText, setMessageText] = useState(``);

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

  useEffect(() => {
    if (shown) {
      setMessageText(errorText);
    }

    return () => {
      dispatch(setIsErrorShown({shown: false, errorText: ``}));
    };
  }, [shown]);

  const renderErrorMessage = () => {
    return (
      <div>
        <p style={{color: `#866866`}}><strong>{messageText}</strong></p>
      </div>
    );
  };

  return (
    <>
      <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick} key={currentFilm.id} disabled={isFormDisabled}>
        {isInMyFilmsList === -1 ? <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#add"></use>
        </svg> : <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#in-list"></use>
        </svg>}
        <span>My list</span>
      </button>
      {renderErrorMessage()}
    </>
  );
};

AddToFavoriteBtn.propTypes = {
  currentFilm: PropTypes.object.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  isErrorShown: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isFormDisabled: getIsFormDisabled(state),
  authorizationStatus: getAuthorizationStatus(state),
  isErrorShown: getIsErrorShown(state),
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
