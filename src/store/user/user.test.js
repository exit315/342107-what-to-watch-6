import {user} from './user';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: false,
        userEmail: null,
      });
  });

  it(`Reducer should write given email in state`, () => {
    const state = {authorizationStatus: false, userEmail: null};

    const rememberUserAction = {
      type: ActionType.REMEMBER_USER,
      payload: `test@test.ru`,
    };

    expect(user(state, rememberUserAction))
      .toEqual({authorizationStatus: false, userEmail: `test@test.ru`});
  });

  it(`Reducer should write given authorization status in state`, () => {
    const state = {authorizationStatus: false, userEmail: null};

    const requireAuthAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    };

    expect(user(state, requireAuthAction))
      .toEqual({authorizationStatus: true, userEmail: null});
  });
});
