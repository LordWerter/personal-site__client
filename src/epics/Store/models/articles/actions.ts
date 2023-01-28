import { ActionCreator } from 'redux';
import { TModelAction, TModelActionPayload, TArticlesModel } from '../../../../definitions';

export const SET_ARTICLES_DATA = `ARTICLES/SET_APP_DATA`;

export const setArticlesData: ActionCreator<TModelAction<TArticlesModel>> = (
  payload: TModelActionPayload<TArticlesModel>,
) => ({
  type: SET_ARTICLES_DATA,
  payload,
});

const appDataActionsMap = {
  setArticlesData,
};

export default appDataActionsMap;
