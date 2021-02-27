export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS_BY_GENRE: `films/changeFilmsByGenre`,
};

export const ActionCreator = {
  changeGenre: (evt) => ({
    type: ActionType.CHANGE_GENRE,
    payload: evt.target.textContent
  })
};
