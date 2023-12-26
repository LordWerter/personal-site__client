import { RootState, TComponentProps } from 'definitions';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Home.styles';

export type TProps = TComponentProps & {};

export const Home: React.FC<TProps> = (): JSX.Element => {
    const {
        App: { sizeId = 'mobile', langId = 'ru' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Home };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {'Home Page'}
        </CWrap>
    );
};

export default Home;
