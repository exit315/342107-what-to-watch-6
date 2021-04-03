import {userInteraction} from './user-interaction';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userInteraction(undefined, {}))
      .toEqual({
        isErrorShown: {
          shown: false,
          errorText: ``
        },
        isFormDisabled: false,
      });
  });

  it(`Reducer should change error status and error message in state`, () => {
    const state = {
      isErrorShown: {
        shown: false,
        errorText: ``
      },
      isFormDisabled: false,
    };

    const setErrorAction = {
      type: ActionType.SET_IS_ERROR_SHOWN,
      payload: {shown: true, errorText: `Error message`},
    };

    expect(userInteraction(state, setErrorAction))
      .toEqual({isErrorShown: {shown: true, errorText: `Error message`}, isFormDisabled: false});
  });

  it(`Reducer should set disabled form status in state`, () => {
    const state = {
      isErrorShown: {
        shown: false,
        errorText: ``
      },
      isFormDisabled: false,
    };

    const setDisabledFormAction = {
      type: ActionType.DISABLE_FORM,
      payload: true,
    };

    expect(userInteraction(state, setDisabledFormAction))
      .toEqual({isErrorShown: {shown: false, errorText: ``}, isFormDisabled: true});
  });
});
