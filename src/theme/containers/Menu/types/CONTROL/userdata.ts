import { TElementTheme } from '../../../../../definitions';

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
        gap: '24px',
        width: '100%',
        background: '#f7f7f9',
        boxShadow: 'inset -1px 1px 0px rgb(255 255 255 / 68%)',
        borderRadius: '20px',
        marginBottom: '24px',
        padding: '24px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
