import {AppStateType} from '../../store/root-reducer';

export const getAuthorizationStatus = (state: AppStateType) => state.authorizationStatus;
export const getUserEmail = (state: AppStateType) => state.userEmail;
