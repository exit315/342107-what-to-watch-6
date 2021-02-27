import {GenreType} from '../utils/const'
import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: GenreType.ALL,
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
