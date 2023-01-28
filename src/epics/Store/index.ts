import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { TState } from '../../definitions';
import { AppReducer, ArticlesReducer, InitialAppModelState, InitialArticlesModelState } from './models';

export { setAppData, AppReducer, setArticlesData, ArticlesReducer } from './models';

const createRootReducer = () =>
  combineReducers({
    App: AppReducer,
    Articles: ArticlesReducer,
  });

const createStore = (): Store<TState> => {
  const rootReducer = createRootReducer();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      App: { ...InitialAppModelState },
      Articles: { ...InitialArticlesModelState },
    },
    devTools: true,
  });

  return store;
};

export default createStore();
