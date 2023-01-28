import { TElementTheme } from '../../../../../definitions';
import { CONTROLS__EXIT } from 'theme/images';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        width: '24px',
        height: '24px',
        backgroundImage: `url('${CONTROLS__EXIT}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        transform: 'translateY(-1px)',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
