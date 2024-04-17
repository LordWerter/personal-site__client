import { RootState, ComponentProps } from 'types';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Article.styles';

export interface Props extends ComponentProps {}

export const Article: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Article };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            Articles
        </CWrap>
    );
};

export default Article;
