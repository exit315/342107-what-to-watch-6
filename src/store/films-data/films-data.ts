import {ActionType} from '../action';
import {FilmItemType, InitialFilmsDataStateType} from '../../types/films-data-types';
import {GENRE_TYPE_ALL} from '../../utils/const';

const initialState: InitialFilmsDataStateType = {
  films: [],
  filmReviews: [],
  myFilmsList: [],
  promoFilm: null,
  genre: GENRE_TYPE_ALL,
  isDataLoaded: false,
  isPromoFilmDataLoaded: false,
};

const filmsData = (state = initialState, action: {type: string; payload: any}): InitialFilmsDataStateType => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmDataLoaded: true,
      };

    case ActionType.LOAD_MY_FILMS_LIST:
      return {
        ...state,
        myFilmsList: action.payload,
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        filmReviews: action.payload,
      };

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case ActionType.UPDATE_FILM_DATA:
      const updatedFilmIndex = state.films.findIndex((el: FilmItemType) => {el.id === action.payload.id});

      return {
        ...state,
        films: [
          ...state.films.slice(0, updatedFilmIndex),
          action.payload.data,
          ...state.films.slice(updatedFilmIndex + 1)
        ],
      };

    default:
      return state;
  }
};

export {filmsData};
