import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { MenuItem } from '../';
import { RootState, ComponentProps } from 'types';
import { CWrap } from './Menu.styles';

export interface Props extends ComponentProps {}

export const Menu: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE', langId },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Menu };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <MenuItem sizeId={sizeId} langId={langId} />
        </CWrap>
    );
};

export default Menu;
