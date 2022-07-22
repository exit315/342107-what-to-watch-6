import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FILM_COUNT_PER_STEP, INITIAL_FILM_COUNT, GENRE_TYPE_ALL} from '../../utils/const';
import {filterFilmsByGenre} from '../../utils/utils';
import {getFilms, getGenre} from '../../store/films-data/selectors';
import MovieItemCard from '../movie-item-card/movie-item-card';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {FilmItemType} from '../../types/films-data-types';
import {AppStateType} from '../../store/root-reducer';

type Props = {
  films: FilmItemType[]
  genre: string
}

const FilmsList:React.FC<Props> = ({films, genre}) => {
  const [filmCount, setFilmCount] = useState(FILM_COUNT_PER_STEP);
  const handleFilmCountChange = () => {
    setFilmCount(filmCount + FILM_COUNT_PER_STEP);
  };

  const renderFilteredFilmsList = () => {
    if (genre === GENRE_TYPE_ALL) {
      return films;
    } else {
      let filteredFilms = filterFilmsByGenre(films, genre);
      if (filmCount !== FILM_COUNT_PER_STEP) {
        setFilmCount(FILM_COUNT_PER_STEP);
      }
      return filteredFilms;
    }
  };

  const curentFilms = renderFilteredFilmsList().slice(INITIAL_FILM_COUNT, filmCount);

  return (
    <>
      <div className="catalog__movies-list">
        {curentFilms.map((film: FilmItemType) => <MovieItemCard
          key={`${film.name}-${film.id}`}
          id={film.id}
          name={film.name}
          src={film.preview_image}
          previewVideoLink={film.preview_video_link}
        />)}
      </div>

      <ShowMoreBtn handleFilmCountChange={handleFilmCountChange} showBtn={curentFilms.length >= filmCount}/>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  genre: getGenre(state),
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(FilmsList);
