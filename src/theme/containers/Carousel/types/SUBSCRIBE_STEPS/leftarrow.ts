import { CONTROLS__ARROW_LEFT__WHITE } from '../../../../images';
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
        position: 'relative!important',
        display: 'flex',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        ...BG__IMG_BTN,
        backgroundImage: `url('${CONTROLS__ARROW_LEFT__WHITE}')`,
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
