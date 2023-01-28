import { CONTROLS__CROSS } from '../../images';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: `url('${CONTROLS__CROSS}')`,
        top: '40px',
        right: '16px',
        width: '42px',
        height: '42px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
