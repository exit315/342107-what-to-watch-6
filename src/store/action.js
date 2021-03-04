export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `films/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  changeGenre: (evt) => ({
    type: ActionType.CHANGE_GENRE,
    payload: evt.target.textContent
  })
};
