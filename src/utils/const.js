export const FILM_COUNT_PER_STEP = 8;

export const INITIAL_FILM_COUNT = 0;

export const MAX_GENRE_COUNT = 9;

export const MAX_RATING = 10;

export const COMMENT_MIN_LENGTH = 50;

export const FILMS_LIKE_THIS = 4;

export const TextRatingType = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const TabType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const GENRE_TYPE_ALL = `All genres`;

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  MYLIST: `/mylist`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  FILM: `/films/:id`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
};

export const ERROR_MESSAGE = `Something went wrong. Please, try again or later.`;
