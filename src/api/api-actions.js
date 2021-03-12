import {ActionCreator} from "../store/action";
import {AppRoute} from '../utils/const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(AppRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.rememberUser(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(true)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(true)))
);

export const changeFavorite = ({id, status}) => (_dispatch, _getState, api) => (
  api.post(`${AppRoute.FAVORITE}/${id}/${status}`, {id, status})
);

export const loadFavorite = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
  .then(({data}) => dispatch(ActionCreator.loadMyFilmsList(data)))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(false)))
);
