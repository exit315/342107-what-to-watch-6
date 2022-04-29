import React, {useEffect} from 'react';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';

import {AppRoute} from '../../utils/const';
import {fetchFilmsList} from "../../api/api-actions";

import {getServerStatus} from '../../store/server-logic/selectors';
import {getIsDataLoaded, getFilms} from '../../store/films-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppStateType} from '../../store/root-reducer';

import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import FilmScreen from '../film-screen/film-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import ServerUnavailableScreen from '../server-unavailable-screen/server-unavailable-screen';
import {FilmItemType} from '../../types/films-data-types';

type MapStatePropsType = {
  isDataLoaded: boolean
  authorizationStatus: boolean
  serverUnavailable: boolean
  films: Array<FilmItemType>
}

type MapDispatchPropsType = {
  onLoadFilmsData: () => void
}

const App: React.FC<MapStatePropsType & MapDispatchPropsType & RouteComponentProps> = ({isDataLoaded, onLoadFilmsData, authorizationStatus, serverUnavailable, films}) => {
  if (serverUnavailable) {
    return (
      <ServerUnavailableScreen />
    );
  }

  useEffect(() => {
    console.log(films);

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
        {/* <Route
          exact
          path={AppRoute.PLAYER}
        >
          <Player /> // требует films
        </Route> */}
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isDataLoaded: getIsDataLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
  serverUnavailable: getServerStatus(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => ({
  onLoadFilmsData() {
    dispatch(fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
