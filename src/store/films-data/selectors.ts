import {NameSpace} from '../root-reducer';
import {FilmItemType, InitialFilmsDataStateType} from './films-data-types';
import {StateType} from '../reducer-types';

export const getFilms = (state: any) => state[NameSpace.DATA].films;
export const getFilmReviews = (state: any) => state[NameSpace.DATA].filmReviews;
export const getMyFilmsList = (state: any) => state[NameSpace.DATA].myFilmsList;
export const getPromoFilm = (state: any) => state[NameSpace.DATA].promoFilm;
export const getGenre = (state: any) => state[NameSpace.DATA].genre;
export const getIsDataLoaded = (state: any) => state[NameSpace.DATA].isDataLoaded;
export const getIsPromoFilmDataLoaded = (state: any) => state[NameSpace.DATA].isPromoFilmDataLoaded;
