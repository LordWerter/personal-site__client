import { TAppModel } from 'definitions';

import { createSlice } from '@reduxjs/toolkit';

export const initialState: TAppModel = {
  sizeId: 'mobile',
  langId: 'ru',
  showHeader: true,
  showFooter: true,
  showMenu: false,
  showLoader: false,

  showModal: false,
  modalDescriptor: null,

  showToast: false,
  toastDescriptor: null,

  limitAccess: false,
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setAppData: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };

      return newState;
    },
  },
});

export const { setAppData } = appSlice.actions;
export const appReducer = appSlice.reducer;
export default appSlice;
