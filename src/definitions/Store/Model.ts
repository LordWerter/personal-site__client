import { Action } from 'redux';

export type TModelName = 'App' | 'Articles' | 'Comments';

export type TModelActionPayload<TModelState> = Partial<TModelState>;

export type TModelAction<TModelState> = Action & {
  type: string;
  payload?: TModelActionPayload<TModelState>;
};
