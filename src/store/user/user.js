import {ActionType} from '../action';

const initialState = {
  authorizationStatus: false,
  userEmail: null,
};

const user = (state = initialState, action) => {
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
