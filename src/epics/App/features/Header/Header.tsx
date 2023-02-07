import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import { CWrap } from './Header.styles';

export type TProps = TComponentProps & {};

export const Header: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Header };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    Header
  </CWrap>);
};

export default Header;
