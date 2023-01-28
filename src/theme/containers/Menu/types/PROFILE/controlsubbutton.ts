import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        margin: '0 auto',
        background: 'white',
        fontWeight: '600',
        fontSize: '14px',
        height: '56px',
        lineHeight: '56px',
        borderRadius: 'calc(56px / 2)',
        border: 'none',
        padding: '0 52px',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#379ef5',
        transition: 'all 0.15s ease-in-out',

        '&:active': {
            color: '#000000',
            boxShadow: 'none',
        },
        '&:hover': {
            background: 'white',
            boxShadow: '0 16px 16px -16px rgba(56, 160, 245, 0.38)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
