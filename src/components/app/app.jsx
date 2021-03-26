import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../utils/const';
import {fetchFilmsList} from "../../api/api-actions";
import {getIsDataLoaded} from '../../store/films-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import FilmScreen from '../film-screen/film-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';

const App = ({isDataLoaded, onLoadFilmsData, authorizationStatus}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadFilmsData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}>
          {authorizationStatus ? <Redirect to={AppRoute.ROOT} /> : <SignIn />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => <MyList />} />
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={() => <AddReview />}
        />
        <Route
          exact
          path={AppRoute.PLAYER}
          render={({history}) => (
            <Player
              onExitPlayerClick={() => history.goBack()}
            />
          )}
        />
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
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadFilmsData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmsData() {
    dispatch(fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
