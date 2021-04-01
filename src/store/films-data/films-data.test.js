import {GENRE_TYPE_ALL} from '../../utils/const';
import {filmsData} from './films-data';

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
});
