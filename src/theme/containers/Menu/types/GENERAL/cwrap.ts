import { WORK_AREA_WIDTH__MAX } from '../../../../constants';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        width: '100%',
        maxWidth: WORK_AREA_WIDTH__MAX,
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        marginTop: '150px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
