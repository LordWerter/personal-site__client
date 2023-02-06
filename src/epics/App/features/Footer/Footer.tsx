import React from 'react';

import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import { CWrap } from './Footer.styles';
import lang from './lang';

export type TProps = TComponentProps & {};

export const Footer: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Footer };
  const langs = lang[langId];


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    
  </CWrap>);
};

export default Footer;
