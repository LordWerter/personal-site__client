import { RootState, ComponentProps } from 'types';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Home.styles';

export interface Props extends ComponentProps {}

export const Home: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Home };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            {'Home Page'}
        </CWrap>
    );
};

export default Home;
