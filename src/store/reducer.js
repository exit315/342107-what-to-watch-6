import {GenreType} from '../utils/const';
import {ActionType} from './action';

const initialState = {
  films: [],
  myFilmsList: [],
  promoFilm: null,
  genre: GenreType.ALL,
  authorizationStatus: false,
  userEmail: null,
  isDataLoaded: false,
  isPromoFilmDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmDataLoaded: true
      };

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.REMEMBER_USER:
      return {
        ...state,
        userEmail: action.payload,
      };

    case ActionType.LOAD_MY_FILMS_LIST:
      return {
        ...state,
        myFilmsList: action.payload,
        isMyFilmsListDataLoaded: true
      };

    default:
      return state;
  }
};

export {reducer};
