import {ActionType} from '../action';

const initialState = {
  myFilmsList: [],
  statusCode: null,
  isFormDisabled: false,
};

const userInteraction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MY_FILMS_LIST:
      return {
        ...state,
        myFilmsList: action.payload,
      };

    case ActionType.GET_STATUS_CODE:
      return {
        ...state,
        statusCode: action.payload,
      };

    case ActionType.DISABLE_FORM:
      return {
        ...state,
        isFormDisabled: action.payload,
      };

    default:
      return state;
  }
};

export {userInteraction};
