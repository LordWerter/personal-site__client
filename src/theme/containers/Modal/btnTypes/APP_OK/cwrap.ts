import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96%',
        maxWidth: '180px',
        lineHeight: '40px',
        border: '2px solid #0088FE',
        borderRadius: '20px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3) inset',
        background: 'transparent',
        overflow: 'hidden',
        transition: 'all .4s ease',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: '#0088FE',

        '&:hover': {
            background: '#fff',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
