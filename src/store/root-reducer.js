import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';
import {userInteraction} from './user-interaction/user-interaction';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  INTERACTION: `INTERACTION`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.USER]: user,
  [NameSpace.INTERACTION]: userInteraction,
});
