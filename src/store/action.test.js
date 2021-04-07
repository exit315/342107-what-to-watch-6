import {
  requireAuthorization,
  changeGenre,
  rememberUser,
  setIsErrorShown,
  disableForm,
  showServerUnavailableScreen,
  ActionType,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for requiring authorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    };

    expect(requireAuthorization(true)).toEqual(expectedAction);
  });

  it(`Action creator for changing genre returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    };

    expect(changeGenre(`Comedy`)).toEqual(expectedAction);
  });

  it(`Action creator for remembering user email returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REMEMBER_USER,
      payload: `test@test.ru`,
    };

    const userEmail = `test@test.ru`;

    expect(rememberUser(userEmail)).toEqual(expectedAction);
  });

  it(`Action creator for setting error returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_ERROR_SHOWN,
      payload: {
        shown: true,
        errorText: `Test error message`,
      },
    };

    const error = {
      shown: true,
      errorText: `Test error message`,
    };

    expect(setIsErrorShown(error)).toEqual(expectedAction);
  });

  it(`Action creator for disabling form returns correct action`, () => {
    const expectedAction = {
      type: ActionType.DISABLE_FORM,
      payload: true,
    };

    expect(disableForm(true)).toEqual(expectedAction);
  });

  it(`Action creator for showing server unavailable screen returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SHOW_SERVER_UNAVAILABLE_SCREEN,
      payload: true,
    };

    expect(showServerUnavailableScreen(true)).toEqual(expectedAction);
  });
});
