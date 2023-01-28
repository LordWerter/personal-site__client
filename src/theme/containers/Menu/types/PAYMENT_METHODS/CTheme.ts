import button from './changebutton';
import cwrap from './cwrap';
import card from './card';
import cardcontent from './cardcontent';
import title from './title';
import subtitle from './subtitle';
import cardslist from './cardslist';
import maincardicon from './maincardicon';
import cardicon from './cardicon';
import nonmaincardicon from './nonmaincardicon';
import changebutton from './changebutton';
import bindcardbutton from './bindcardbutton';
import bindcardicon from './bindcardicon';
import deletecardicon from './deletecardicon';

export interface ICTheme {
    cwrap: typeof cwrap;
    cardslist: typeof cardslist;
    button: typeof button;
    card: typeof card;
    cardcontent: typeof cardcontent;
    title: typeof title;
    subtitle: typeof subtitle;
    cardicon: typeof cardicon;
    maincardicon: typeof maincardicon;
    nonmaincardicon: typeof nonmaincardicon;
    changebutton: typeof changebutton;
    bindcardbutton: typeof bindcardbutton;
    bindcardicon: typeof bindcardicon;
    deletecardicon: typeof deletecardicon;
}

export const CTheme: ICTheme = {
    cwrap,
    cardslist,
    button,
    card,
    cardcontent,
    title,
    subtitle,
    cardicon,
    maincardicon,
    nonmaincardicon,
    changebutton,
    bindcardbutton,
    bindcardicon,
    deletecardicon,
};

export default CTheme;
