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
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '96%',
        maxWidth: '700px',
        minHeight: '300px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: '0px 16px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
