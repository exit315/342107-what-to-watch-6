import {NameSpace} from '../root-reducer';

export const getMyFilmsList = (state) => state[NameSpace.INTERACTION].myFilmsList;
export const getIsErrorShown = (state) => state[NameSpace.INTERACTION].isErrorShown;
export const getIsFormDisabled = (state) => state[NameSpace.INTERACTION].isFormDisabled;
