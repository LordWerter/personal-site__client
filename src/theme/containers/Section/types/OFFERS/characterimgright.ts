import { CHARACTERS__STEPS_RIGHT } from '../../../../images';
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
        height: '380px',
        width: '50%',
        right: 0,
        bottom: 0,
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CHARACTERS__STEPS_RIGHT}')`,
        backgroundSize: '54%',
        backgroundPosition: 'center',
    },
    mobile: {},
    laptop: {
        display: 'block',
    },
    desktop: {},
};

export default blocks;
