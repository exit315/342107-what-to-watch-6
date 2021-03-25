import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createGenreTypesList} from '../../utils/utils';
import {connect} from 'react-redux';
import {changeGenre} from '../../store/action';
import {GENRE_TYPE_ALL, MAX_GENRE_COUNT} from '../../utils/const';
import {getFilms, getGenre} from '../../store/films-data/selectors';

const GenreTabs = ({films, genre, onTabClick}) => {
  const createFilterTypesList = () => {
    let filterTypesList = Array.from(createGenreTypesList(films));

    if (filterTypesList.length > MAX_GENRE_COUNT) {
      filterTypesList = filterTypesList.slice(0, MAX_GENRE_COUNT);
    }

    filterTypesList.unshift(GENRE_TYPE_ALL);

    return filterTypesList;
  };

  const renderGenreTypesList = () => {
    const genreTypesList = [];

    createFilterTypesList().forEach((item) => {
      genreTypesList.push(
          <li className={`catalog__genres-item ${genre === item ? `catalog__genres-item--active` : ``}`} onClick={onTabClick} key={item}>
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

GenreTabs.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(evt) {
    dispatch(changeGenre(evt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs);
