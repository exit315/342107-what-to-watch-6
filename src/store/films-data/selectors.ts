import {AppStateType} from '../../store/root-reducer';

export const getFilms = (state: AppStateType) => state.filmsData.films;
export const getFilmReviews = (state: AppStateType) => state.filmsData.filmReviews;
export const getMyFilmsList = (state: AppStateType) => state.filmsData.myFilmsList;
export const getPromoFilm = (state: AppStateType) => state.filmsData.promoFilm;
export const getGenre = (state: AppStateType) => state.filmsData.genre;
export const getIsDataLoaded = (state: AppStateType) => state.filmsData.isDataLoaded;
export const getIsPromoFilmDataLoaded = (state: AppStateType) => state.filmsData.isPromoFilmDataLoaded;
