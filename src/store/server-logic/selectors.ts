import {AppStateType} from '../../store/root-reducer';

export const getServerStatus = (state: AppStateType) => state.serverUnavailable;
