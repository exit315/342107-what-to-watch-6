import {AppStateType} from '../../store/root-reducer';

export const getFilms = (state: AppStateType) => state.films;
export const getFilmReviews = (state: AppStateType) => state.filmReviews;
export const getMyFilmsList = (state: AppStateType) => state.myFilmsList;
export const getPromoFilm = (state: AppStateType) => state.promoFilm;
export const getGenre = (state: AppStateType) => state.genre;
export const getIsDataLoaded = (state: AppStateType) => state.isDataLoaded;
export const getIsPromoFilmDataLoaded = (state: AppStateType) => state.isPromoFilmDataLoaded;
