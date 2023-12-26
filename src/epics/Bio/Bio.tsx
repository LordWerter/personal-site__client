import { RootState, TComponentProps } from 'definitions';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Bio.styles';

export type TProps = TComponentProps & {};

export const Bio: React.FC<TProps> = (): JSX.Element => {
    const {
        App: { sizeId = 'mobile', langId = 'ru' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Bio };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            Bio
        </CWrap>
    );
};

export default Bio;
