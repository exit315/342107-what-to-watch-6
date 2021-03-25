import {ActionType} from '../action';

const initialState = {
  isErrorShown: {
    shown: false,
    errorText: ``
  },
  isFormDisabled: false,
};

const userInteraction = (state = initialState, action) => {
  switch (action.type) {
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
