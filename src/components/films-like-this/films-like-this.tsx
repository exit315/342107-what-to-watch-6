import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FILMS_LIKE_THIS} from '../../utils/const';
import {getFilms, getGenre} from '../../store/films-data/selectors';
import MovieItemCard from '../movie-item-card/movie-item-card';
import {FilmItemType} from '../../types/films-data-types';
import {AppStateType} from '../../store/root-reducer';

type Props = {
  films: FilmItemType[]
  currentFilm: FilmItemType
}

const FilmsLikeThis:React.FC<Props> = ({films, currentFilm}) => {
  const filmsList = films.filter((el) => {
    if (el.name === currentFilm.name) {
      return null;
    } else {
      return el.genre === currentFilm.genre;
    }
  });

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {filmsList.length <= FILMS_LIKE_THIS ?
          filmsList.map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.preview_image}
            previewVideoLink={film.preview_video_link}
          />) :
          filmsList.slice(0, FILMS_LIKE_THIS).map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            id={film.id}
            name={film.name}
            src={film.preview_image}
            previewVideoLink={film.preview_video_link}
          />)
        }
      </div>
    </section>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  genre: getGenre(state),
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(FilmsLikeThis);
