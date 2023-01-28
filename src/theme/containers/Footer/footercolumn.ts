import { TElementTheme } from 'definitions';

import { SECTION_PADDINGS__Y_TOP } from 'theme/constants';
import { SECTION_PAD_X_MOBILE } from 'theme/mixins';

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
        padding: '60px 24px 24px',
        alignItems: 'center',
        width: '1000px',
    },

    mobile: { ...SECTION_PAD_X_MOBILE, paddingTop: SECTION_PADDINGS__Y_TOP },
    laptop: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    desktop: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default blocks;
