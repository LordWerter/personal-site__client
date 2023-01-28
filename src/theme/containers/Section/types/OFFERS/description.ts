import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        fontWeight: 600,
        fontSize: '18px',
        width: '100%',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        paddingBottom: '36px',
    },
    mobile: {
        textAlign: 'left',
    },
    laptop: {
        textAlign: 'center',
    },
    desktop: {
        textAlign: 'center',
    },
};

export default blocks;
