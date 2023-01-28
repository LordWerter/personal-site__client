import { CONTROLS__ARROW_RIGHT } from '../../../../images';
import { BG__IMG_BTN } from '../../../../mixins';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        display: 'flex',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        ...BG__IMG_BTN,
        backgroundImage: `url('${CONTROLS__ARROW_RIGHT}')`,
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
