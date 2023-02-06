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
} from './ProfileCard.styles';

export type TProps = TComponentProps & {};

export const ProfileCard: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  // @ts-ignore
  const theme = { ...useTheme().Modal };
  const langs = lang[langId];


  return (<CWrap sizeId={sizeId} theme={theme.cwrap}>
    <ModalWrap sizeId={sizeId} theme={theme.modalwrap}>

    </ModalWrap>
  </CWrap>);
};

export default ProfileCard;
