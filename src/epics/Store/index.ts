import { configureStore } from '@reduxjs/toolkit';

import {
    rootReducer,
    setAppData as setAppDataAction,
    setArticlesData as setArticlesDataAction,
    setCommentsData as setCommentsDataAction,
} from './models';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
};

export const store = createStore();
const dispatch = store.dispatch;
export const setAppData = (payload: any) => dispatch(setAppDataAction(payload));
export const setArticlesData = (payload: any) => dispatch(setArticlesDataAction(payload));
export const setCommentsData = (payload: any) => dispatch(setCommentsDataAction(payload));

export default store;
