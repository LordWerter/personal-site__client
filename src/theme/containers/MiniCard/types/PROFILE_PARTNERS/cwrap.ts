import { TElementTheme } from 'definitions';
import { FLEX_GAP } from '../../../../constants';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'left',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '20px',
        width: `calc(50% - ${FLEX_GAP} / 2)`,
        height: '180px',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s ease 0s',
        // @ts-ignore
        '&:hover': {
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 6px rgb(0 0 0 / 15%)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
