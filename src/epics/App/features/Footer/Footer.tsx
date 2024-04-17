import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import { Column, CWrap } from './Footer.styles';

export interface Props extends ComponentProps {}

export const Footer: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Footer };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <Column sizeId={sizeId} theme={theme.column}>
                Column #1
            </Column>
            <Column sizeId={sizeId} theme={theme.column}>
                Column #2
            </Column>
            <Column sizeId={sizeId} theme={theme.column}>
                Column #3
            </Column>
        </CWrap>
    );
};

export default Footer;
