/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

import { FLEX_GAP } from '../../../../constants';

export const blocks = {
    core: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
    },
    mobile: {
        width: '100%',
    },
    laptop: {
        width: `calc(50% - ${FLEX_GAP} / 2)`,
    },
    desktop: {
        width: `calc(32.3% - ${FLEX_GAP} / 3)`,
    },
};

export default blocks;
