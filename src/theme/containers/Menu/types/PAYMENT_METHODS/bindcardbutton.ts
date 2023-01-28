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
        gap: '16px',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: '44px',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#478ff2',

        '&:hover': {
            opacity: '0.85',
        },
        '&:active': {
            opacity: '1',
            color: '#000000',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
