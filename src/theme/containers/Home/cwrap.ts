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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 0,
        padding: 0,
        margin: 0,
        width: '100%',
        paddingTop: '94px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
