import { CHARACTERS__OFFERS_RIGHT } from '../../../../images';
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
        right: '0',
        top: '-180px',
        zIndex: 3,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CHARACTERS__OFFERS_RIGHT}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    mobile: {
        display: 'none',
    },
    laptop: {
        display: 'block',
        width: '50%',
        height: '200px',
    },
    desktop: {
        display: 'block',
        width: '33%',
        height: '260px',
    },
};

export default blocks;
