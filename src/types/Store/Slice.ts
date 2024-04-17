import { Action } from 'redux';

export type SliceActionPayload<TModelState> = Partial<TModelState>;

export type SliceAction<TModelState> = Action & {
    type: string;
    payload?: SliceActionPayload<TModelState>;
};
