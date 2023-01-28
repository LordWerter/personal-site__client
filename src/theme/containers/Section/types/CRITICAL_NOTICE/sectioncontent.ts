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
        width: '100%',
        maxWidth: '1000px',
        flexDirection: 'column',
        position: 'relative',
        paddingBottom: '24px',
        background: '#FFF',
    },
    mobile: {},
    laptop: { paddingLeft: '24px', paddingRight: '24px' },
    desktop: { paddingLeft: '24px', paddingRight: '24px' },
};

export default blocks;
