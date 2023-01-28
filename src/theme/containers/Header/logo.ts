import { LOGOS__LOGO_FULL } from '../../images';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '120px',
        backgroundImage: `url('${LOGOS__LOGO_FULL}')`,
        width: '136px',
        height: '40px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
    },
    mobile: {
        padding: '10px',
        borderRadius: '12px',
    },
    laptop: {},
    desktop: {},
};

export default blocks;
