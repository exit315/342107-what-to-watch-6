import {AppStateType} from '../../store/root-reducer';

export const getIsErrorShown = (state: AppStateType) => state.userInteraction.isErrorShown;
export const getIsFormDisabled = (state: AppStateType) => state.userInteraction.isFormDisabled;
