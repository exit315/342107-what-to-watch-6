import {serverLogic} from './server-logic';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(serverLogic(undefined, {}))
      .toEqual({
        serverUnavailable: false,
      });
  });

  it(`Reducer should write given server status in state`, () => {
    const state = {serverUnavailable: false};

    const showServerAction = {
      type: ActionType.SHOW_SERVER_UNAVAILABLE_SCREEN,
      payload: true,
    };

    expect(serverLogic(state, showServerAction))
      .toEqual({serverUnavailable: true});
  });
});
