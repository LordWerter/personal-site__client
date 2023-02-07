import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import { CWrap } from './MenuItem.styles';

export type TProps = TComponentProps & {};

export const MenuItem: React.FC<TProps> = (props): JSX.Element => {
  const { children } = props;
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().MenuItem };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    {children}
  </CWrap>);
};

export default MenuItem;
