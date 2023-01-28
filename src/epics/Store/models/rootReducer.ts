/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';

import { AppReducer, ArticlesReducer } from '.';

const createRootReducer = () =>
  combineReducers({
    App: AppReducer,
    Articles: ArticlesReducer,
  });

export default createRootReducer;
