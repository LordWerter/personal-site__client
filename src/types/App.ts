import { BtnCode, ModalType } from 'enums';
export interface BtnDescriptor {
    code: keyof typeof BtnCode;
    handler: (event?: MouseEvent) => unknown;
};

/**
 * * * Modal Window Types * * *
 */
export type ModalDescriptor = {
    type: keyof typeof ModalType;
    token: string;
    buttons: BtnDescriptor[];
};
