import { RootState, ComponentProps } from 'types';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Articles.styles';

export type TProps = ComponentProps & {};

export const Articles: React.FC<TProps> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Articles };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            Articles
        </CWrap>
    );
};

export default Articles;
