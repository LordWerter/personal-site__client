import { TCommentsModel } from 'definitions';

import { createSlice } from '@reduxjs/toolkit';

export const initialState: TCommentsModel = {
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

export const commentsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {
    setCommentsData: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };

      return newState;
    },
  },
});

export const { setCommentsData } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
export default commentsSlice;
