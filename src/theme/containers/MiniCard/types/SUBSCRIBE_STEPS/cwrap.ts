import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        minWidth: '256px',
        width: '100%',
        height: '200px',
        backgroundPosition: '16px 16px',
        backgroundSize: '48px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#EFF2F5',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '16px',
        padding: '80px 16px 16px',
        display: 'flex',
        flexDirection: 'column',
    },
    mobile: {
        height: '220px',
    },
    laptop: {},
    desktop: {},
};

export default blocks;
