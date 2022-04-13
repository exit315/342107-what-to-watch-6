import {NameSpace} from '../root-reducer';

export const getServerStatus = (state: any) => state[NameSpace.SERVER_LOGIC].serverUnavailable;
