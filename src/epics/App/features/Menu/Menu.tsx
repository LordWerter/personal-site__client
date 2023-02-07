import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { MenuItem } from '../';
import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import { CWrap } from './Menu.styles';

export type TProps = TComponentProps & {};

export const Menu: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Menu };


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    <MenuItem sizeId={sizeId} langId={langId} />
  </CWrap>);
};

export default Menu;
