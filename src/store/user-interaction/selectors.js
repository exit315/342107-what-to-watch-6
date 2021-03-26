import {NameSpace} from '../root-reducer';

export const getIsErrorShown = (state) => state[NameSpace.INTERACTION].isErrorShown;
export const getIsFormDisabled = (state) => state[NameSpace.INTERACTION].isFormDisabled;
