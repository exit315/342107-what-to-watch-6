export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
};

export const ActionCreator = {
  changeGenre: (evt) => ({
    type: ActionType.CHANGE_GENRE,
    payload: evt.target.textContent
  })
};
