import {loadFilms, loadPromoFilm, rememberUser, requireAuthorization, loadMyFilmsList, loadReviews, disableForm, setIsErrorShown} from "../store/action";
import {AppRoute, ERROR_MESSAGE} from '../utils/const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(AppRoute.PROMO)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then((response) => dispatch(rememberUser(response.data.email)))
    .then(() => dispatch(requireAuthorization(true)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  dispatch(disableForm(true));

  api.post(AppRoute.LOGIN, {email, password})
    .then(() => {
      dispatch(disableForm(false));
      dispatch(rememberUser(email));
      dispatch(requireAuthorization(true));
    })
    .catch(() => {
      dispatch(disableForm(false));
      dispatch(setIsErrorShown({shown: true, errorText: ERROR_MESSAGE}));
    });
};

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT, {email, password})
    .then(() => dispatch(requireAuthorization(false)))
);

export const changeFavorite = ({id, status}) => (_dispatch, _getState, api) => {
  api.post(`${AppRoute.FAVORITE}/${id}/${status}`, {id, status});
};

export const loadFavorite = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => dispatch(loadMyFilmsList(data)))
);

export const loadComments = ({id}) => (dispatch, _getState, api) => (
  api.get(`${AppRoute.COMMENTS}/${id}`)
    .then((response) => dispatch(loadReviews(response.data)))
);

export const sendComment = ({id, rating, comment}) => (dispatch, _getState, api) => {
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
