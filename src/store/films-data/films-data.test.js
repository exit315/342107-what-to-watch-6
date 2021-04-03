import {GENRE_TYPE_ALL} from '../../utils/const';
import {filmsData} from './films-data';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {}))
      .toEqual({
        films: [],
        filmReviews: [],
        myFilmsList: [],
        promoFilm: null,
        genre: GENRE_TYPE_ALL,
        isDataLoaded: false,
        isPromoFilmDataLoaded: false,
      });
  });

  it(`Reducer should write given genre in state`, () => {
    const state = {genre: GENRE_TYPE_ALL};

    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    };

    expect(filmsData(state, changeGenreAction))
      .toEqual({genre: `Drama`});
  });
});
