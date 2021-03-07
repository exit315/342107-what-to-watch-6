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
import {fetchFilmsList} from "../../api/api-actions";
import PrivateRoute from '../private-route/private-route';

const App = (props) => {
  const {promoName, promoGenre, promoReleaseDate, films, isDataLoaded, onLoadData, authorizationStatus} = props;
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
        <Route exact path="/">
          <MainPage
            promoName={promoName}
            promoGenre={promoGenre}
            promoReleaseDate={promoReleaseDate}
          />
        </Route>
        <Route
          exact
          path="/login">
          {authorizationStatus ? <MainPage
            promoName={promoName}
            promoGenre={promoGenre}
            promoReleaseDate={promoReleaseDate}
          /> : <SignIn />}
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyList films={films} />}>
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={() => <AddReview films={films} />}>
        </PrivateRoute>
        <Route exact path="/player/:id">
          <Player
            film={film}
          />
        </Route>
        <Route exact path="/films/:id">
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
  promoName: PropTypes.string,
  promoGenre: PropTypes.string,
  promoReleaseDate: PropTypes.string,
  films: PropTypes.array,
  genre: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
