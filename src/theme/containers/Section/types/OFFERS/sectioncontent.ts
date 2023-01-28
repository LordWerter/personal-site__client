import { SECTION_PADDINGS__Y_BOTTOM } from '../../../../constants';
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
    mobile: {},
    laptop: { paddingLeft: '24px', paddingRight: '24px' },
    desktop: { paddingLeft: '24px', paddingRight: '24px' },
};

export default blocks;
