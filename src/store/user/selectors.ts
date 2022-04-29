import {AppStateType} from '../../store/root-reducer';

export const getAuthorizationStatus = (state: AppStateType) => state.user.authorizationStatus;
export const getUserEmail = (state: AppStateType) => state.user.userEmail;
