import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import AddReviewForm from '../add-review-form/add-review-form.jsx';
import {AppRoute} from '../../utils/const';
import Header from '../header/header';
import {getFilms} from '../../store/films-data/selectors';

const AddReview = ({films, match}) => {
  const currentFilm = films.find((el) => el.id === parseInt(match.params.id, 10));

  const breadcrumbs = () => {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`${AppRoute.FILMS}/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={currentFilm.background_image} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isUserBlockShown={true} breadcrumbs={breadcrumbs()}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm id={currentFilm.id} />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export default connect(mapStateToProps, null)(withRouter(AddReview));
