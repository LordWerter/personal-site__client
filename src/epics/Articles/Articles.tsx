import {
    RootState,
    TComponentProps,
} from 'definitions';
import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { CWrap } from './Articles.styles';

export type TProps = TComponentProps & {};

export const Articles: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Articles };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    Articles
  </CWrap>);
};

export default Articles;
