import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import thunk from "redux-thunk";
// import applyMiddleware from "redux";
// import {createAPI} from "./api/api";

import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

const promoFilmData = {
  promoName: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoReleaseDate: `2014`
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoName={promoFilmData.promoName}
        promoGenre={promoFilmData.promoGenre}
        promoReleaseDate={promoFilmData.promoReleaseDate}
        films={store.getState().films}
        genre={store.getState().genre}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
