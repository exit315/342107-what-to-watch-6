import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from '../main-page/main-page.jsx';
import MyList from '../my-list/my-list.jsx';
import Player from '../player/player.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import FilmScreen from '../film-screen/film-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFilmsList} from "../../api/api-actions";
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../utils/const';
import browserHistory from "../../browser-history";

const App = (props) => {
  const {isDataLoaded, onLoadFilmsData, authorizationStatus} = props;

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
  films: PropTypes.array,
  genre: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadFilmsData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  films: DATA.films,
  isDataLoaded: DATA.isDataLoaded,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmsData() {
    dispatch(fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
