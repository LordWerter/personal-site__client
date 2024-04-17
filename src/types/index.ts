export type { BtnDescriptor, ModalDescriptor } from './App';
export type { ComponentProps, DomNodeProps } from './Component';
export type {
    RootState,
    SliceAction,
    SliceActionPayload,
    App,
    Article,
    Comment,
} from './Store';
export type { DomNodeTheme } from './Theme';

export type LinkType = 'HTTPS__URL' | 'HTTPS__FILE';
export type HandlerMode = 'DEVELOPMENT' | 'SENTRY' | 'FORCE';

export type HeaderBtnKeys = 'BTN__BURGER_MENU';
export type MenuBtnKeys = 'BTN__CLOSE' | 'BTN__GOTO' | 'BTN__SHOW';
