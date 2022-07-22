import {FilmItemType, FilmReviewItemType} from './films-data-types';
import {ActionType} from '../store/action';

export type LoadFilmsActionType = {
  type: typeof ActionType.LOAD_FILMS;
  payload: Array<FilmItemType>;
};

export type LoadPromoFilmActionType = {
  type: typeof ActionType.LOAD_PROMO_FILM;
  payload: FilmItemType;
};

export type RequireAuthorizationActionType = {
  type: typeof ActionType.REQUIRE_AUTHORIZATION;
  payload: boolean;
};

export type ChangeGenreActionType = {
  type: typeof ActionType.CHANGE_GENRE;
  payload: string;
};

export type RememberUserActionType = {
  type: typeof ActionType.REMEMBER_USER;
  payload: string;
};

export type LoadMyFilmsListActionType = {
  type: typeof ActionType.LOAD_MY_FILMS_LIST;
  payload: Array<FilmItemType>;
};

export type LoadReviewsActionType = {
  type: typeof ActionType.LOAD_REVIEWS;
  payload: Array<FilmReviewItemType>;
};

export type SetIsErrorShownActionType = {
  type: typeof ActionType.SET_IS_ERROR_SHOWN;
  payload: {
    shown: boolean;
    errorText: string;
  };
};

export type DisableFormActionType = {
  type: typeof ActionType.DISABLE_FORM;
  payload: boolean;
};

export type UpdateFilmDataActionType = {
  type: typeof ActionType.UPDATE_FILM_DATA;
  payload: FilmItemType;
};

export type ShowServerUnavailableScreenActionType = {
  type: typeof ActionType.SHOW_SERVER_UNAVAILABLE_SCREEN;
  payload: boolean;
};
