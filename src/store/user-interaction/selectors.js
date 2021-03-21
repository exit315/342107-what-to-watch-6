import {NameSpace} from '../root-reducer';

export const getMyFilmsList = (state) => state[NameSpace.INTERACTION].myFilmsList;
export const getSendStatusCode = (state) => state[NameSpace.INTERACTION].sendStatusCode;
export const getStatus = (state) => state[NameSpace.INTERACTION].status;
