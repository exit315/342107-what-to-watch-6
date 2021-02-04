import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {promoName, promoGenre, promoReleaseDate} = props;

  return (
    <MainPage
      promoName={promoName}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
    />
  );
};

App.propTypes = {
  promoName: PropTypes.string,
  promoGenre: PropTypes.string,
  promoReleaseDate: PropTypes.string,
};

export default App;
