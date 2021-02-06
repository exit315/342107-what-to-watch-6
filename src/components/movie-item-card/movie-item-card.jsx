import React from 'react';
import PropTypes from 'prop-types';

const Film = (props) => {
  const {movieName} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
      </h3>
    </article>
  );
};

Film.propTypes = {
  movieName: PropTypes.string
};

export default Film;
