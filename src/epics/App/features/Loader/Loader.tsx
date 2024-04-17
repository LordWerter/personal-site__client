import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import { CWrap } from './Loader.styles';

export interface Props extends ComponentProps {}

export const Loader: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Menu };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            Loader
        </CWrap>
    );
};

export default Loader;
