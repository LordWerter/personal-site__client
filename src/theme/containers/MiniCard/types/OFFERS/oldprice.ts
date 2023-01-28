/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks = {
    core: {
        fontFamily: 'inherit',
        fontSize: '16px',
        position: 'relative',

        '::before': {
            position: 'absolute',
            content: '""',
            left: '0',
            top: '50%',
            right: '5%',
            borderTop: '1px solid',
            transform: 'rotate(-15deg)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
