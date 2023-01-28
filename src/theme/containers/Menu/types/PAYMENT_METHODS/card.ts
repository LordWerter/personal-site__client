import { TElementTheme } from '../../../../../definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em 0',
        color: '#1e2122',

        '&:hover': {
            color: '#478ff2',
        },
        '&:active': {
            color: '#000000',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
