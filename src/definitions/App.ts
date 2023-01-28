export type TBtnCode = 'OK' | 'APPLY' | 'CANCEL' | 'CLOSE' | 'ERROR' | 'SUBMIT';
export type TBtnDescriptor = {
  code: TBtnCode;
  handler: (event?: MouseEvent) => unknown;
};

/**
 * * * Modal Window Types * * *
 */
export type TModalType = 'INFO' | 'ERROR' | 'WARNING' | 'SUCCESS' | 'CONFIRM' | 'FORM';
export type TModalDescriptor = {
  type: TModalType;
  token: string;
  buttons: TBtnDescriptor[];
};
