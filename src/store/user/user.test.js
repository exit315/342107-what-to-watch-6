import MockAdapter from 'axios-mock-adapter';
import {AppRoute} from '../../utils/const';
import {createAPI} from '../../api/api';
import {checkAuth, login} from '../../api/api-actions';

import {user} from './user';
import {ActionType} from '../action';

const api = createAPI(() => {});

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();
    const fakeUser = {email: `test@test.ru`, password: `123456`};

    apiMock
      .onGet(AppRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REMEMBER_USER,
          payload: fakeUser.email,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(AppRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: true,
        });
      });
  });
});
