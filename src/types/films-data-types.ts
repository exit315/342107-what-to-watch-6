export type FilmItemType = {
  background_color: string;
  background_image: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  is_favorite: boolean;
  name: string;
  poster_image: string;
  preview_image: string;
  preview_video_link: string;
  rating: number;
  released: number;
  run_time: number;
  scores_count: number;
  starring: Array<string>;
  video_link: string;
};

export type FilmReviewItemType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number
    name: string
  }
};

export type InitialFilmsDataStateType = {
  films: Array<FilmItemType>;
  filmReviews: Array<FilmReviewItemType>;
  myFilmsList: Array<FilmItemType>;
  promoFilm: FilmItemType | null;
  genre: string;
  isDataLoaded: boolean;
  isPromoFilmDataLoaded: boolean;
};
