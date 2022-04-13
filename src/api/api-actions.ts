import { disableForm, loadFilms, loadMyFilmsList, loadPromoFilm, loadReviews, rememberUser, requireAuthorization, setIsErrorShown, updateFilmData } from "../store/action";
import { AppRoute, ERROR_MESSAGE } from '../utils/const';
import {FilmItemType, FilmReviewItemType} from '../store/films-data/films-data-types';

type UserAuthDataType = {
  login: {
    email: string
    password: string
  }
}

type NewCommentDataType = {
  id: number
  rating: number
  comment: string
}

type FavoriteFilmData = {
  id: number
  status: boolean
}

export const fetchFilmsList = () => (dispatch: any, _getState: any, api: any) => (
  api.get(AppRoute.FILMS)
    .then(({data}: {data: []}) => dispatch(loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch: any, _getState: any, api: any) => (
  api.get(AppRoute.PROMO)
    .then(({data}: {data: FilmItemType}) => dispatch(loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch: any, _getState: any, api: any) => (
  api.get(AppRoute.LOGIN)
    .then((response: {data: {email: string}}) => dispatch(rememberUser(response.data.email)))
    .then(() => dispatch(requireAuthorization(true)))
);

export const login = ({login: {email, password}}: UserAuthDataType) => (dispatch: any, _getState: any, api: any) => {
  dispatch(disableForm(true));

  return api.post(AppRoute.LOGIN, {email, password})
    .then((response: {data: {email: string}}) => dispatch(rememberUser(response.data.email)))
    .then(() => dispatch(requireAuthorization(true)))
    .then(() => dispatch(disableForm(false)))
    .catch(() => {
      dispatch(disableForm(false));
      dispatch(setIsErrorShown({shown: true, errorText: ERROR_MESSAGE}));
    });
};

export const logout = ({login: {email, password}}: UserAuthDataType) => (dispatch: any, _getState: any, api: any) => (
  api.get(AppRoute.LOGOUT, {email, password})
    .then(() => dispatch(requireAuthorization(false)))
);

export const changeFavorite = ({id, status}: FavoriteFilmData) => (dispatch: any, _getState: any, api: any) => {
  dispatch(disableForm(true));

  api.post(`${AppRoute.FAVORITE}/${id}/${status}`, {id, status})
    .then(() => {
      api.get(`${AppRoute.FILMS}/${id}`)
        .then(({data}: {data: FilmItemType}) => dispatch(updateFilmData(data)));
    })
    .then(() => {
      api.get(AppRoute.FAVORITE)
        .then(({data}: {data: []}) => dispatch(loadMyFilmsList(data)));
    })
    .then(() => {
      api.get(AppRoute.PROMO)
        .then(({data}: {data: FilmItemType}) => dispatch(loadPromoFilm(data)));
    })
    .then(() => dispatch(disableForm(false)))
    .catch(() => {
      dispatch(disableForm(false));
      dispatch(setIsErrorShown({shown: true, errorText: ERROR_MESSAGE}));
    });
};

export const fetchFavorite = () => (dispatch: any, _getState: any, api: any) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}: {data: []}) => dispatch(loadMyFilmsList(data)))
);

export const fetchComments = ({id}: {id: string}) => (dispatch: any, _getState: any, api: any) => (
  api.get(`${AppRoute.COMMENTS}/${id}`)
    .then((response: {data: FilmReviewItemType[]}) => dispatch(loadReviews(response.data)))
);

export const sendComment = ({id, rating, comment}: NewCommentDataType) => (dispatch: any, _getState: any, api: any) => {
  dispatch(disableForm(true));

  api.post(`${AppRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(disableForm(false));
      history.back();
    })
    .catch(() => {
      dispatch(disableForm(false));
      dispatch(setIsErrorShown({shown: true, errorText: ERROR_MESSAGE}));
    });
};
