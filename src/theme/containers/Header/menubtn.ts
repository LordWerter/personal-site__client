import { CONTROLS__BURGER_MENU } from '../../images';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        width: '38px',
        height: '38px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('${CONTROLS__BURGER_MENU}')`,
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
