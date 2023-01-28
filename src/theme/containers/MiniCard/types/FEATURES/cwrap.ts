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
        justifyContent: 'space-between',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '16px',
        height: '170px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundColor: '#fff',
        backgroundSize: 'contain',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
    },
    mobile: {
        width: '100%',
        backgroundPosition: 'right center',
    },
    laptop: {
        width: `calc(50% - ${FLEX_GAP} / 2)`,
    },
    desktop: {
        width: `calc(32.9% - ${FLEX_GAP} / 2)`,
        backgroundPosition: '122% center',
    },
};

export default blocks;
