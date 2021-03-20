import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from "./api/api";
import {checkAuth} from "./api/api-actions";
import {requireAuthorization} from './store/action';
import rootReducer from './store/root-reducer';

const api = createAPI(
    () => store.dispatch(requireAuthorization(false))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={store.getState().promoFilm}
        films={store.getState().films}
        genre={store.getState().genre}
      />
    </Provider>,
    document.querySelector(`#root`)
);
