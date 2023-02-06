import React from 'react';

import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import {
    RootState,
    TComponentProps,
} from '../../../../definitions';
import lang from './lang';
import {
    CWrap,
    ModalWrap,
} from './MenuItem.styles';

export type TProps = TComponentProps & {};

export const MenuItem: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().MenuItem };
  const langs = lang[langId];


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    <ModalWrap sizeId={sizeId} theme={theme.modalwrap}>

    </ModalWrap>
  </CWrap>);
};

export default MenuItem;
