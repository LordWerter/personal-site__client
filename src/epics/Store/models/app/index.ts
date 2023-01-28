import { createSlice } from '@reduxjs/toolkit';
import AppReducer, { initialState } from './reducer';

export const appSlice = createSlice({
  name: 'app',
  initialState: { ...initialState },
  reducers: {
    AppReducer,
  },
});
