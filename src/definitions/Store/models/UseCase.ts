export type TUseCaseName = 'SINGLE';

export type TUseStepName = 'ACCESS_KEY_PREPARE';

export type TUseCaseSeq = TUseStepName[];

export type TUseCaseMap = {
  [key in TUseCaseName]: TUseCaseSeq;
};
