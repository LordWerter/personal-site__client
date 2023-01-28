import { CHARACTERS__PARTNERS_BOTTOM } from '../../../../images';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        display: 'none',
        position: 'absolute',
        height: '280px',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CHARACTERS__PARTNERS_BOTTOM}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    mobile: {},
    laptop: {},
    desktop: {
        display: 'block',
    },
};

export default blocks;
