import {ActionType} from '../action';

const initialState = {
  myFilmsList: [],
  isErrorShown: {
    shown: false,
    errorText: ``
  },
  isFormDisabled: false,
};

const userInteraction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MY_FILMS_LIST:
      return {
        ...state,
        myFilmsList: action.payload,
      };

    case ActionType.SET_IS_ERROR_SHOWN:
      return {
        ...state,
        isErrorShown: {
          shown: action.payload.shown,
          errorText: action.payload.errorText
        },
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
