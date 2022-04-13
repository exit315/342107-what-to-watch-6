import {ActionType} from '../action';
import {InitialUserInteractionStateType} from './user-interaction-types';

const initialState: InitialUserInteractionStateType = {
  isErrorShown: {
    shown: false,
    errorText: ``
  },
  isFormDisabled: false,
};

const userInteraction = (state = initialState, action: any): InitialUserInteractionStateType => {
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
