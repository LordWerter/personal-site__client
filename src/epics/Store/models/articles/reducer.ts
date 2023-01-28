/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { TArticlesModel, TModelAction } from '../../../../definitions';
import { SET_ARTICLES_DATA } from './actions';

export const initialState: TArticlesModel = {
  items: null,
};

export const reducer: Reducer<TArticlesModel> = (
  state: TArticlesModel = initialState,
  action: TModelAction<TArticlesModel>,
) => {
  switch (action.type) {
    case SET_ARTICLES_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
