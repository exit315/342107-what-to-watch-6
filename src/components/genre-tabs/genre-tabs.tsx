import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GENRE_TYPE_ALL, MAX_GENRE_COUNT} from '../../utils/const';
import {createGenreTypesList} from '../../utils/utils';
import {changeGenre} from '../../store/action';
import {getFilms, getGenre} from '../../store/films-data/selectors';
import {FilmItemType} from '../../types/films-data-types';
import {AppStateType} from '../../store/root-reducer';

type Props = {
  films: FilmItemType[]
  genre: string
  onTabClick: (tab: string) => void
}

const GenreTabs:React.FC<Props> = ({films, genre, onTabClick}) => {
  const createFilterTypesList = () => {
    let filterTypesList = Array.from(createGenreTypesList(films));

    if (filterTypesList.length > MAX_GENRE_COUNT) {
      filterTypesList = filterTypesList.slice(0, MAX_GENRE_COUNT);
    }

    filterTypesList.unshift(GENRE_TYPE_ALL);

    return filterTypesList;
  };

  const renderGenreTypesList = () => {
    const genreTypesList: React.ReactElement[] = [];

    createFilterTypesList().forEach((item) => {
      genreTypesList.push(
        <li className={`catalog__genres-item ${genre === item ? `catalog__genres-item--active` : ``}`} onClick={() => onTabClick(item)} key={item}>
          <Link to="#" className="catalog__genres-link">{item}</Link>
        </li>);
    });

    return genreTypesList;
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {renderGenreTypesList()}
      </ul>

    </React.Fragment>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  genre: getGenre(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onTabClick(tab: string) {
    dispatch(changeGenre(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs);
