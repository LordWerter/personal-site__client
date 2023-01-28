import { WORK_AREA_WIDTH__MAX } from 'theme/constants';
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
        alignItems: 'center',
        gap: '16px',
        fontSize: '18px',
        fontWeight: '600',
        padding: '0 24px',
        width: '100%',
        maxWidth: WORK_AREA_WIDTH__MAX,
        height: '88px',
        transition: 'all 0.15s ease',
        color: '#4a5873',
        borderBottom: '1px solid rgba(247, 247, 249, 1)',

        '&:active': {
            color: '#4a5873',
        },
        '&:hover': {
            color: '#000000',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
