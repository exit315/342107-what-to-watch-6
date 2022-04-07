import {ActionType} from '../action';

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
  starring: string[];
  video_link: string;
};

export type FilmReviewItemType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
};

export type InitialFilmsDataStateType = {
  films: FilmItemType[];
  filmReviews: FilmReviewItemType[];
  myFilmsList: FilmItemType[];
  promoFilm: FilmItemType | null;
  genre: string;
  isDataLoaded: boolean;
  isPromoFilmDataLoaded: boolean;
};




