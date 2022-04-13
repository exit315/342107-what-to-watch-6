import {ActionType} from '../action';
import {InitialUserStateType} from './user-types';

const initialState: InitialUserStateType = {
  authorizationStatus: false,
  userEmail: null,
};

const user = (state = initialState, action: any): InitialUserStateType => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
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

export {user};
