import controls from '../../images/controls';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 'auto',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        padding: '0',
        background: 'none',
        border: 'none',
        transition: 'all 0.15s ease',
        backgroundImage: `url('${controls.CONTROLS__CROSS_WHITE}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
