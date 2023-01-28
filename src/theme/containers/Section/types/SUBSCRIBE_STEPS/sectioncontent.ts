import { SECTION_PADDINGS__Y_TOP } from '../../../../constants';
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
        paddingTop: SECTION_PADDINGS__Y_TOP,
    },
    mobile: {
        padding: '16px',
    },
    laptop: { padding: '24px 24px 40px' },
    desktop: { padding: '24px 24px 40px' },
};

export default blocks;
