import { TLang, TSize, TModalDescriptor } from '../..';

export type TAppModel = {
  langId: TLang;
  sizeId: TSize;

  visibility: {
    header: boolean;
    footer: boolean;

    mobMenu: boolean;

    loader: boolean;

    modal: boolean;
  };
  modalDescriptor: TModalDescriptor | null;
  limitAccess: boolean;
};
