import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const promoFilmData = {
  promoName: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoReleaseDate: `2014`
};

ReactDOM.render(
    <App
      promoName={promoFilmData.promoName}
      promoGenre={promoFilmData.promoGenre}
      promoReleaseDate={promoFilmData.promoReleaseDate}
    />,
    document.querySelector(`#root`)
);
