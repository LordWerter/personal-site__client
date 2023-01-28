import { TElementTheme } from 'definitions';

import { CONTROLS__INFO } from '../../../../images';
/*
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        width: '32px',
        height: '32px',
        backgroundSize: '32px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CONTROLS__INFO}')`,
        transition: '',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
