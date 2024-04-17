import { ModalDescriptor } from 'types';
import { LangId, SizeId } from 'enums';

export type App = {
    langId: keyof typeof LangId;
    sizeId: keyof typeof SizeId;

    showHeader: boolean;
    showMenu: boolean;
    showFooter: boolean;

    showLoader: boolean;

    showModal: boolean;
    modalDescriptor: ModalDescriptor | null;

    showToast: boolean;
    toastDescriptor: ModalDescriptor | null;

    limitAccess: boolean;
};
