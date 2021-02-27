export const filterFilmsByGenre = (films, genre) => {
  return films.filter((film) => film.genre === genre);
};

export const createGenreTypesList = (films) => {
  const allGenreTypes = [];

  films.forEach(element => {
    allGenreTypes.push(element.genre);
  });

  const uniqGenreTypes = new Set(allGenreTypes);

  return uniqGenreTypes;
};
