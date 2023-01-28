import types from './btnTypes';
import { TElementTheme } from 'definitions';

/*
import {} from '../../../../images';
import colors from '../../colors';
import mixins from '../../mixins';
import { core as Typography } from '../../typography';
*/

export const blocks: TElementTheme = {
    core: {
        width: '30%',
        backgroundColor: '#3f89fc',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '48px',
        border: 'none',
        borderRadius: '24px',
        cursor: 'pointer',
        margin: '0',
        padding: '0',
    },
    mobile: {},
    laptop: {},
    desktop: {},
    // @ts-ignore
    types,
};

export default blocks;
