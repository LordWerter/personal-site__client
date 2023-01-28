import { TElementTheme } from '../../../../../definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        fontSize: '14px',
        fontWeight: '600',
        padding: '0 20px',
        width: '100%',
        height: '56px',
        lineHeight: '56px',
        transition: 'all 0.15s ease-in-out',
        color: '#379ef5',
        borderRadius: 'calc(56px / 2)',
        background: '#f7f7f9',

        '&:active': {
            color: '#000000',
            boxShadow: 'none',
        },
        '&:hover': {
            boxShadow: '0 16px 16px -16px rgba(56, 160, 245, 0.38)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
