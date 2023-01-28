import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        fontWeight: '600',
        fontSize: '36px',
        paddingBottom: '24px',
        whiteSpace: 'pre-line',
    },
    mobile: {
        textAlign: 'left',
    },
    laptop: {
        textAlign: 'center',
    },
    desktop: {
        paddingBottom: '32px',
        textAlign: 'center',
    },
};

export default blocks;
