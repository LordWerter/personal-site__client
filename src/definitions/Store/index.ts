import { store } from '../../epics/Store';
import {
    TAppModel,
    TArticlesModel,
} from './models';

export type RootState = ReturnType<typeof store.getState>;
export type { TModelAction, TModelActionPayload, TModelName } from './Model';
export type {
    TAppModel,
    TArticlesModel,
    TUseCaseMap,
    TUseCaseName,
    TUseCaseSeq,
    TUseStepName,
} from './models';

export type TState = {
  App: TAppModel;
  Articles: TArticlesModel;
};
