/*
import {} from '../../../../images';
import colors from '../../colors';
import { core as Typography } from '../../typography';
*/

import {
    WORK_AREA_WIDTH__MAX,
    SECTION_PADDINGS__X__DESKTOP,
    SECTION_PADDINGS__X__LAPTOP,
    SECTION_PADDINGS__X__MOBILE,
} from '../constants';
import { STICKS__X5ID } from '../images/sticks/index';

export const BG_IMG = {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

export const NAV_PANEL = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 3000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const SECTION__CONTENT_WRAP = {
    position: 'relative',
    display: 'flex',
    width: '100%',
    maxWidth: WORK_AREA_WIDTH__MAX,
    margin: 0,
    padding: '40px 16px',
};

export const CONTAINER__ABSOLUTE = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
};

export const BTN__WRAPPER = {
    position: 'relative',
    width: '100%',
    maxWidth: '320px',
    borderRadius: '8px',
    fontSize: '16px',
    lineHeight: '56px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s linear',
};

export const BTN__ACTION = {
    backgroundColor: '#0088FE',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
};

export const BTN__CANCEL = {
    backgroundColor: '#fff',
    border: '1px solid #0088FE',
    color: '#0088FE',
    fontSize: '16px',
};

export const BTN__DISABLED = {
    backgroundColor: '#CFD4DC',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
};

export const BTN__X5ID_STICK = {
    position: 'absolute',
    top: '-22px',
    right: '16px',
    width: '54px',
    height: '28px',
    transform: 'rotate(-30deg)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${STICKS__X5ID}')`,
};

export const BTN__FULL_WIDTH_LIMITER = {
    width: '100%',
    minWidth: '280px',
    maxWidth: '380px',
};

export const BLOCK__COLUMN = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

export const SECTION_PAD_X_MOBILE = {
    paddingLeft: SECTION_PADDINGS__X__MOBILE,
    paddingRight: SECTION_PADDINGS__X__MOBILE,
};

export const SECTION_PAD_X_LAPTOP = {
    paddingLeft: SECTION_PADDINGS__X__LAPTOP,
    paddingRight: SECTION_PADDINGS__X__LAPTOP,
};

export const SECTION_PAD_X_DESKTOP = {
    paddingLeft: SECTION_PADDINGS__X__DESKTOP,
    paddingRight: SECTION_PADDINGS__X__DESKTOP,
};

export const BG__IMG_BTN = {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
};

export default {
    NAV_PANEL,
};
