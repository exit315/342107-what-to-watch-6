import {AppStateType} from '../../store/root-reducer';

export const getIsErrorShown = (state: AppStateType) => state.isErrorShown;
export const getIsFormDisabled = (state: AppStateType) => state.isFormDisabled;
