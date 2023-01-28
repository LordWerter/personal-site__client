import { Action } from 'redux';

export type TModelName = 'APP' | 'ARTICLES';

export type TModelActionPayload<TModelState> = Partial<TModelState>;

export type TModelAction<TModelState> = Action & {
  type: string;
  payload?: TModelActionPayload<TModelState>;
};
