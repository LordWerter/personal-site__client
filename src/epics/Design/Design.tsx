import { RootState, ComponentProps } from 'types';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Design.styles';

export interface Props extends ComponentProps {}

export const Design: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Design };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            Bio
        </CWrap>
    );
};

export default Design;
