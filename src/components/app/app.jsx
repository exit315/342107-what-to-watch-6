import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MyList from '../my-list/my-list.jsx';
import Player from '../player/player.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import FilmScreen from '../film-screen/film-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';

const App = (props) => {
  const {promoName, promoGenre, promoReleaseDate, films, genre} = props;
  const [film] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            promoName={promoName}
            promoGenre={promoGenre}
            promoReleaseDate={promoReleaseDate}
            films={films}
            genre={genre}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList
            films={films}
          />
        </Route>
        <Route exact path="/films/:id">
          <FilmScreen
            films={films}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview
            films={films}
          />
        </Route>
        <Route exact path="/player/:id">
          <Player
            film={film}
          />
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
};

export default App;
