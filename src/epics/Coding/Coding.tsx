import { RootState, ComponentProps } from 'types';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Coding.styles';

export interface Props extends ComponentProps {}

export const Bio: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Bio };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            Bio
        </CWrap>
    );
};

export default Bio;
