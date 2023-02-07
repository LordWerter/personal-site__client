export type {
    TBtnCode,
    TBtnDescriptor,
    TModalDescriptor,
    TModalType,
} from './App';
export type {
    TComponentProps,
    TElementTheme,
    THTMLElementProps,
    TLang,
    TSize,
} from './Component';
export type {
    RootState,
    TAppModel,
    TArticlesModel,
    TCommentsModel,
    TModelAction,
    TModelActionPayload,
    TModelName,
} from './Store';

export type TTextBlockType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P';
export type TLinkType = 'HTTPS__URL' | 'HTTPS__FILE';
export type THandlerMode = 'DEVELOPMENT' | 'SENTRY' | 'FORCE';

export type THeaderBtnKeys = 'BTN__BURGER_MENU';
export type TMenuBtnKeys = 'BTN__CLOSE' | 'BTN__GOTO' | 'BTN__SHOW';
