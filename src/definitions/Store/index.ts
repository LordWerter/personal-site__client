import { store } from '../../epics/Store';

export type RootState = ReturnType<typeof store.getState>;
export type { TModelAction, TModelActionPayload, TModelName } from './Model';
export type { TAppModel, TArticlesModel, TCommentsModel } from './models';
