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
        width: '230px',
        height: '300px',
        right: '-24px',
        top: '-204px',
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    mobile: {},
    laptop: {
        display: 'block',
    },
    desktop: {
        display: 'block',
    },
};

export default blocks;
