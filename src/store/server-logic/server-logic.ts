import {ActionType} from '../action';
import {InitialServerLogicStateType} from './server-logic-types';

const initialState: InitialServerLogicStateType = {
  serverUnavailable: false,
};

const serverLogic = (state = initialState, action: any): InitialServerLogicStateType => {
  switch (action.type) {
    case ActionType.SHOW_SERVER_UNAVAILABLE_SCREEN:
      return {
        ...state,
        serverUnavailable: action.payload,
      };

    default:
      return state;
  }
};

export {serverLogic};
