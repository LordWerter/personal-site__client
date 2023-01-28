import { LOGOS__X5_FULL, LOGOS__X5_SMALL } from '../../images';
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
        backgroundImage: `url('${LOGOS__X5_FULL}')`,
        width: '100px',
        height: '66px',
        marginBottom: '24px',
    },
    mobile: {
        backgroundImage: `url('${LOGOS__X5_SMALL}')`,
        width: '72x',
        height: '48px',
    },
    laptop: {},
    desktop: {},
};

export default blocks;
