import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        position: 'absolute',
        top: '16px',
        right: '-1px',
        bottom: '40px',
        width: '1px',
        boxShadow: '0 0 6px #000',
        zIndex: 100,
        transition: 'all 1s ease-in-out 0s',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
