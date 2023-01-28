import { TAppModel, TArticlesModel } from './models';

export type { TModelName, TModelActionPayload, TModelAction } from './Model';
export type { TAppModel, TArticlesModel, TUseCaseName, TUseStepName, TUseCaseSeq, TUseCaseMap } from './models';

export type TState = {
  App: TAppModel;
  Articles: TArticlesModel;
};
