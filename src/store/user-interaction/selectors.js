import {NameSpace} from '../root-reducer';

export const getMyFilmsList = (state) => state[NameSpace.INTERACTION].myFilmsList;
export const getStatusCode = (state) => state[NameSpace.INTERACTION].statusCode;
export const getIsFormDisabled = (state) => state[NameSpace.INTERACTION].isFormDisabled;
