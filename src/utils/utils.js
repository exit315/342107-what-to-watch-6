import {TextRatingType} from './const';
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

export const getRunTimeInPlayer = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time % 3600 / 60);
  let seconds = Math.floor(time % 3600 % 60);

  if (hours < 10) {
    hours = `0` + hours;
  }

  if (minutes < 10) {
    minutes = `0` + minutes;
  }

  if (seconds < 10) {
    seconds = `0` + seconds;
  }

  return hours + `:` + minutes + `:` + seconds;
};

export const getTextRating = (numberRating) => {
  switch (true) {
    case numberRating >= 0 && numberRating < 3:
      return TextRatingType.BAD;

    case numberRating >= 3 && numberRating < 5:
      return TextRatingType.NORMAL;

    case numberRating >= 5 && numberRating < 8:
      return TextRatingType.GOOD;

    case numberRating >= 8 && numberRating < 10:
      return TextRatingType.VERY_GOOD;

    case numberRating >= 10:
      return TextRatingType.AWESOME;

    default:
      return ``;
  }
};
