import {
    SECTION_PADDINGS__Y_TOP,
    SECTION_PADDINGS__Y_BOTTOM,
    SECTION_PADDINGS__Y_TOP__DESKTOP,
} from '../../../../constants';
import { SECTION__CONTENT_WRAP } from '../../../../mixins';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        ...SECTION__CONTENT_WRAP,
        flexDirection: 'column',
        position: 'relative',
        paddingBottom: SECTION_PADDINGS__Y_BOTTOM,
    },
    mobile: {
        padding: '16px',
        paddingTop: SECTION_PADDINGS__Y_TOP,
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
    },
    laptop: { padding: '24px 24px 40px' },
    desktop: {
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '280px',
        paddingTop: SECTION_PADDINGS__Y_TOP__DESKTOP,
    },
};

export default blocks;
