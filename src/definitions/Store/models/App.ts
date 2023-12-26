import { TLang, TModalDescriptor, TSize } from '../../';

export type TAppModel = {
    langId: TLang;
    sizeId: TSize;

    showHeader: boolean;
    showMenu: boolean;
    showFooter: boolean;

    showLoader: boolean;

    showModal: boolean;
    modalDescriptor: TModalDescriptor | null;

    showToast: boolean;
    toastDescriptor: TModalDescriptor | null;

    limitAccess: boolean;
};
