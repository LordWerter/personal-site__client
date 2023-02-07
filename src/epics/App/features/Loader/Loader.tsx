import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import { CWrap } from './Loader.styles';

export type TProps = TComponentProps & {};

export const Loader: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Menu };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    Loader
  </CWrap>);
};

export default Loader;
