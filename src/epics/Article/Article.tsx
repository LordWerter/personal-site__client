import {
    RootState,
    TComponentProps,
} from 'definitions';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Article.styles';

export type TProps = TComponentProps & {};

export const Article: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Article };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    Articles
  </CWrap>);
};

export default Article;
