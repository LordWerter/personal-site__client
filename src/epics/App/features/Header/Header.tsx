import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import { CWrap } from './Header.styles';

export interface Props extends ComponentProps {}

export const Header: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Header };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            Header
        </CWrap>
    );
};

export default Header;
