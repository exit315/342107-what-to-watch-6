import {combineReducers} from 'redux';
import {serverLogic} from './server-logic/server-logic';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';
import {userInteraction} from './user-interaction/user-interaction';

export const NameSpace = {
  SERVER_LOGIC: `SERVER_LOGIC`,
  DATA: `DATA`,
  USER: `USER`,
  INTERACTION: `INTERACTION`,
};

export const rootReducer = combineReducers({
  serverLogic: serverLogic,
  filmsData: filmsData,
  user: user,
  userInteraction: userInteraction,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
