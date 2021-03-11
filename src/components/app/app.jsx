import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from '../main-page/main-page.jsx';
import MyList from '../my-list/my-list.jsx';
import Player from '../player/player.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import FilmScreen from '../film-screen/film-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFilmsList, fetchPromoFilm} from "../../api/api-actions";
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../utils/const';

const App = (props) => {
  const {films, isDataLoaded, onLoadData, authorizationStatus} = props;
  const [film] = films;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}>
          {authorizationStatus ? <MainPage /> : <SignIn />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => <MyList />}>
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={() => <AddReview />}>
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            film={film}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object,
  films: PropTypes.array,
  genre: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoFilm());
    dispatch(fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
