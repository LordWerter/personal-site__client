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
        alignItems: 'center',
        width: '100%',
        paddingTop: '90px',
        marginBottom: '-120px',
        zIndex: 1,
    },
    mobile: {
        marginBottom: '-140px',
    },
    laptop: {},
    desktop: {},
};

export default blocks;
