import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '96px',
        zIndex: 1000,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
    },
    mobile: {
        position: 'absolute',
    },
    laptop: {
        position: 'absolute',
    },
    desktop: {
        position: 'fixed',
    },
};

export default blocks;
