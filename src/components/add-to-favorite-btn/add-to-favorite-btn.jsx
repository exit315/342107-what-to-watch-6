import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeFavorite} from "../../api/api-actions";

const AddToFavoriteBtn = ({onFavoriteClick, currentFilm}) => {
  const handleFavoriteClick = () => {
    onFavoriteClick({
      id: currentFilm.id,
      status: +(!currentFilm.is_favorite),
    });
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick} key={currentFilm.id}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddToFavoriteBtn.propTypes = {
  currentFilm: PropTypes.object.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(changeFavorite(id, status));
  }
});

export default connect(null, mapDispatchToProps)(AddToFavoriteBtn);
