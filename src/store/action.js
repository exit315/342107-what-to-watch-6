export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `films/loadFilms`,
  LOAD_PROMO_FILM: `films/loadPromoFilm`,
  LOAD_MY_FILMS_LIST: `films/loadMyFilmsList`,
  LOAD_REVIEWS: `films/loadReviews`,
  SET_IS_ERROR_SHOWN: `films/setIsErrorShown`,
  DISABLE_FORM: `user/disableForm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REMEMBER_USER: `user/rememberUser`,
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const changeGenre = (evt) => ({
  type: ActionType.CHANGE_GENRE,
  payload: evt.target.textContent,
});

export const rememberUser = (userEmail) => ({
  type: ActionType.REMEMBER_USER,
  payload: userEmail,
});

export const loadMyFilmsList = (myFilmsList) => ({
  type: ActionType.LOAD_MY_FILMS_LIST,
  payload: myFilmsList,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const setIsErrorShown = ({shown, errorText}) => ({
  type: ActionType.SET_IS_ERROR_SHOWN,
  payload: {shown, errorText}
});

export const disableForm = (isFormDisabled) => ({
  type: ActionType.DISABLE_FORM,
  payload: isFormDisabled
});
