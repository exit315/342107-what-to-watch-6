export const filterFilmsByGenre = (films, genre) => {
  return films.filter((film) => film.genre === genre);
};

export const createGenreTypesList = (films) => {
  const allGenreTypes = [];

  films.forEach((element) => {
    allGenreTypes.push(element.genre);
  });

  const uniqGenreTypes = new Set(allGenreTypes);

  return uniqGenreTypes;
};

export const getRunTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours + `h ` + minutes + `m`;
};
