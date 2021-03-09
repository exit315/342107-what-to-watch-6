export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `films/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REMEMBER_USER: `user/rememberUser`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  changeGenre: (evt) => ({
    type: ActionType.CHANGE_GENRE,
    payload: evt.target.textContent
  }),

  rememberUser: (userEmail) => ({
    type: ActionType.REMEMBER_USER,
    payload: userEmail
  })
};
