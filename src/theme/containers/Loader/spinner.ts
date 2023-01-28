import { TElementTheme } from 'definitions';
import { LOADER__SPINNER } from '../../images';

/*
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        backgroundImage: `url('${LOADER__SPINNER}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: '45px',
        height: '45px',
        animationDuration: '2.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        transform: 'scale(0.8)',
        transition: 'transform 3s ease-in-out',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
