import {ActionType} from '../action';

const initialState = {
  serverUnavailable: false,
};

const serverLogic = (state = initialState, action) => {
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
