import {userInteraction} from './user-interaction';

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
});
