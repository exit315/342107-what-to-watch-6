import {user} from './user';
import {ActionType} from '../action';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api/api';
import {checkAuth, login} from '../../api/api-actions';
import {AppRoute} from '../../utils/const';

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
  const fakeUser = {email: `test@test.ru`, password: `123456`};

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(AppRoute.LOGIN)
      .reply(200, fakeUser);

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
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(AppRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DISABLE_FORM,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REMEMBER_USER,
          payload: fakeUser.email,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.DISABLE_FORM,
          payload: false,
        });
      });
  });
});
