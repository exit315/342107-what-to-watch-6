import {GenreType, AuthorizationStatus} from '../utils/const';
import {ActionType} from './action';

const initialState = {
  films: [],
  genre: GenreType.ALL,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
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

    default:
      return state;
  }
};

export {reducer};
