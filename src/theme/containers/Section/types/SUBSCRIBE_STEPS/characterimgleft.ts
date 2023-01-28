import { CHARACTERS__STEPS_LEFT } from '../../../../images';
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
        height: '140px',
        left: 0,
        top: '-108px',
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CHARACTERS__STEPS_LEFT}')`,
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
