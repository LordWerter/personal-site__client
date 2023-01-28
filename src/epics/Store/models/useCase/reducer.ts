/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { TAppModel, TModelAction } from '../../../../definitions';
import { SET_APP_DATA } from './actions';

export const initialState: TAppModel = {
  sizeId: 'mobile',
  langId: 'ru',
  visibility: {
    header: true,
    footer: true,
    mobMenu: false,
    loader: false,
    modal: false,
  },
  modalDescriptor: null,
  limitAccess: false,
};

export const reducer: Reducer<TAppModel> = (state: TAppModel = initialState, action: TModelAction<TAppModel>) => {
  switch (action.type) {
    case SET_APP_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
