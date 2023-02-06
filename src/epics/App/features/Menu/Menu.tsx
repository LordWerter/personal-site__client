import React from 'react';

import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import lang from './lang';

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
  const langs = lang[langId];


  return <></>;
};

export default Menu;
