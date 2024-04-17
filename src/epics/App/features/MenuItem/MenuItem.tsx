import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import { CWrap } from './MenuItem.styles';

export interface Props extends ComponentProps {}

export const MenuItem: React.FC<Props> = (props): JSX.Element => {
    const { children } = props;
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().MenuItem };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {children}
        </CWrap>
    );
};

export default MenuItem;
