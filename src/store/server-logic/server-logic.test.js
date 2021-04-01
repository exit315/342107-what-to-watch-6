import {serverLogic} from './server-logic';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(serverLogic(undefined, {}))
      .toEqual({
        serverUnavailable: false,
      });
  });
});
