import {InitialFilmsDataStateType, FilmItemType, FilmReviewItemType} from './films-data/films-data-types';
import {InitialServerLogicStateType} from './server-logic/server-logic-types';
import {InitialUserStateType} from './user/user-types';
import {InitialUserInteractionStateType} from './user-interaction/user-interaction-types';
import {ActionType} from './action';

export type StateType = {
  SERVER_LOGIC: InitialServerLogicStateType;
  DATA: InitialFilmsDataStateType;
  USER: InitialUserStateType;
  INTERACTION: InitialUserInteractionStateType;
};

export type LoadFilmsActionType = {
  type: typeof ActionType.LOAD_FILMS;
  payload: FilmItemType[];
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
  payload: FilmItemType[];
};

export type LoadReviewsActionType = {
  type: typeof ActionType.LOAD_REVIEWS;
  payload: FilmReviewItemType[];
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
