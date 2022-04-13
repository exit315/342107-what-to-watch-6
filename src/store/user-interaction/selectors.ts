import {NameSpace} from '../root-reducer';

export const getIsErrorShown = (state: any) => state[NameSpace.INTERACTION].isErrorShown;
export const getIsFormDisabled = (state: any) => state[NameSpace.INTERACTION].isFormDisabled;
