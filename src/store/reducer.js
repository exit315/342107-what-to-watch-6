import {GenreType} from '../utils/const';
import {ActionType} from './action';

const initialState = {
  films: [],
  promoFilm: null,
  genre: GenreType.ALL,
  authorizationStatus: false,
  isDataLoaded: false,
  userEmail: null,
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
        isDataLoaded: true
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

    default:
      return state;
  }
};

export {reducer};
