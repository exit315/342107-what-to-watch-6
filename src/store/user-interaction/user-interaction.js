import {ActionType} from '../action';

const initialState = {
  myFilmsList: [],
  sendStatusCode: null,
  status: false,
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
        sendStatusCode: action.payload,
      };

    case ActionType.DISABLE_FORM:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export {userInteraction};
