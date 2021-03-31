import {NameSpace} from '../root-reducer';

export const getServerStatus = (state) => state[NameSpace.SERVER_LOGIC].serverUnavailable;
