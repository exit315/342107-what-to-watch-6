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

export const getTextRating = (numberRating) => {
  switch (true) {
    case numberRating >= 0 && numberRating < 3:
      return `Bad`;

    case numberRating >= 3 && numberRating < 5:
      return `Normal`;

    case numberRating >= 5 && numberRating < 8:
      return `Good`;

    case numberRating >= 8 && numberRating < 10:
      return `Good`;

    case numberRating >= 10:
      return `Awesome`;

    default:
      return ``;
  }
};
