import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getFilmReviews = (state) => state[NameSpace.DATA].filmReviews;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getGenre = (state) => state[NameSpace.DATA].genre;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getIsPromoFilmDataLoaded = (state) => state[NameSpace.DATA].isPromoFilmDataLoaded;
