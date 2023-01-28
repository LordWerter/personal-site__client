import { TElementTheme } from 'definitions';
import { CONTROLS__CONTROL_SUBSCRIPTION } from 'theme/images';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        width: '16px',
        height: '16px',
        backgroundImage: `url('${CONTROLS__CONTROL_SUBSCRIPTION}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
