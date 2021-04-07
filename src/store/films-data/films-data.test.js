import MockAdapter from 'axios-mock-adapter';
import {AppRoute, GENRE_TYPE_ALL} from '../../utils/const';
import {ActionType} from '../action';
import {createAPI} from '../../api/api';
import {fetchFilmsList, fetchComments, fetchFavorite, fetchPromoFilm} from '../../api/api-actions';
import {filmsData} from './films-data';

const api = createAPI(() => {});

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: `The Shawshank Redemption`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
    rating: 9.3,
    scoresCount: 240,
    director: `Frank Darabont`,
    starring: [`Tim Robbins`, `Morgan Freeman`, `Bob Gunton`],
    runTime: 99,
    genre: `Drama`,
    released: 1994,
    isFavorite: false
  },
  {
    id: 3,
    name: `Forrest Gump`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.`,
    rating: 8.8,
    scoresCount: 240,
    director: `Robert Zemeckis`,
    starring: [`Tom Hanks`, `Robin Wright`, `Gary Sinise`],
    runTime: 99,
    genre: `Drama`,
    released: 1994,
    isFavorite: false
  }
];

const filmReviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: {
      id: 8,
      name: `Matthew Lickona`
    },
    rating: 7.2,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 3,
    user: {
      id: 5,
      name: `Bill Goodykoontz`
    },
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const myFilmsList = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: true
  },
  {
    id: 2,
    name: `The Shawshank Redemption`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
    rating: 9.3,
    scoresCount: 240,
    director: `Frank Darabont`,
    starring: [`Tim Robbins`, `Morgan Freeman`, `Bob Gunton`],
    runTime: 99,
    genre: `Drama`,
    released: 1994,
    isFavorite: true
  },
  {
    id: 3,
    name: `Forrest Gump`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.`,
    rating: 8.8,
    scoresCount: 240,
    director: `Robert Zemeckis`,
    starring: [`Tom Hanks`, `Robin Wright`, `Gary Sinise`],
    runTime: 99,
    genre: `Drama`,
    released: 1994,
    isFavorite: true
  }
];

const promoFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: true
};

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

  it(`Reducer should update films by load films`, () => {
    const state = {films: [], isDataLoaded: false};

    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(filmsData(state, loadFilmsAction))
      .toEqual({films, isDataLoaded: true});
  });

  it(`Reducer should update reviews by load reviews`, () => {
    const state = {filmReviews: []};

    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: filmReviews,
    };

    expect(filmsData(state, loadReviewsAction))
      .toEqual({filmReviews});
  });

  it(`Reducer should update favorites by load favorites`, () => {
    const state = {myFilmsList: []};

    const loadFavoritesAction = {
      type: ActionType.LOAD_MY_FILMS_LIST,
      payload: myFilmsList,
    };

    expect(filmsData(state, loadFavoritesAction))
      .toEqual({myFilmsList});
  });

  it(`Reducer should update promo film by load promo film`, () => {
    const state = {promoFilm: null, isPromoFilmDataLoaded: false};

    const loadPromoAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm,
    };

    expect(filmsData(state, loadPromoAction))
      .toEqual({promoFilm, isPromoFilmDataLoaded: true});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilmsList();

    apiMock
      .onGet(AppRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = fetchComments({id: films[0].id});

    apiMock
      .onGet(`${AppRoute.COMMENTS}/${films[0].id}`)
      .reply(200, [{fake: true}]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavorite();

    apiMock
      .onGet(AppRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MY_FILMS_LIST,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = fetchPromoFilm();

    apiMock
      .onGet(AppRoute.PROMO)
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });
});
