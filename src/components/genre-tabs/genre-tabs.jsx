import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createGenreTypesList} from '../../utils/utils';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {GenreType} from '../../utils/const';

const GenreTabs = (props) => {
  const {films, genre, onTabClick} = props;

  const filterTypesList = Array.from(createGenreTypesList(films));
  filterTypesList.unshift(GenreType.ALL);


  const renderGenreTypesList = () => {
    const genreTypesList = [];

    filterTypesList.forEach((item) => {
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
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(evt) {
    dispatch(ActionCreator.changeGenre(evt));
  }
});

export {GenreTabs};
export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs);