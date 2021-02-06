import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {promoName, promoGenre, promoReleaseDate, movieName, movieId} = props;

  return (
    <MainPage
      promoName={promoName}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      movieName={movieName}
      movieId={movieId}
    />
  );
};

App.propTypes = {
  promoName: PropTypes.string,
  promoGenre: PropTypes.string,
  promoReleaseDate: PropTypes.string,
  movieName: PropTypes.string,
  movieId: PropTypes.number
};

export default App;
