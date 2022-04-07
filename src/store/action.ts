import {FilmItemType, FilmReviewItemType} from './films-data/films-data-types';
import {LoadFilmsActionType, 
  LoadPromoFilmActionType, 
  RequireAuthorizationActionType, 
  ChangeGenreActionType, 
  RememberUserActionType, 
  LoadMyFilmsListActionType, 
  LoadReviewsActionType, 
  SetIsErrorShownActionType, 
  DisableFormActionType, 
  UpdateFilmDataActionType, 
  ShowServerUnavailableScreenActionType} from './reducer-types';

export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `films/loadFilms`,
  LOAD_PROMO_FILM: `films/loadPromoFilm`,
  LOAD_MY_FILMS_LIST: `films/loadMyFilmsList`,
  LOAD_REVIEWS: `films/loadReviews`,
  SET_IS_ERROR_SHOWN: `films/setIsErrorShown`,
  UPDATE_FILM_DATA: `films/updateFilmData`,
  DISABLE_FORM: `user/disableForm`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  REMEMBER_USER: `user/rememberUser`,
  SHOW_SERVER_UNAVAILABLE_SCREEN: `site/showServerUnavailableScreen`,
};

export const loadFilms = (films: FilmItemType[]): LoadFilmsActionType => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromoFilm = (promoFilm: FilmItemType): LoadPromoFilmActionType => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm,
});

export const requireAuthorization = (status: boolean): RequireAuthorizationActionType => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const changeGenre = (genre: string): ChangeGenreActionType => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const rememberUser = (userEmail: string): RememberUserActionType => ({
  type: ActionType.REMEMBER_USER,
  payload: userEmail,
});

export const loadMyFilmsList = (myFilmsList: FilmItemType[]): LoadMyFilmsListActionType => ({
  type: ActionType.LOAD_MY_FILMS_LIST,
  payload: myFilmsList,
});

export const loadReviews = (reviews: FilmReviewItemType[]): LoadReviewsActionType => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const setIsErrorShown = ({shown, errorText}: {shown: boolean; errorText: string}): SetIsErrorShownActionType => ({
  type: ActionType.SET_IS_ERROR_SHOWN,
  payload: {shown, errorText},
});

export const disableForm = (isFormDisabled: boolean): DisableFormActionType => ({
  type: ActionType.DISABLE_FORM,
  payload: isFormDisabled,
});

export const updateFilmData = (data: FilmItemType): UpdateFilmDataActionType => ({
  type: ActionType.UPDATE_FILM_DATA,
  payload: data,
});

export const showServerUnavailableScreen = (serverUnavailable: boolean): ShowServerUnavailableScreenActionType => ({
  type: ActionType.SHOW_SERVER_UNAVAILABLE_SCREEN,
  payload: serverUnavailable,
});
