import en from './en';
import ru from './ru';

export type TLangMap = {
  en: typeof en;
  ru: typeof ru;
};

export const lang: TLangMap = {
    en,
    ru,
};

export default lang;
