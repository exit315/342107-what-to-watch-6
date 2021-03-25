import {ActionType} from '../action';
import {GENRE_TYPE_ALL} from '../../utils/const';

const initialState = {
  films: [],
  filmReviews: [],
  promoFilm: null,
  genre: GENRE_TYPE_ALL,
  isDataLoaded: false,
  isPromoFilmDataLoaded: false,
};

const filmsData = (state = initialState, action) => {
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

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
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

    default:
      return state;
  }
};

export {filmsData};
