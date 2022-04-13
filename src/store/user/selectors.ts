import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state: any) => state[NameSpace.USER].authorizationStatus;
export const getUserEmail = (state: any) => state[NameSpace.USER].userEmail;
