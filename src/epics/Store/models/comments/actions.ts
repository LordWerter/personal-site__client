import { ActionCreator } from 'redux';
import { TModelAction, TModelActionPayload, TAppModel } from '../../../../definitions';

export const SET_APP_DATA = `APP/SET_APP_DATA`;
export const setAppData: ActionCreator<TModelAction<TAppModel>> = (payload: TModelActionPayload<TAppModel>) => ({
  type: SET_APP_DATA,
  payload,
});

const appDataActionsMap = {
  setAppData,
};

export default appDataActionsMap;
