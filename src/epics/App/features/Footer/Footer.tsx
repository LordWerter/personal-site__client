import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, TComponentProps } from '../../../../definitions';
import { Column, CWrap } from './Footer.styles';
import lang from './lang';

export type TProps = TComponentProps & {};

export const Footer: React.FC<TProps> = (): JSX.Element => {
    const {
        App: { sizeId = 'mobile', langId = 'ru' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Footer };
    const langs = lang[langId];

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
