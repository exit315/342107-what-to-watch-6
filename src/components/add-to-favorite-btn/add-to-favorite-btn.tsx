import React, {useEffect, useState} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../utils/const';
import {changeFavorite} from "../../api/api-actions";
import {fetchFavorite} from "../../api/api-actions";
import {setIsErrorShown} from "../../store/action";
import {getMyFilmsList} from '../../store/films-data/selectors';
import {getIsFormDisabled, getIsErrorShown} from '../../store/user-interaction/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppStateType} from '../../store/root-reducer';
import {FilmItemType} from '../../types/films-data-types';
import {FavoriteFilmData} from '../../types/types';

type Props = {
  currentFilm: FilmItemType
  onFavoriteClick: ({}: FavoriteFilmData) => void
  isFormDisabled: boolean
  authorizationStatus: boolean
  isErrorShown: {
    shown: boolean
    errorText: string
  },
  myFilmsList: Array<FilmItemType>
}

const AddToFavoriteBtn: React.FC<Props> = ({currentFilm, onFavoriteClick, isFormDisabled, authorizationStatus, isErrorShown, myFilmsList}) => {
  const {shown, errorText} = isErrorShown;
  const [messageText, setMessageText] = useState(``);
  const dispatch = useDispatch();

  const isInMyFilmsList = myFilmsList.findIndex((el: FilmItemType): boolean => el.id === currentFilm.id);

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

const mapStateToProps = (state: AppStateType) => ({
  isFormDisabled: getIsFormDisabled(state),
  authorizationStatus: getAuthorizationStatus(state),
  isErrorShown: getIsErrorShown(state),
  myFilmsList: getMyFilmsList(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onFavoriteClick({id, status}: FavoriteFilmData) {
    dispatch(changeFavorite({id, status}));
  },
  onLoadMyFilmsListData() {
    dispatch(fetchFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteBtn);
