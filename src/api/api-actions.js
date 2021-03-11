import {ActionCreator} from "../store/action";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => dispatch(ActionCreator.rememberUser(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(true)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(true)))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(`/logout`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(false)))
);
