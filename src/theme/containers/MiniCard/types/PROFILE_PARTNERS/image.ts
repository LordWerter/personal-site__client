import { TElementTheme } from 'definitions';
import { BG_IMG } from 'theme/mixins';
/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        ...BG_IMG,
        width: '68px',
        height: '68px',
        marginBottom: '12px',
        boxShadow: 'rgb(87 87 86 / 35%) 0px 2px 6px',
        borderRadius: '16px',
        overflow: 'hidden',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
