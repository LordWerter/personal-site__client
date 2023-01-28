import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

import { FLEX_GAP } from '../../../../constants';

export const blocks: TElementTheme = {
    core: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: `calc(50% - ${FLEX_GAP} / 2)`,
        height: '128px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '12px 12px',
        backgroundSize: '50px',
        padding: '12px 12px 12px 72px',
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.35s ease 0s',
        // @ts-ignore
        '&:hover': {
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 6px rgb(0 0 0 / 15%)',
        },
    },
    mobile: {
        width: '100%',
    },
    laptop: {},
    desktop: {},
};

export default blocks;
