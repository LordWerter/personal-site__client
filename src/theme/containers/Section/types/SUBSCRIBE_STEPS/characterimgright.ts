import { CHARACTERS__STEPS_RIGHT, CHARACTERS__STEPS_RIGHT_CLOSE } from '../../../../images';
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
        width: '30%',
        height: '322px',
        right: 0,
        top: '-150px',
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CHARACTERS__STEPS_RIGHT}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    mobile: {},
    laptop: {},
    desktop: {
        display: 'block',
        height: '253px',
        backgroundImage: `url('${CHARACTERS__STEPS_RIGHT_CLOSE}')`,
    },
};

export default blocks;
