import { NAV_PANEL } from '../../mixins';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        ...NAV_PANEL,
        top: '96px',
        transition: 'all 0.35s ease',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
